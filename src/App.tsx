import { Routes, Route } from "react-router";
import { AppLayout } from "./components/layouts/AppLayout.tsx";
import { DashboardLayout } from "./components/layouts/DashboardLayout.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Home from "./pages/Home.tsx";
import PersonalTimeSheets from "./pages/dashboard/PersonalTimeSheets.tsx";
import ProjectsManagement from "./pages/management/ProjectsManagement.tsx";
import TimesheetManagement from "./pages/management/TimesheetManagement.tsx";
import SignIn from "./pages/SignIn.tsx";

const App = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forbidden" element={<h1>Oops! You are not allowed to view that!</h1>} />
        <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="timesheets" element={<PersonalTimeSheets />} />
            </Route>
            <Route path="/manage" element={<DashboardLayout />} >
                <Route index element={<h1>Not Found</h1>} />
                <Route path="projects" element={<ProjectsManagement />} />
                <Route path="timesheets" element={<TimesheetManagement />} />
                <Route path="users" element={<h1>Users</h1>} />
            </Route>
            <Route path="/settings" element={<DashboardLayout />}>
                <Route index element={<h1>Settings</h1>} />
            </Route>
        </Route>
    </Routes>
);

export default App;