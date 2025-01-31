import _ from "lodash";
import { useMemo } from "react";
import { DateTime, Interval } from "luxon";
import { TimesheetType } from "../types/TimesheetType.ts";
import { UserType } from "../types/UserType.ts";

type timesheetUserGroup = {
    userId: string,
    user: UserType | null,
    name: string | null,
    timesheets: timesheetGroupedByDate[]
};

type timesheetGroupedByDate = {
    date: DateTime,
    totalHours: number,
    timesheets: TimesheetType[]
};

type useTimeSheetGroupedByWeeksReturns = {
    dateRange: DateTime[],
    timesheets: timesheetUserGroup[]
};

export const useTimeSheetGroupedByWeeks = (
    timesheets: TimesheetType[],
    startDate: DateTime,
    endDate: DateTime
) : useTimeSheetGroupedByWeeksReturns => {
    /** This calculates every date in the week beginning from the start date and finishing with the end date */
    const dateRange: DateTime[] = useMemo(() => {
        const dayCount = Math.round(Interval.fromDateTimes(startDate, endDate).length('days'));
        const values : DateTime[] = [];
        for (let i = 0; i < dayCount; i++) {
            values.push(startDate.plus({ 'days': i }));
        }
        return values;
    }, [ startDate, endDate ]);

    /** Groups all TimeSheets by the user-id who owns them - then groups them again by the date of the shift */
    const groupedByUser = useMemo(() => {
        const grouping = _.groupBy(timesheets, 'userId');
        return Object.keys(grouping).map(el => {
            const data = grouping[el];
            const timesheetGrp =  _.groupBy(data, 'shiftStart');
            const timesheets = Object.keys(timesheetGrp).map(startDate => {
                const grpData = timesheetGrp[startDate];
                return {
                    date: DateTime.fromJSDate(new Date(startDate)),
                    totalHours: 9,
                    timesheets: grpData
                } as timesheetGroupedByDate;
            });

            return {
                userId: el,
                user: data[0]?.expand?.userId,
                name: data[0]?.expand?.userId?.name,
                timesheets: timesheets
            } as timesheetUserGroup;
        })
    }, [ timesheets ]);

    console.log('groupings', { dateRange, groupedByUser });

    return {
        dateRange,
        timesheets: groupedByUser
    } as useTimeSheetGroupedByWeeksReturns;
};