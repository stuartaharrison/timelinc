import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DateTime } from "luxon";
import { useQuery } from "@tanstack/react-query";
import { usePocket } from "./PocketContext.tsx";
import { TimesheetType } from "../types/TimesheetType.ts";

type TimeSheetContextType = {
    isLoading: boolean,
    timesheets: TimesheetType[]
};

type TimeSheetContextProviderType = {
    children?: React.ReactNode | null | undefined,
    isPersonal?: boolean,
    startDate?: DateTime | null,
    endDate?: DateTime | null,
};

const buildFilter = (isPersonal = true, startDate, endDate) => {

};

const TimeSheetContext = createContext<TimeSheetContextType>({ });

export const useTimeSheets = () => useContext(TimeSheetContext);

export const TimeSheetsProvider = ({ children, isPersonal, startDate, endDate } : Readonly<TimeSheetContextProviderType>) => {
    const { pb, user } = usePocket();
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['timesheets'],
        queryFn: async () => await pb!.collection("timesheets").getFullList({
            filter: `shiftStart>='${startDate?.toFormat('yyyy-MM-dd')}' && shiftEnd<='${endDate?.toFormat('yyyy-MM-dd')}'`,
            expand: "userId,projectId",
            sort: '-shiftStart,-created'
        }),
        enabled: !!pb
    });

    useEffect(() => {
        refetch();
    }, [ isPersonal, startDate, endDate, refetch ]);

    return (
        <TimeSheetContext.Provider value={{ isLoading, timesheets: data as TimesheetType[] }}>
            {children}
        </TimeSheetContext.Provider>
    );
};