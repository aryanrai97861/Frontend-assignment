import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import { salesDynamicData, bottomUserStat } from '../../data/mockData';
import styles from './Charts.module.css';

export const SalesDynamicChart = () => {
    return (
        <div>
            <div className={styles.salesDynamicTitle}>Sales dynamic</div>

            <div className={styles.lineChartContainer}>
                <ResponsiveContainer width="100%" height={100}>
                    <LineChart data={salesDynamicData}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#9CA3AF' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#E94560"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="secondaryValue"
                            stroke="#D1D5DB"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* User stat mini */}
            <div className={styles.userStatMini}>
                <div
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: bottomUserStat.user.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: 'white'
                    }}
                >
                    {bottomUserStat.user.initials}
                </div>
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#1A1A2E' }}>
                    {bottomUserStat.user.name}
                </span>
                <span style={{ fontSize: '13px', color: '#6B7280', marginLeft: '4px' }}>
                    ${(bottomUserStat.revenue / 1000).toFixed(0)}k
                </span>

                <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto' }}>
                    {bottomUserStat.stats.map((stat, idx) => (
                        <div key={idx} className={styles.miniStatValue}>
                            <span className={styles.miniStatNumber}>
                                {stat.value}{stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesDynamicChart;
