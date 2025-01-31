import React, { createContext, useContext, useMemo, useState } from "react";

type DataViewContextType = {
    availableViews: string[],
    changeView: (index: number) => void,
    currentIndex: number,
    viewName: string | null
};

type DataViewContextProviderType = {
    availableViews: string[],
    children?: React.ReactNode | null | undefined,
    defaultIndex?: number
};

const DataViewContext = createContext<DataViewContextType>({
    availableViews: [],
    changeView: () => { },
    currentIndex: 0,
    viewName: null
});

export const useDataView = () => useContext(DataViewContext);

export const DataViewProvider = ({ availableViews, children, defaultIndex } : Readonly<DataViewContextProviderType>) => {
    const [i, _setI] = useState(defaultIndex ?? 0);
    const viewName : string = useMemo(() => {
        if (i >= availableViews.length) {
            return "";
        }
        return availableViews[i];
    }, [ i ]);

    const changeView = (index) => _setI(() => index);

    return (
        <DataViewContext.Provider value={{ availableViews, changeView, currentIndex: i, viewName }}>
            {children}
        </DataViewContext.Provider>
    );
};