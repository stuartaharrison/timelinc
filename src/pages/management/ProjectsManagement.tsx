import { ProjectsProvider } from "../../hooks/ProjectsContext.tsx";
import { ProjectsManagementTable } from "../../features/ProjectsManagementTable";

const ProjectsManagement = () => (
    <ProjectsProvider>
        <main className="px-8 py-4">
            <div className="breadcrumbs text-xl mb-4">
                <ul>
                    <li>Project Management</li>
                </ul>
            </div>
            <div className="overflow-x-auto">
                <ProjectsManagementTable />
            </div>
        </main>
    </ProjectsProvider>
);

export default ProjectsManagement;