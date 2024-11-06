import { AuthAccountType } from "./AuthAccountType"


export type AuthContextType = {
    authAccount: AuthAccountType;
    setAuthAccount: React.Dispatch<React.SetStateAction<AuthAccountType | undefined>>;
}