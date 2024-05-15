import { ChangeEvent } from "react";

export interface ISelectOptionParams {
  text: string;
  value: string;
}
export interface ISelectorParams {
  name: string;
  options: Record<string, string>[];
  state?: string;
  change?: (e: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  disablet?: boolean;
}
