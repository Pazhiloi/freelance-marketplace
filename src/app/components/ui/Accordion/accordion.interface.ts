import { ReactNode } from "react";

export interface IAccordion {
  title: string;
  content: ReactNode;
  className?: string;
}
