import { DashboardHeaderLogo } from "./DashboardHeaderLogo.tsx";
import { DashboardHeaderProfileMenu } from "./DashboardHeaderProfileMenu.tsx";

type DashboardHeaderType = {
    navId: string
};

export const DashboardHeader = ({ navId } : Readonly<DashboardHeaderType>) => {
    return (
        <div className="navbar sticky top-0 z-40 h-12 w-full bg-base-100 border-b-2 border-base-300">
            <div className="flex-none lg:hidden">
                <label htmlFor={navId} aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div className="flex-1">
                <DashboardHeaderLogo className="lg:hidden"/>
            </div>
            <div className="flex-none mx-2">
                <DashboardHeaderProfileMenu />
            </div>
        </div>
    );
};