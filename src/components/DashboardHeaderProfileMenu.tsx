import { PocketBaseImage } from "./PocketBaseImage.tsx";
import { usePocket } from "../hooks/PocketContext.tsx";

export const DashboardHeaderProfileMenu = () => {
    const { user } = usePocket();

    if (!user) {
        return null;
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="flex items-center justify-center border-l-2 border-base-300 overflow-hidden">
                {user.avatar && (
                    <div className="avatar">
                        <div className="w-8 mx-3 rounded-full">
                            <PocketBaseImage
                                alt={user.name}
                                collectionId={user.collectionId}
                                fileName={user.avatar}
                                recordId={user.id}
                            />
                        </div>
                    </div>
                )}
                <div className="flex flex-col justify-center leading-tight">
                    <div className="text-sm">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.group}</div>
                </div>
            </div>
            <ul tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
            </ul>
        </div>
    );
};