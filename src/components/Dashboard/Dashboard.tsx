import { useState } from 'react';
import { FiChevronDown, FiTrendingUp, FiCalendar, FiFilter } from 'react-icons/fi';
import { FaDribbble, FaInstagram, FaBehance, FaGoogle } from 'react-icons/fa';
import {
    ResponsiveContainer,
    XAxis,
    LineChart, Line
} from 'recharts';
import {
    revenueData,
    metricCards,
    topUserStats,
    revenueRowStats,
    platformBarData,
    platformPieData,
    salesDynamicData,
    platformValueData,
    bottomUserStat
} from '../../data/mockData';
import styles from './Dashboard.module.css';

// Platform icons mapping
const platformIcons: Record<string, React.ReactNode> = {
    dribbble: <FaDribbble size={12} color="white" />,
    instagram: <FaInstagram size={12} color="white" />,
    behance: <FaBehance size={12} color="white" />,
    google: <FaGoogle size={12} color="white" />,
};

type TabType = 'Revenue' | 'Leads' | 'W/L';

export const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<TabType>('Revenue');

    return (
        <main className={styles.dashboard}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>New report</h1>
                <div className={styles.timeframeSelector}>
                    <FiCalendar size={14} style={{ color: '#6B7280' }} />
                    <span style={{ fontSize: '12px', color: '#6B7280' }}>Timeframe</span>
                    <button className={styles.timeframeButton}>
                        Sep 1 - Nov 30, 2023
                        <FiChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div className={styles.mainGrid}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                    {/* Revenue Card */}
                    <div className={styles.revenueCard}>
                        <div className={styles.revenueHeader}>
                            <div className={styles.revenueMain}>
                                <div className={styles.revenueLabel}>Revenue</div>
                                <div className={styles.revenueValue}>
                                    <span className={styles.revenueAmount}>
                                        ${Math.floor(revenueData.current).toLocaleString()}
                                    </span>
                                    <span className={styles.revenueCents}>
                                        .{(revenueData.current % 1).toFixed(2).slice(2)}
                                    </span>
                                    <span className={`${styles.trendBadge} ${styles.positive}`}>
                                        <FiTrendingUp size={12} />
                                        {revenueData.percentageChange}%
                                    </span>
                                    <span className={styles.diffBadge}>
                                        ${Math.abs((revenueData.current - revenueData.previous) / 1000).toFixed(0)}k
                                    </span>
                                </div>
                                <div className={styles.revenuePeriod}>
                                    {revenueData.previousPeriod} {revenueData.period}
                                    <FiChevronDown size={12} />
                                </div>
                            </div>

                            {/* Metric Cards */}
                            <div className={styles.metricsRow}>
                                {metricCards.slice(0, 2).map(card => (
                                    <div key={card.id} className={styles.metricCard}>
                                        <div className={styles.metricLabel}>{card.title}</div>
                                        <div className={styles.metricValue}>{card.value}</div>
                                        {card.subtitle && (
                                            <div className={styles.metricSubRow}>
                                                {card.id === 'top-sales' && (
                                                    <div className={styles.metricAvatar} style={{ background: '#FFE4E1' }}>M</div>
                                                )}
                                                <span className={styles.metricSubtitle}>{card.subtitle}</span>
                                                {card.id === 'best-deal' && <span style={{ color: '#E94560' }}>✓</span>}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {metricCards.slice(2).map(card => (
                                    <div
                                        key={card.id}
                                        className={`${styles.metricCard} ${card.id === 'value' ? styles.highlight : ''}`}
                                    >
                                        <div className={styles.metricLabel}>{card.title}</div>
                                        {card.value && <div className={styles.metricValue}>{card.value}</div>}
                                        {card.trend && (
                                            <div className={`${styles.metricTrend} ${card.trend.direction === 'up' ? styles.up : styles.down}`}>
                                                {card.trend.direction === 'up' ? '↑' : '↓'} {card.trend.value}%
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Row - Progress Bar Style */}
                    <div className={styles.statsRow}>
                        <div className={styles.progressBarContainer}>
                            {revenueRowStats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className={styles.progressSegment}
                                    style={{
                                        width: stat.percentage,
                                        background: idx === 0 ? '#E94560' :
                                            idx === 1 ? '#FFB7C5' :
                                                idx === 2 ? '#FFD9E0' : '#F5F5F7'
                                    }}
                                >
                                    <span className={styles.progressIcon}>$</span>
                                    <span className={styles.progressValue}>{stat.value}</span>
                                    <span className={styles.progressPercent}>{stat.percentage}</span>
                                </div>
                            ))}
                        </div>
                        <button className={styles.detailsBtn}>Details</button>
                    </div>

                    {/* Charts Row */}
                    <div className={styles.chartsRow}>
                        {/* Platform Bar Chart */}
                        <div className={styles.chartCard}>
                            <div className={styles.chartHeader}>
                                <span style={{ fontSize: '14px', fontWeight: 600 }}>≡</span>
                                <button className={styles.filterBtn}>
                                    Filters <FiFilter size={10} />
                                </button>
                            </div>
                            {platformBarData.map(platform => (
                                <div key={platform.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                    <div style={{
                                        width: '24px', height: '24px', borderRadius: '6px',
                                        background: platform.color, display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {platformIcons[platform.id]}
                                    </div>
                                    <span style={{ fontSize: '12px', color: '#1A1A2E', width: '70px' }}>{platform.name}</span>
                                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A2E' }}>${(platform.value / 1000).toFixed(0)}k</span>
                                    <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{platform.percentage}%</span>
                                </div>
                            ))}
                        </div>

                        {/* Donut Chart (Deals amount) */}
                        <div className={styles.chartCard}>
                            <div className={styles.chartHeader}>
                                <span style={{ fontSize: '14px', fontWeight: 600 }}>⊞</span>
                                <button className={styles.filterBtn}>
                                    Filters <FiFilter size={10} />
                                </button>
                            </div>

                            {/* Donut Chart with Platform Icons in Center */}
                            <div className={styles.donutChartContainer}>
                                <div className={styles.donutChart}>
                                    <svg viewBox="0 0 100 100" className={styles.donutSvg}>
                                        {/* Dribbble segment - 43% */}
                                        <circle cx="50" cy="50" r="35" fill="none" stroke="#EA4C89" strokeWidth="12"
                                            strokeDasharray="94.25 220" strokeDashoffset="0" transform="rotate(-90 50 50)" />
                                        {/* Instagram segment - 27% */}
                                        <circle cx="50" cy="50" r="35" fill="none" stroke="#E4405F" strokeWidth="12"
                                            strokeDasharray="59.38 220" strokeDashoffset="-94.25" transform="rotate(-90 50 50)" />
                                        {/* Behance segment - 11% */}
                                        <circle cx="50" cy="50" r="35" fill="none" stroke="#1769FF" strokeWidth="12"
                                            strokeDasharray="24.19 220" strokeDashoffset="-153.63" transform="rotate(-90 50 50)" />
                                        {/* Google segment - 7% */}
                                        <circle cx="50" cy="50" r="35" fill="none" stroke="#4285F4" strokeWidth="12"
                                            strokeDasharray="15.39 220" strokeDashoffset="-177.82" transform="rotate(-90 50 50)" />
                                    </svg>
                                    <div className={styles.donutCenter}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#1769FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FaBehance size={12} color="white" />
                                        </div>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#4285F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FaGoogle size={12} color="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', fontSize: '11px', color: '#6B7280', marginTop: '12px' }}>
                                Deals amount<br />
                                <span style={{ color: '#9CA3AF' }}>by referrer category</span> ▾
                            </div>
                        </div>
                    </div>

                    {/* Platform Value Section */}
                    <div className={styles.platformValueCard}>
                        <div className={styles.tabsRow}>
                            {(['Revenue', 'Leads', 'W/L'] as TabType[]).map(tab => (
                                <button
                                    key={tab}
                                    className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className={styles.platformValueLayout}>
                            {/* Left side - Dark coral sidebar with stats */}
                            <div className={styles.platformValueSidebar}>
                                <div className={styles.sidebarHeader}>
                                    <div className={styles.platformIconSm}>
                                        <FaDribbble size={12} color="white" />
                                    </div>
                                    <div>
                                        <div className={styles.sidebarLabel}>Platform value</div>
                                        <div className={styles.sidebarName}>Dribbble</div>
                                    </div>
                                </div>

                                <div className={styles.sidebarStats}>
                                    <div className={styles.sidebarStatItem}>
                                        <span className={styles.sidebarStatLabel}>Revenue</span>
                                        <span className={styles.sidebarStatValue}>${platformValueData.revenue.toLocaleString()}</span>
                                    </div>
                                    <div className={styles.sidebarStatItem}>
                                        <span className={styles.sidebarStatLabel}>Leads</span>
                                        <span className={styles.sidebarStatValue}>373</span>
                                        <span className={styles.sidebarStatSub}>97/276</span>
                                    </div>
                                    <div className={styles.sidebarStatItem}>
                                        <span className={styles.sidebarStatLabel}>Win Rate</span>
                                        <span className={styles.sidebarStatValue}>16%</span>
                                        <span className={styles.sidebarStatSub}>51/318</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Gray bar charts */}
                            <div className={styles.platformValueBars}>
                                <div className={styles.grayBarChart}>
                                    <div className={styles.grayBarItem}>
                                        <div className={styles.grayBarValue}>$11,035</div>
                                        <div className={styles.grayBarFill} style={{ height: '100px' }}></div>
                                    </div>
                                    <div className={styles.grayBarItem}>
                                        <div className={styles.grayBarValue}>$8,901</div>
                                        <div className={styles.grayBarFill} style={{ height: '80px' }}></div>
                                    </div>
                                    <div className={styles.grayBarItem}>
                                        <div className={styles.grayBarValue}>$9,288</div>
                                        <div className={styles.grayBarFill} style={{ height: '85px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                    {/* User Stats Table */}
                    <div className={styles.userStatsCard}>
                        <div className={styles.tableHeader}>
                            <span className={styles.tableHeaderCell}></span>
                            <span className={styles.tableHeaderCell}>Revenue</span>
                            <span className={styles.tableHeaderCell}>Leads</span>
                            <span className={styles.tableHeaderCell}>KPI</span>
                            <span className={styles.tableHeaderCell}>W/L</span>
                            <span className={styles.tableHeaderCell}></span>
                        </div>

                        {topUserStats.map((stat, idx) => (
                            <div key={stat.id}>
                                <div className={styles.userRow}>
                                    <div className={styles.userInfo}>
                                        <div
                                            className={styles.numCircle}
                                            style={{ background: idx === 0 ? '#E94560' : '#FFE4E1', color: idx === 0 ? 'white' : '#1A1A2E' }}
                                        >
                                            {idx === 0 ? 'A' : 'M'}
                                        </div>
                                        <div className={styles.userAvatar} style={{ background: stat.user.color }}>
                                            {stat.user.initials}
                                        </div>
                                        <span className={styles.userName}>{stat.user.name}</span>
                                    </div>
                                    <span className={`${styles.userStatCell} ${idx === 0 ? styles.highlight : ''}`}>
                                        ${(stat.revenue / 1000).toFixed(0)}k
                                    </span>
                                    <span className={styles.userStatCell}>{stat.leads}</span>
                                    <span className={styles.userStatCell}>{stat.kpi}</span>
                                    <span className={styles.userStatCell}>{stat.winLoss.split(' ')[0]}</span>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <span className={styles.numCircle} style={{ background: '#FFE4E1', color: '#1A1A2E' }}>
                                            {stat.winLoss.split(' ')[1]}
                                        </span>
                                        <span className={styles.numCircle} style={{ background: '#E94560', color: 'white' }}>
                                            {stat.winLoss.split(' ')[2]}
                                        </span>
                                    </div>
                                </div>
                                {stat.badges && (
                                    <div className={styles.badgesContainer}>
                                        {stat.badges.map((badge, bidx) => (
                                            <span key={bidx} className={`${styles.badge} ${bidx < 2 ? styles.gold : styles.coral}`}>
                                                ⚡ {badge.label}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Work with Platforms */}
                    <div className={styles.platformsCard}>
                        <div className={styles.platformsHeader}>
                            <div className={styles.platformsTitle}>Work with platforms</div>
                            <div className={styles.platformBadges}>
                                <span className={styles.platformBadge} style={{ background: '#9.3', color: '#E94560' }}>9.3</span>
                                <span className={styles.platformBadgeAmount}>$156,841</span>
                            </div>
                        </div>

                        <div className={styles.platformsGrid}>
                            <div className={`${styles.platformChip} ${styles.active}`}>
                                <FaDribbble size={14} color="#EA4C89" />
                                <span>Dribbble</span>
                            </div>
                            <div className={styles.platformChip}>
                                <FaInstagram size={14} color="#E4405F" />
                                <span>Instagram</span>
                            </div>
                            <div className={styles.platformChip}>
                                <FaGoogle size={14} color="#4285F4" />
                                <span>Google</span>
                            </div>
                            <div className={styles.platformChip}>
                                <span style={{ width: 14, height: 14, background: '#9CA3AF', borderRadius: '50%', display: 'inline-block' }}></span>
                                <span>Other</span>
                            </div>
                        </div>

                        <div className={styles.platformStatsRow}>
                            {platformPieData.platforms.map((p, idx) => (
                                <div key={idx} className={styles.platformStat}>
                                    <span className={styles.platformStatPercent}>{p.percentage}%</span>
                                    {p.value > 0 && <span className={styles.platformStatValue}>${(p.value / 1000).toFixed(0)}k</span>}
                                    {p.change && <span className={styles.platformStatChange}>+{p.change}%</span>}
                                </div>
                            ))}
                        </div>

                        {/* Large Stats Display */}
                        <div className={styles.largeStatsDisplay}>
                            <span className={styles.largePercent}>{platformPieData.percentage}%</span>
                            <span className={styles.largeValue}>${platformPieData.total.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Sales Dynamic */}
                    <div className={styles.salesDynamicCard}>
                        <div className={styles.salesDynamicTitle}>Sales dynamic</div>
                        <div style={{ height: '80px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={salesDynamicData}>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                                    <Line type="monotone" dataKey="value" stroke="#E94560" strokeWidth={2} dot={false} />
                                    <Line type="monotone" dataKey="secondaryValue" stroke="#D1D5DB" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className={styles.userStatMini}>
                            <div className={styles.miniUserInfo}>
                                <div className={styles.miniUserAvatar} style={{ background: bottomUserStat.user.color }}>
                                    {bottomUserStat.user.initials}
                                </div>
                                <span className={styles.miniUserName}>{bottomUserStat.user.name}</span>
                                <span className={styles.miniUserRevenue}>${(bottomUserStat.revenue / 1000).toFixed(0)}k</span>
                            </div>
                            <div className={styles.miniStats}>
                                {bottomUserStat.stats.map((s, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.miniStatNum}
                                        style={{
                                            background: idx === 0 ? '#E94560' : idx === 1 ? '#FFE4E1' : 'transparent',
                                            color: idx === 0 ? 'white' : '#1A1A2E'
                                        }}
                                    >
                                        {s.value}{s.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
