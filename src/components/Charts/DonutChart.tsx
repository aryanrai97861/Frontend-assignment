import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FaDribbble, FaInstagram, FaBehance, FaGoogle } from 'react-icons/fa';
import styles from './Charts.module.css';

const data = [
    { name: 'Dribbble', value: 35, color: '#EA4C89' },
    { name: 'Instagram', value: 25, color: '#E4405F' },
    { name: 'Behance', value: 25, color: '#1769FF' },
    { name: 'Google', value: 15, color: '#4285F4' },
];

export const DonutChart = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A2E' }}>≡</span>
                </div>
                <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', background: '#F5F5F7', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', color: '#6B7280' }}>
                    Filters ▾
                </button>
            </div>

            <div className={styles.donutChartWrapper}>
                <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={75}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className={styles.donutCenter}>
                    <div className={styles.donutIcons}>
                        <div className={styles.donutIcon} style={{ background: '#1769FF' }}>
                            <FaBehance size={12} color="white" />
                        </div>
                        <div className={styles.donutIcon} style={{ background: '#EA4C89' }}>
                            <FaDribbble size={12} color="white" />
                        </div>
                    </div>
                    <div className={styles.donutIcons}>
                        <div className={styles.donutIcon} style={{ background: 'linear-gradient(45deg, #f09433, #dc2743)' }}>
                            <FaInstagram size={12} color="white" />
                        </div>
                        <div className={styles.donutIcon} style={{ background: '#4285F4' }}>
                            <FaGoogle size={12} color="white" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
                <span style={{ fontSize: '12px', color: '#6B7280' }}>Deals amount</span>
                <br />
                <span style={{ fontSize: '11px', color: '#9CA3AF' }}>by referrer category</span>
                <span style={{ fontSize: '11px', marginLeft: '4px' }}>▾</span>
            </div>
        </div>
    );
};

export default DonutChart;
