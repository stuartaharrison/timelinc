import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePocket } from "../../hooks/PocketContext.tsx";
import { TimesheetType } from "../../types/TimesheetType.ts";

type TimesheetManagementContextType = {
    isLoading: boolean,
    timesheets: TimesheetType[] | null
};

const TimesheetManagementContext = createContext<TimesheetManagementContextType>({ });

export const useTimesheets = () => useContext(TimesheetManagementContext);

export const TimesheetManagementProvider = ({ children } : Readonly<{ children?: React.ReactNode | null | undefined }>) => {
    const { pb } = usePocket();
    const { data, error, isLoading } = useQuery({
        queryKey: ['timesheets'],
        queryFn: async () => await pb!.collection("timesheets").getFullList({
            expand: "userId,projectId",
            sort: '-shiftStart,-created'
        }),
        enabled: !!pb
    });

    return (
        <TimesheetManagementContext.Provider value={{ isLoading, timesheets: data as TimesheetType[] }}>
            {children}
        </TimesheetManagementContext.Provider>
    );
};