import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FaDribbble, FaInstagram, FaGoogle } from 'react-icons/fa';
import { platformPieData } from '../../data/mockData';
import styles from './Charts.module.css';

const data = [
    { name: 'Dribbble', value: 45.3, color: '#EA4C89' },
    { name: 'Instagram', value: 28.1, color: '#E4405F' },
    { name: 'Google', value: 14, color: '#4285F4' },
    { name: 'Other', value: 12.6, color: '#E5E7EB' },
];

const iconMap: Record<string, React.ReactNode> = {
    Dribbble: <FaDribbble size={12} />,
    Instagram: <FaInstagram size={12} />,
    Google: <FaGoogle size={12} />,
};

export const PlatformPieChart = () => {
    return (
        <div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: '#6B7280', marginBottom: '12px' }}>
                Work with platforms
            </div>

            <div className={styles.pieChartSection}>
                <div className={styles.pieChartWrapper}>
                    <ResponsiveContainer width="100%" height={120}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={35}
                                outerRadius={55}
                                paddingAngle={1}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className={styles.pieCenter}>
                        <div className={styles.piePercentage}>{platformPieData.percentage}%</div>
                        <div className={styles.pieValue}>${(platformPieData.total / 1000).toFixed(0)}k</div>
                    </div>
                </div>

                <div className={styles.pieStats}>
                    {platformPieData.platforms.map(platform => (
                        <div key={platform.name} className={styles.pieStat}>
                            <span
                                className={styles.pieStatDot}
                                style={{ background: platform.color }}
                            />
                            <span style={{ color: platform.color, marginRight: '4px' }}>
                                {iconMap[platform.name]}
                            </span>
                            <span className={styles.pieStatName}>{platform.name}</span>
                            <span className={styles.pieStatValue}>{platform.percentage}%</span>
                            {platform.value > 0 && (
                                <span style={{ fontSize: '11px', color: '#6B7280' }}>
                                    ${(platform.value / 1000).toFixed(0)}k
                                </span>
                            )}
                            {platform.change && (
                                <span className={`${styles.pieStatChange} ${styles.positive}`}>
                                    +{platform.change}%
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlatformPieChart;
