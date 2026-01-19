import { FiFilter } from 'react-icons/fi';
import {
    FaDribbble,
    FaInstagram,
    FaBehance,
    FaGoogle
} from 'react-icons/fa';
import { platformBarData } from '../../data/mockData';
import styles from './Charts.module.css';

const platformIcons: Record<string, React.ReactNode> = {
    dribbble: <FaDribbble size={14} color="white" />,
    instagram: <FaInstagram size={14} color="white" />,
    behance: <FaBehance size={14} color="white" />,
    google: <FaGoogle size={14} color="white" />,
};

const platformColors: Record<string, string> = {
    dribbble: '#EA4C89',
    instagram: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    behance: '#1769FF',
    google: '#4285F4',
};

export const PlatformBarChart = () => {
    const maxValue = Math.max(...platformBarData.map(d => d.value));

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E' }}>≡</span>
                </div>
                <button className={styles.tabsContainer} style={{ padding: '4px 12px', background: '#F5F5F7', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                    <span style={{ fontSize: '12px', color: '#6B7280' }}>Filters</span>
                    <FiFilter size={12} style={{ marginLeft: '4px' }} />
                </button>
            </div>

            <div className={styles.barChartContainer}>
                {platformBarData.map(platform => (
                    <div key={platform.id} className={styles.horizontalBarItem}>
                        <div className={styles.barLabel}>
                            <div
                                className={styles.barIcon}
                                style={{ background: platformColors[platform.id] }}
                            >
                                {platformIcons[platform.id]}
                            </div>
                            <span className={styles.barName}>{platform.name}</span>
                        </div>
                        <div className={styles.barTrack}>
                            <div
                                className={styles.barFill}
                                style={{
                                    width: `${(platform.value / maxValue) * 100}%`,
                                    background: platform.color
                                }}
                            />
                        </div>
                        <span className={styles.barValue}>${(platform.value / 1000).toFixed(0)}k</span>
                        <span className={styles.barPercent}>{platform.percentage}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlatformBarChart;
