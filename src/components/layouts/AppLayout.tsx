import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const AppLayout = () => (
    <QueryClientProvider client={queryClient}>
        <Outlet />
    </QueryClientProvider>
);