import { ISelectorParams } from "../../types";
import { SelectOptions } from "./SelectOptions/SelectOptions";
import styles from "./Selector.module.css";
import { v4 as id } from "uuid";

export const Selector = ({ name, options }: ISelectorParams) => {
  return (
    <>
      <select name={name} className={styles.select}>
        {options.map((option) => (
          <SelectOptions key={id()} value={option.value} text={option.text} />
        ))}
      </select>
    </>
  );
};
