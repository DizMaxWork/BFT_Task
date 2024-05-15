import { ISelectOptionParams } from "../../../types";

export const SelectOptions = ({ text, value }: ISelectOptionParams) => {
  return <option value={value}>{text}</option>;
};
