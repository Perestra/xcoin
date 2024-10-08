import { TbCurrencyReal } from "react-icons/tb";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbCurrencyEuro } from "react-icons/tb";
import { TbCurrencyPound } from "react-icons/tb";
import { TbCurrencyFrank } from "react-icons/tb";
import { TbCurrencyYen } from "react-icons/tb";

const currencyType: Record<string, React.ElementType> = {
    "TbCurrencyReal": TbCurrencyReal,
    "TbCurrencyDollar": TbCurrencyDollar,
    "TbCurrencyEuro": TbCurrencyEuro,
    "TbCurrencyPound": TbCurrencyPound,
    "TbCurrencyFrank": TbCurrencyFrank,
    "TbCurrencyYen": TbCurrencyYen
}

export {currencyType};