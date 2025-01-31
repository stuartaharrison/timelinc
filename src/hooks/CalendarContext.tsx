import React, { createContext, useContext, useMemo, useState } from "react";
import { DateTime } from "luxon";

type CalendarContextType = {
    now: DateTime,
    end: DateTime,
    start: DateTime,
    week: number,
    isCurrentWeek: boolean,
    backwardWeek: () => void,
    forwardWeek: () => void
};

type CalendarContextProviderType = {
    children?: React.ReactNode | null | undefined,
    date?: DateTime | null
};

const CalendarContext = createContext<CalendarContextType>({});

export const useCalendar = () => useContext(CalendarContext);

export const CalendarProvider = ({ children, date } : Readonly<CalendarContextProviderType>) => {
    const [now, _setNow] = useState(date ?? DateTime.now());

    const end = useMemo(() => now.endOf('week'), [ now ]);
    const start = useMemo(() => now.startOf('week'), [ now ]);
    const weekNumber = useMemo(() => now.toFormat('W') as number, [ now ]);
    const isCurrentWeek = useMemo(() => weekNumber === DateTime.now().toFormat('W') as number, [ weekNumber ])

    const backwardWeek = () => _setNow(curr => curr.minus({ week: 1 }));

    const forwardWeek = () => _setNow(curr => curr.plus({ week: 1 }));

    return (
        <CalendarContext.Provider value={{ now, end, start, week: weekNumber, isCurrentWeek, backwardWeek, forwardWeek }}>
            {children}
        </CalendarContext.Provider>
    );
};