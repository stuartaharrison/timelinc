import React from "react";
import classnames from "classnames";
import { TimesheetType } from "../types/TimesheetType.ts";

type TimeSheetStatusDisplayType = {
    timesheet: TimesheetType  
};

export const TimeSheetStatusDisplay = ({ timesheet } : Readonly<TimeSheetStatusDisplayType>) => (
    <div className={classnames(
        'badge w-24 p-4' as never, 
        {
            'badge-primary primary-content': timesheet.approvalStatus === 'Submitted',
            'badge-success success-content': timesheet.approvalStatus === 'Approved',
            'badge-error error-content': timesheet.approvalStatus === 'Rejected'
        } as never
    )}>
        {timesheet.approvalStatus}
    </div>
);