import React from "react";
import classnames from "classnames";
import { ProjectNameDisplayTableColumn } from "../../components/tables/ProjectNameDisplayTableColumn.tsx";
import { TimeSheetStatusDisplay } from "../../components/TimeSheetStatusDisplay.tsx";
import { UserNameDisplayTableColumn } from "../../components/tables/UserNameDisplayTableColumn.tsx";
import { useTimeSheetDates } from "../../hooks/useTimeSheetDates.tsx";
import { TimesheetType } from "../../types/TimesheetType.ts";

import { MdEditNote } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

type TimesheetManagementTableRowType = {
    timesheet: TimesheetType
};

export const TimesheetManagementTableRow = ({ timesheet } : Readonly<TimesheetManagementTableRowType>) => {
    const { startDate, startTime, endTime } = useTimeSheetDates(timesheet);
    return (
        <tr className="align-middle">
            <UserNameDisplayTableColumn user={timesheet.expand?.userId}/>
            <td>
                <span>{startDate}</span>
            </td>
            <td>
                <span>{startTime}</span> - <span>{endTime}</span>
            </td>
            <ProjectNameDisplayTableColumn project={timesheet.expand?.projectId}/>
            <td>
                <div className="flex items-center gap-2">
                    <div className={classnames('text-2xl cursor-pointer')}>
                        <MdEditNote/>
                    </div>
                    <div className={classnames('text-xl cursor-pointer')}>
                        <IoIosAttach/>
                    </div>
                </div>
            </td>
            <td>
                <div className="group flex gap-2 items-center cursor-pointer">
                    <TimeSheetStatusDisplay timesheet={timesheet}/>
                    {timesheet.approvalStatus === 'Submitted' && (
                        <div className="hidden group-hover:flex gap-3 ms-3 transition duration-700 ease-in-out">
                            <div className="text-xl text-success">
                                <FaCheckCircle/>
                            </div>
                            <div className="text-xl text-error">
                                <FaTimesCircle/>
                            </div>
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
};