import { useState } from 'react';
import {
    FiStar,
    FiClock,
    FiList,
    FiTarget,
    FiGrid,
    FiChevronDown,
    FiChevronRight,
    FiFolder,
    FiShare2,
    FiSettings,
    FiHelpCircle,
    FiHome,
    FiBarChart2,
    FiUsers,
    FiEdit
} from 'react-icons/fi';
import styles from './Sidebar.module.css';
import { navItems, projects, reportItems } from '../../data/mockData';

const iconMap: Record<string, React.ReactNode> = {
    star: <FiStar size={16} />,
    clock: <FiClock size={16} />,
    list: <FiList size={16} />,
    target: <FiTarget size={16} />,
    grid: <FiGrid size={16} />,
    folder: <FiFolder size={16} />,
    share: <FiShare2 size={16} />,
};

// Left icon strip items
const iconStripItems = [
    { id: 'home', icon: <FiHome size={18} />, isActive: true },
    { id: 'charts', icon: <FiBarChart2 size={18} /> },
    { id: 'users', icon: <FiUsers size={18} /> },
    { id: 'edit', icon: <FiEdit size={18} /> },
    { id: 'grid', icon: <FiGrid size={18} /> },
];

export const Sidebar = () => {
    const [expandedSections, setExpandedSections] = useState<string[]>(['codename', 'reports', 'share-with-me', 'my-reports']);
    const [activeNav, setActiveNav] = useState('dashboard');
    const [activeReport, setActiveReport] = useState('new-report');
    const [activeIconStrip, setActiveIconStrip] = useState('home');

    const toggleSection = (section: string) => {
        setExpandedSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const isExpanded = (section: string) => expandedSections.includes(section);

    return (
        <div className={styles.sidebarWrapper}>
            {/* Left Icon Strip */}
            <div className={styles.iconStrip}>
                {iconStripItems.map(item => (
                    <button
                        key={item.id}
                        className={`${styles.iconStripItem} ${activeIconStrip === item.id ? styles.active : ''}`}
                        onClick={() => setActiveIconStrip(item.id)}
                    >
                        {item.icon}
                    </button>
                ))}

                {/* Spacer */}
                <div className={styles.iconStripSpacer} />

                {/* Bottom icons in strip */}
                <button className={styles.iconStripItem}>
                    <FiHelpCircle size={18} />
                </button>
                <button className={styles.iconStripItem}>
                    <FiSettings size={18} />
                </button>
            </div>

            {/* Main Sidebar Content */}
            <aside className={styles.sidebar}>
                {/* Logo */}
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>C</div>
                    <span className={styles.logoText}>Codename.com</span>
                    <FiChevronDown className={styles.logoDropdown} size={14} />
                </div>

                {/* Main Navigation */}
                <nav className={styles.navSection}>
                    {navItems.map(item => (
                        <div
                            key={item.id}
                            className={`${styles.navItem} ${activeNav === item.id ? styles.active : ''}`}
                            onClick={() => setActiveNav(item.id)}
                        >
                            <span className={styles.navIcon}>
                                {iconMap[item.icon] || <FiGrid size={16} />}
                            </span>
                            <span className={styles.navLabel}>{item.label}</span>
                        </div>
                    ))}
                </nav>

                {/* Codename Section */}
                <div className={styles.navSection}>
                    <div
                        className={styles.sectionTitle}
                        onClick={() => toggleSection('codename')}
                    >
                        <span className={styles.sectionTitleText}>Codename</span>
                        <FiChevronDown
                            className={`${styles.sectionToggle} ${isExpanded('codename') ? styles.expanded : ''}`}
                            size={14}
                        />
                    </div>

                    {isExpanded('codename') && (
                        <>
                            <div className={styles.navItem}>
                                <span className={styles.navIcon}><FiShare2 size={16} /></span>
                                <span className={styles.navLabel}>Shared with me</span>
                            </div>

                            {projects.map(project => (
                                <div key={project.id} className={styles.projectItem}>
                                    <span
                                        className={styles.projectDot}
                                        style={{ backgroundColor: project.color }}
                                    />
                                    <span>{project.name}</span>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                {/* Reports Section */}
                <div className={styles.navSection}>
                    <div
                        className={styles.sectionTitle}
                        onClick={() => toggleSection('reports')}
                    >
                        <span className={styles.sectionTitleText}>Reports</span>
                        <FiChevronRight
                            className={`${styles.sectionToggle} ${isExpanded('reports') ? styles.expanded : ''}`}
                            size={14}
                            style={{ transform: isExpanded('reports') ? 'rotate(90deg)' : 'none' }}
                        />
                    </div>

                    {isExpanded('reports') && (
                        <>
                            {reportItems.map(section => (
                                <div key={section.id}>
                                    <div
                                        className={styles.navItem}
                                        onClick={() => toggleSection(section.id)}
                                    >
                                        <span className={styles.navIcon}>{iconMap[section.icon]}</span>
                                        <span className={styles.navLabel}>{section.label}</span>
                                        <FiChevronRight
                                            size={12}
                                            style={{
                                                transform: isExpanded(section.id) ? 'rotate(90deg)' : 'none',
                                                transition: 'transform 0.2s ease'
                                            }}
                                        />
                                    </div>

                                    {isExpanded(section.id) && section.children?.map(item => (
                                        <div
                                            key={item.id}
                                            className={`${styles.reportItem} ${activeReport === item.id ? styles.active : ''} ${item.id === 'new-report' ? styles.highlight : ''}`}
                                            onClick={() => setActiveReport(item.id)}
                                        >
                                            <span>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </>
                    )}
                </div>

                {/* Manage Folders */}
                <div className={styles.manageButton}>
                    <FiFolder size={14} />
                    <span>Manage folders</span>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;

