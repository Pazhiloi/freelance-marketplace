import React, { FC } from 'react';
import s from "./Stages.module.scss";
import f from "../../shared/Form.module.scss";
const First: FC = () => {
  return (
    <>
    <div className={f.item}>
          <label className={f.label}>Назва</label>
          <input placeholder="placeholder" type="text" className={f.input} />
        </div>
        <div className={f.selects}>
          <div className={f.select}>
            <div className={f.label}>Категорія</div>
            <select>
              <option className={f.option} value="aboba">
                aboba
              </option>
              <option value="bob">bob</option>
            </select>
          </div>
          <div className={f.select}>
            <div className={f.label}>Підкатегорія</div>
            <select>
              <option className={f.option} value="aboba">
                aboba
              </option>
              <option value="bob">bob</option>
            </select>
          </div>
        </div>
    </>
  );
};

export default First;