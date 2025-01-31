import { DateTime, DurationObjectUnits } from "luxon";
import { TimesheetType } from "../types/TimesheetType.ts";

export type TimeSheetDates = {
    start: DateTime,
    end: DateTime,
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string,
    difference: DurationObjectUnits
};

/** Hook that basically converts the string time values from PocketBase and does any calculations */
export const useTimeSheetDates = (timesheet: TimesheetType) : TimeSheetDates => {
    const start = DateTime.fromJSDate(new Date(timesheet.shiftStart));
    const end = DateTime.fromJSDate(new Date(timesheet.shiftEnd));

    const startDate = start.toFormat('EEE, dd-MM');
    const endDate = end.toFormat('EEE, dd-MM');

    const startTime = start.toFormat('h:mm a');
    const endTime = end.toFormat('h:mm a');

    const difference = end.diff(start, ['hours', 'minutes']).toObject();

    return { start, end, startDate, startTime, endDate, endTime, difference };
};