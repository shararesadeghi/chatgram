import React from 'react';
//CSS
import styles from './Navbar.module.css';

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>Chatgram</div>
            <div className={styles.logout} onClick={logoutHandler}>Logout</div>
        </div>
    );
};

export default Navbar;