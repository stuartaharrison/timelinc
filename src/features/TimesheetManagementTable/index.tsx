import classnames from "classnames";
import { TimesheetManagementTableRow } from "./TimesheetManagementTableRow.tsx";
import { useTimeSheets } from "../../hooks/TimeSheetContext.tsx";

type TimesheetManagementTableType = {

};

const TimesheetManagementTable = ({  }) => {
    const { isLoading, timesheets } = useTimeSheets();

    if (isLoading) {
        return (<h1>LOADING!</h1>)
    }

    console.log('TIMESHEETS', timesheets);

    return (
        <table className="table">
            <thead>
            <tr>
                <th>User</th>
                <th>Date</th>
                <th>Time</th>
                <th>Project</th>
                <th>Notes</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {(!timesheets || timesheets.length === 0) && (
                <tr>
                    <td colSpan="5">There are no TimeSheets available.</td>
                </tr>
            )}
            {timesheets && timesheets.map(el=> <TimesheetManagementTableRow key={el.id} timesheet={el} />)}
            </tbody>
        </table>
    );
};

export default TimesheetManagementTable;