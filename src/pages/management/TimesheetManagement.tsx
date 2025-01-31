import classnames from "classnames";
import TimesheetManagementTable from "../../features/TimesheetManagementTable";
import { CalendarWeekSelect } from "../../components/CalendarWeekSelect.tsx";
import { TimeSheetWeeklyViewTable } from "../../components/TimeSheetWeeklyViewTable.tsx";
import { withProviders } from "../../hooks/withProviders.tsx";
import { TimeSheetsProvider } from "../../hooks/TimeSheetContext.tsx";
import { CalendarProvider, useCalendar } from "../../hooks/CalendarContext.tsx";
import { DataViewProvider, useDataView } from "../../hooks/DataViewContext.tsx";

const TimesheetManagement = () => {
    const { start, end } = useCalendar();
    const { availableViews, changeView, currentIndex } = useDataView();
    return (
        <main className="px-8 py-4">
            <div className="breadcrumbs text-xl mb-4">
                <ul>
                    <li>Timesheet Management</li>
                </ul>
            </div>
            <div className="overflow-x-auto">
                <div className="flex">
                    <CalendarWeekSelect className="flex-1" />
                    <div className="join">
                        {availableViews.map((el, i) => (
                            <button
                                key={i}
                                onClick={() => changeView(i)}
                                className={classnames("btn btn-outline join-item" as any, { 'btn-active': i === currentIndex } as any)}
                            >
                                {el}
                            </button>
                        ))}
                    </div>
                </div>
                <TimeSheetsProvider isPersonal={false} startDate={start} endDate={end}>
                    {currentIndex === 0 && (
                        <TimesheetManagementTable/>
                    )}
                    {currentIndex === 1 && (
                        <TimeSheetWeeklyViewTable />
                    )}
                </TimeSheetsProvider>
            </div>
        </main>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withProviders(
    CalendarProvider,
    [DataViewProvider, { availableViews: ["Grid", "Week"] }]
)(TimesheetManagement);