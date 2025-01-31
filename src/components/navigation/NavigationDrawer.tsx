import React from "react";
import { NavigationDrawerFooter } from "./NavigationDrawerFooter.tsx";
import { NavigationDrawerHeader } from "./NavigationDrawerHeader.tsx";
import { NavigationDrawerMenu } from "./NavigationDrawerMenu.tsx";

type NavigationDrawerProps = {
    navId: string,
    children: React.ReactNode
};

export const NavigationDrawer = ({ children, navId } : Readonly<NavigationDrawerProps>) => (
    <div className="drawer lg:drawer-open">
        <input id={navId} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-base-200">
            {children}
        </div>
        <div className="drawer-side">
            <label htmlFor={navId} aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="flex flex-col bg-base-100 text-base-content min-h-full w-80 p-0">
                <NavigationDrawerHeader />
                <NavigationDrawerMenu />
                <NavigationDrawerFooter />
            </div>
        </div>
    </div>
);