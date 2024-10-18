import { SigninType } from "./SignInType";

export type InputType = {
    id: number;
    name: keyof SigninType;  
    type: string;
    placeholder: string;
}