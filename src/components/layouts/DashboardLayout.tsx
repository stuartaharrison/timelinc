import { Navigate, Outlet, useLocation } from "react-router";
import { DashboardHeader } from "../DashboardHeader.tsx";
import { NavigationDrawer } from "../navigation/NavigationDrawer.tsx";
import { usePocket } from "../../hooks/PocketContext.tsx";

type DashboardLayoutProps = {
    isAccountManagerRequired?: boolean,
    isSystemAdminRequired?: boolean
};

export const DashboardLayout = () => {
    const navId = "app-navigation-drawer";
    const location = useLocation();
    const { user } = usePocket();

    if (!user) {
        return (
            <Navigate to={{ pathname: "/sign-in" }} state={{ location }} replace />
        );
    }

    return (
        <NavigationDrawer navId={navId}>
            <DashboardHeader navId={navId} />
            <Outlet />
        </NavigationDrawer>
    );
};