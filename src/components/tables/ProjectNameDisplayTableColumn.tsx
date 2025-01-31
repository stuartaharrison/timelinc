import React from "react";
import { PocketBaseImage } from "../PocketBaseImage.tsx";
import { ProjectType } from "../../types/ProjectType.ts";

type ProjectNameDisplayTableColumnType = {
    project: ProjectType | null | undefined
};

export const ProjectNameDisplayTableColumn = ({ project } : Readonly<ProjectNameDisplayTableColumnType>) => {
    if (!project) {
        return (
            <td>
                <span>-</span>
            </td>
        );
    }

    return (
        <td>
            <div className="flex items-center gap-3">
                {project.image && project.image.length > 0 && (
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <PocketBaseImage
                                alt={project.name}
                                collectionId={project.collectionId}
                                fileName={project.image}
                                recordId={project.id}
                            />
                        </div>
                    </div>
                )}
                <div>
                    <div>{project.name}</div>
                </div>
            </div>
        </td>
    );
};