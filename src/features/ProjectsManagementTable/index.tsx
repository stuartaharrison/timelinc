import { PocketBaseImage } from "../../components/PocketBaseImage.tsx";
import { useProjects } from "../../hooks/ProjectsContext.tsx";

export const ProjectsManagementTable = () => {
    const { isLoading, projects } = useProjects();

    if (isLoading) {
        return (<h1>LOADING!</h1>)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
                {(!projects || projects.length === 0) && (
                    <tr>
                        <td colSpan="3">There are no projects available.</td>
                    </tr>
                )}
                {projects && projects.map(el => (
                    <tr key={el.id}>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <PocketBaseImage alt={el.name} collectionId={el.collectionId} fileName={el.image} recordId={el.id} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{el.name}</div>
                                </div>
                            </div>
                        </td>
                        <td>{el.description}</td>
                        <td>{el.created}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
