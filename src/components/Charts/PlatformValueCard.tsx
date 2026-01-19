import { useState } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { FaDribbble } from 'react-icons/fa';
import { platformValueData } from '../../data/mockData';
import styles from './Charts.module.css';

const barData = [
    { month: 'Jun', value: 11239 },
    { month: 'Jul', value: 8961 },
    { month: 'Aug', value: 6301 },
];

type TabType = 'Revenue' | 'Leads' | 'W/L';

export const PlatformValueCard = () => {
    const [activeTab, setActiveTab] = useState<TabType>('Revenue');

    const tabs: TabType[] = ['Revenue', 'Leads', 'W/L'];

    return (
        <div className={styles.platformValueCard}>
            {/* Tabs */}
            <div className={styles.tabsContainer}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Platform header */}
            <div className={styles.platformValueHeader}>
                <div className={styles.platformValueIcon} style={{ background: '#EA4C89' }}>
                    <FaDribbble size={16} color="white" />
                </div>
                <div>
                    <div className={styles.platformValueTitle}>Platform value</div>
                    <div style={{ fontSize: '11px', color: '#EA4C89' }}>{platformValueData.platform}</div>
                </div>
            </div>

            {/* Revenue amount */}
            <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                        background: '#EA4C89',
                        color: 'white',
                        padding: '2px 4px',
                        borderRadius: '4px',
                        fontSize: '10px'
                    }}>
                        Revenue
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E' }}>
                        ${platformValueData.revenue.toLocaleString()}
                    </span>
                </div>
            </div>

            {/* Stats */}
            <div className={styles.platformValueStats}>
                <div className={styles.platformValueStat}>
                    <span className={styles.statLabel}>All Users</span>
                    <span className={styles.statNumber}>{platformValueData.allUsers}</span>
                </div>
                <div className={styles.platformValueStat}>
                    <span className={styles.statLabel}>My/User</span>
                    <span className={styles.statNumber}>{platformValueData.myUsers}</span>
                </div>
            </div>

            {/* Mini bar chart */}
            <div style={{ marginTop: '16px', height: '80px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} barSize={40}>
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#9CA3AF' }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            {barData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={index === 0 ? '#EA4C89' : index === 1 ? '#FFB7C5' : '#FFD9E0'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                {/* Value labels */}
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '-20px' }}>
                    {barData.map((item, idx) => (
                        <span key={idx} style={{ fontSize: '10px', fontWeight: 600, color: '#1A1A2E' }}>
                            ${(item.value / 1000).toFixed(1)}k
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlatformValueCard;
