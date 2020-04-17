import React from 'react';
import Styles from './mainstyle.module.scss'

const Toggle = ({ checked, onChange }) => (
  <span className={Styles.toggle}>
    <input
      className={Styles.dmcheck}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;