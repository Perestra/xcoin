import styles from "./SelectInput.module.scss";
import * as Select from "@radix-ui/react-select";

import { SelectItem } from "../ui/select";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  data: { value: string; label: string }[]; 
}

export const SelectInput = ({ data }: Props) => {
  return (
    <Select.Root>
      <Select.Trigger className={styles.select} aria-label="Currency">
        <Select.Value className={styles.select__value} placeholder="Selecine sua moeda principal" />
          <IoIosArrowDown className={styles.select__icon}/>
      </Select.Trigger>
      <Select.Content className={styles.select__content} position="popper">
        <Select.Viewport className={styles.select__viewport} >
          <Select.Group>
          {data.map( (item, index) => (
            <SelectItem className={styles.select__item} key={index} value={item.value}> {item.value} - {item.label}</SelectItem>  
          ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
	</Select.Root>
  )
}
