import React, { ChangeEvent, FC } from 'react';
import s from "./SearchField.module.scss";
import Button from '../Button/Button';
interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
const SearchField: FC = () => {
  return (
    <div className={s.search}>
      <input placeholder="Що потрібно зробити?" type="text" className={s.input} />
      <Button className={`color-white fw-700 bg-orange ${s.button}`}>
        Знайти
      </Button>
    </div>
  );
};

export default SearchField;