import { isUserAuth } from "@/authentication/isUserAuth";
import { useAccountContext } from "@/hooks/useAccountContext";
import { useAuthAccountContext } from "@/hooks/useAuthAccountContext";
import { SignIn } from "@/pages/SignIn/SignIn";

type Props = {
    children: React.ReactNode
}

export const RequireAuth: React.FC<Props> = ({ children }) => {

    const { accounts } = useAccountContext()
    const { authAccount } = useAuthAccountContext()

    if(!isUserAuth(accounts, authAccount)) {
        return <SignIn />
    }

    return children
}