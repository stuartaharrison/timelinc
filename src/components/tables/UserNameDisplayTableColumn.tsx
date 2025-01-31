import React from "react";
import { PocketBaseImage } from "../PocketBaseImage.tsx";
import { UserType } from "../../types/UserType.ts";

type UserNameDisplayTableColumnType = {
    user: UserType | null | undefined
};

export const UserNameDisplayTableColumn = ({ user } : Readonly<UserNameDisplayTableColumnType>) => {
    if (!user) {
        return (
            <td>
                <span>Unknown User Data</span>
            </td>
        );
    }

    return (
        <td>
            <div className="flex items-center gap-3">
                {user.avatar && user.avatar.length > 0 && (
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <PocketBaseImage
                                alt={user.name}
                                collectionId={user.collectionId}
                                fileName={user.avatar}
                                recordId={user.id}
                            />
                        </div>
                    </div>
                )}
                <div>
                    <div>{user.name}</div>
                </div>
            </div>
        </td>
    );
}