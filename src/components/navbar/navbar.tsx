import React from 'react';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_upper_section}></div>
      <div className={styles.navbar_main_section}></div>
    </div>
  );
};

export default Navbar;
