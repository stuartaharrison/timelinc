import { ProjectType } from "./ProjectType.ts";
import { UserType } from "./UserType.ts";

type TimesheetExpand = {
    projectId: ProjectType | null,
    userId: UserType | null
}

export type TimesheetType = {
    id: string,
    userId: string,
    projectId: string | null,
    shiftStart: string,
    shiftEnd: string,
    approvalStatus: string,
    approvalUserId: string | null,
    approvalDate: string | null,
    expand: TimesheetExpand | null,
    created: Date,
    updated: Date
};