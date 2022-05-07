import React from 'react';
import styles from './topbar.module.css';

const Topbar = () => {
  return (
    <div className={styles.topbarContainer}>
        <div className={styles.topbarLeft}>
            <i className={`${styles.topbarIcon} fa-brands fa-facebook-square`}></i>
            <i className={`${styles.topbarIcon} fa-brands fa-twitter-square`}></i>
            <i className={`${styles.topbarIcon} fa-brands fa-pinterest-square`}></i>
            <i className={`${styles.topbarIcon} fa-brands fa-instagram-square`}></i>
        </div>
        <div className={styles.topbarCenter}>
            <ul className={styles.topbarList}>
                <li className={styles.topbarListItem}>HOME</li>
                <li className={styles.topbarListItem}>ABOUT</li>
                <li className={styles.topbarListItem}>CONTACT</li>
                <li className={styles.topbarListItem}>WRITE</li>
                <li className={styles.topbarListItem}>LOGOUT</li>
            </ul>
        </div>
        <div className={styles.topbarRight}>
            <img className={styles.topbarImg} src="https://media.istockphoto.com/photos/man-holding-his-diary-picture-id1171698091?s=612x612" alt="" />
            <i className={`${styles.topbarSearchIcon} fa-solid fa-magnifying-glass`}></i>
        </div>
    </div>
  )
}

export default Topbar;