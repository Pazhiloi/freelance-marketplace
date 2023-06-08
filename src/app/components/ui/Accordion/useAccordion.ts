import { useState } from "react";

export const useAccordion = (s: any) => {
const [isOpen, setIsOpen] = useState(false);
const toggleAccordion = () => {
  setIsOpen(!isOpen);
};
const chevronClassName = !isOpen ? `${s.chevron}` : `${s.chevron} ${s.open}`;
const contentClassName = isOpen ? `${s.content} ${s.open}` : `${s.content}`;

return {
  chevronClassName,
  contentClassName,
  toggleAccordion,
};

};
