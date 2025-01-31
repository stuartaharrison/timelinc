import _ from "lodash";
import React from "react";
import { useCalendar } from "../hooks/CalendarContext.tsx";
import { useTimeSheets } from "../hooks/TimeSheetContext.tsx";
import { useTimeSheetGroupedByWeeks } from "../hooks/useTimeSheetGroupedByWeeks.tsx";

type TimeSheetWeeklyViewTableType = {

};

export const TimeSheetWeeklyViewTable = ({ } : Readonly<TimeSheetWeeklyViewTableType>) => {
    const { start, end } = useCalendar();
    const { isLoading, timesheets } = useTimeSheets();
    const { dateRange, timesheets: groupings } = useTimeSheetGroupedByWeeks(timesheets, start, end);

    if (isLoading) {
        return (<h1>LOADING!</h1>)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>User</th>
                    {dateRange.map((el, i) => (
                        <th key={i} className="text-right">
                            <p>
                                {el.toFormat('EEE')}
                                <br/>
                                {el.toFormat('d MMM')}
                            </p>
                        </th>
                    ))}
                    <th className="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                {groupings && groupings.map((el, i) => (
                    <tr key={i} className="border-b border-t border-gray-400">
                        <td>{el.name}</td>
                        {dateRange.map((dt, j) => (
                            <td key={`${i}-${j}`} className="text-right">
                                {el.timesheets.find(v => v.date.startOf('day') == dt.startOf('day'))?.totalHours ?? (<span>-</span>)}
                            </td>
                        ))}
                        <td>&nbsp;</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};