import classnames from "classnames";

type DashboardHeaderLogoType = {
    className?: string | null
};

export const DashboardHeaderLogo = ({ className } : Readonly<DashboardHeaderLogoType>) => (
    <a className={classnames("btn btn-ghost text-xl", className)}>Timelinc!</a>
);