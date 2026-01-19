import { useState } from 'react';
import { FiSearch, FiPlus, FiUpload } from 'react-icons/fi';
import styles from './Header.module.css';
import { users } from '../../data/mockData';

export const Header = () => {
    const [activeUser, setActiveUser] = useState<string | null>('2');
    const [searchValue, setSearchValue] = useState('');

    return (
        <header className={styles.header}>
            {/* Search Bar */}
            <div className={styles.searchContainer}>
                <FiSearch className={styles.searchIcon} size={16} />
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder='Try searching "Insights"'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            {/* User Avatars */}
            <div className={styles.userAvatars}>
                <div className={styles.addUserButton}>
                    <FiPlus size={14} />
                </div>

                {users.map(user => (
                    <div
                        key={user.id}
                        className={`${styles.userPill} ${activeUser === user.id ? styles.active : ''}`}
                        onClick={() => setActiveUser(user.id)}
                    >
                        <div
                            className={styles.userAvatar}
                            style={{ backgroundColor: user.color }}
                        >
                            {user.initials}
                        </div>
                        <span className={styles.userName}>{user.name}</span>
                    </div>
                ))}

                {/* Solo Avatar */}
                <div
                    className={styles.soloAvatar}
                    style={{ backgroundColor: '#1A1A2E', color: 'white' }}
                >
                    C
                </div>
            </div>

            {/* Right Section - Icons matching design */}
            <div className={styles.headerRight}>
                <div className={`${styles.circleIconButton} ${styles.gray}`}>
                    <div className={styles.gridIcon}>
                        <span></span><span></span>
                        <span></span><span></span>
                    </div>
                    <span className={styles.notificationDot}></span>
                </div>
                <div className={`${styles.circleIconButton} ${styles.gray}`}>
                    <FiUpload size={16} />
                </div>
                <div className={styles.addButton}>
                    <FiPlus size={18} />
                </div>
            </div>
        </header>
    );
};

export default Header;
