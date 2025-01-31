import { usePocket } from "../hooks/PocketContext.tsx";
import { Navigate, Outlet, useLocation } from "react-router"

export const ProtectedRoute = () => {
    const { user } = usePocket();
    const location = useLocation();

    if (!user) {
        return (
            <Navigate to={{ pathname: "/sign-in" }} state={{ location }} replace />
        );
    }

    return <Outlet />
};