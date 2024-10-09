import { SigninType } from '../utils/SigninForm'

export type InputType = {
    id: number;
    name: keyof SigninType;  
    type: string;
    placeholder: string;
}