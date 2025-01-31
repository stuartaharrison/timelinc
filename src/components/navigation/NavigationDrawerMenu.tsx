import React from "react";
import { NavLink } from "react-router";
import { CiClock1 } from "react-icons/ci";
import { TbClockCheck } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { usePocket } from "../../hooks/PocketContext.tsx";

type NavigationDrawerMenuItemProps = {
    icon?: React.ReactNode | null,
    text: string,
    to: string
};

const NavigationDrawerMenuItem = ({ icon, text, to } : Readonly<NavigationDrawerMenuItemProps>) => (
    <li className="my-1">
        <NavLink to={to} >
            {icon}
            <span>{text}</span>
        </NavLink>
    </li>
);

export const NavigationDrawerMenu = () => {
    const { user } = usePocket();
    return (
        <ul className="menu flex-1 p-4 border-r-2 border-base-300">
            <li className="menu-title">General</li>
            <NavigationDrawerMenuItem text="Dashboard" to="/dashboard" icon={<MdOutlineDashboard/>}/>
            <NavigationDrawerMenuItem text="My Timesheets" to="/dashboard/timesheets" icon={<CiClock1/>}/>
            {user && (user.isSystemAdmin || user.isAccountManager) && (
                <>
                    <li className="menu-title">Management</li>
                    <NavigationDrawerMenuItem text="Projects" to="/manage/projects" icon={<FaProjectDiagram/>}/>
                    <NavigationDrawerMenuItem text="Timesheets" to="/manage/timesheets" icon={<TbClockCheck/>}/>
                    <NavigationDrawerMenuItem text="Users" to="/manage/users" icon={<FaUsersCog/>}/>
                </>
            )}
            {user && user.isSystemAdmin && (
                <>
                    <li className="menu-title">System</li>
                    <NavigationDrawerMenuItem text="Settings" to="/settings" icon={<FaCogs />}/>
                </>
            )}
        </ul>
    );
};