import ms from "ms";
import Client, {RecordAuthResponse, RecordModel} from "pocketbase";
import PocketBase from "pocketbase";
import { jwtDecode } from "jwt-decode";
import { useInterval } from "usehooks-ts";
import { createContext, useContext, useCallback, useState, useEffect, useMemo } from "react";

const BASE_URL = import.meta.env.VITE_POCKETBASE_URL;
const twoMinutesInMs = ms("2 minutes");
const fiveMinutesInMs = ms("5 minutes");

export type PocketAuthenticatedUser = {
    id: string,
    name: string,
    group: string,
    email: string,
    avatar: string | null,
    collectionId: string,
    collectionName: string,
    isSystemAdmin: boolean,
    isAccountManager: boolean
};

type PocketContextType = {
    login?: (email: string, password: string) => Promise<RecordAuthResponse<RecordModel>>,
    logout?: () => void,
    pb: Client | null,
    register?: (email: string, password: string) => Promise<RecordModel>,
    token: string | null,
    user: PocketAuthenticatedUser | null
};

const PocketContext = createContext<PocketContextType>({
    pb: null,
    token: null,
    user: null
});

export const usePocket = () => useContext(PocketContext);

export const PocketProvider = ({ children }) => {
    const pb = useMemo(() => new PocketBase(BASE_URL), []);
    const [token, setToken] = useState(pb.authStore.token);
    const [user, setUser] = useState(pb.authStore.record);
    const isSystemAdmin = user && user.group == "System Administrator";
    const isAccountManager = user && user.group == "Account Manager";

    console.log('user', user);

    useEffect(() => {
        return pb.authStore.onChange((token, model) => {
            setToken(token);
            setUser(model);
        });
    }, []);

    const register = useCallback(async (email, password) => {
        return await pb.collection("users").create({ email, password, passwordConfirm: password });
    }, []);

    const login = useCallback(async (email, password) => {
        return await pb.collection("users").authWithPassword(email, password);
    }, []);

    const logout = useCallback(() => {
        pb.authStore.clear();
    }, []);

    const refreshSession = useCallback(async () => {
        if (!pb.authStore.isValid) {
            return;
        }

        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000;

        if (tokenExpiration < expirationWithBuffer) {
            await pb.collection("users").authRefresh();
        }
    }, [token]);

    useInterval(refreshSession, token ? twoMinutesInMs : null);

    return (
        <PocketContext.Provider value={{
            register,
            login,
            logout,
            user: {
                ...user,
                isAccountManager,
                isSystemAdmin
            } as PocketAuthenticatedUser,
            token,
            pb
        }}>
            {children}
        </PocketContext.Provider>
    );
};

export default PocketContext;