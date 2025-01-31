import React, { createContext, useContext, useCallback, useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePocket } from "./PocketContext.tsx";
import { ProjectType } from "../types/ProjectType.ts";

export type ProjectsContextType = {
    isLoading: boolean,
    projects: ProjectType[] | null
};

const ProjectsContext = createContext<ProjectsContextType>({});

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children } : Readonly<{ children?: React.ReactNode | null }>) => {
    const { pb } = usePocket();
    const { data, error, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => await pb!.collection("projects").getFullList(),
        enabled: !!pb
    });

    return (
        <ProjectsContext.Provider value={{ isLoading, projects: data as ProjectType[] }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export default ProjectsContext;