import { useState } from "react";

export const useHistoryCheckboxes = () => {
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      title: "Виконується",
      checked: false,
    },
    {
      id: 2,
      title: "Завершено",
      checked: false,
    },
  ]);

  const handleClick = (id: number) => {
    setCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      );
      const allChecked = updatedCheckboxes.every(
        (checkbox) => checkbox.checked
      );
      return allChecked
        ? updatedCheckboxes.map((checkbox) => ({ ...checkbox, checked: false }))
        : updatedCheckboxes;
    });
  };

  return { handleClick, checkboxes };
}