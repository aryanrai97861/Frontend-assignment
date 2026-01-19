import type { 
  User, 
  MetricCard, 
  UserStat, 
  PlatformData, 
  RevenueData,
  PlatformValueData,
  PlatformPieData,
  ChartDataPoint,
  NavItem,
  ProjectItem
} from '../types';

// Users
export const users: User[] = [
  { id: '1', name: 'Armin A.', initials: 'AA', avatar: '', color: '#FFE4E1' },
  { id: '2', name: 'Eren Y.', initials: 'EY', avatar: '', color: '#E94560' },
  { id: '3', name: 'Mikasa A.', initials: 'MA', avatar: '', color: '#FFE4E1' },
];

// Revenue data
export const revenueData: RevenueData = {
  current: 528976.82,
  previous: 801641.73,
  percentageChange: 7.9,
  isPositive: true,
  period: 'Jun 1 - Aug 31, 2023',
  previousPeriod: 'vs prev. $801,641.73',
};

// Top metric cards
export const metricCards: MetricCard[] = [
  {
    id: 'top-sales',
    title: 'Top sales',
    value: '72',
    subtitle: 'Mikasa',
    icon: 'user',
    color: '#FFE4E1',
  },
  {
    id: 'best-deal',
    title: 'Best deal',
    value: '$42,300',
    subtitle: 'Roll Inc.',
    icon: 'trending-up',
    color: '#E94560',
  },
  {
    id: 'deals',
    title: 'Deals',
    value: '',
    trend: { value: 5, direction: 'down' },
  },
  {
    id: 'value',
    title: 'Value',
    value: '$28k',
    trend: { value: 7.9, direction: 'up' },
    color: '#E94560',
  },
  {
    id: 'win-rate',
    title: 'Win rate',
    value: '',
    trend: { value: 1.2, direction: 'up' },
  },
];

// User statistics row
export const topUserStats: UserStat[] = [
  {
    id: '1',
    user: { id: '1', name: 'Armin A.', initials: 'AA', avatar: '', color: '#FFE4E1' },
    revenue: 208633,
    leads: 118,
    kpi: 0.84,
    winLoss: '31% 12 29',
  },
  {
    id: '2',
    user: { id: '2', name: 'Mikasa A.', initials: 'MA', avatar: '', color: '#FFE4E1' },
    revenue: 155841,
    leads: 103,
    kpi: 0.88,
    winLoss: '39% 21 33',
    badges: [
      { type: 'top-sales', label: 'Top sales' },
      { type: 'sales-streak', label: 'Sales streak' },
      { type: 'top-review', label: 'Top review' },
    ],
  },
];

// Revenue row stats
export const revenueRowStats = [
  { icon: 'dollar', value: '$200,833', percentage: '39.63%', color: '#1A1A2E' },
  { icon: 'dollar', value: '$156,841', percentage: '29.95%', color: '#1A1A2E' },
  { icon: 'dollar', value: '$117,115', percentage: '22.14%', color: '#1A1A2E' },
  { icon: 'clock', value: '$45,386', percentage: '8.58%', color: '#6B7280' },
];

// Platform bar chart data
export const platformBarData: PlatformData[] = [
  { id: 'dribbble', name: 'Dribbble', value: 227459, percentage: 43, color: '#EA4C89', icon: 'dribbble' },
  { id: 'instagram', name: 'Instagram', value: 142823, percentage: 27, color: '#E4405F', icon: 'instagram' },
  { id: 'behance', name: 'Behance', value: 59535, percentage: 11, color: '#1769FF', icon: 'behance' },
  { id: 'google', name: 'Google', value: 37028, percentage: 7, color: '#4285F4', icon: 'google' },
];

// Platform value data (mini bar charts)
export const platformValueData: PlatformValueData = {
  platform: 'Dribbble',
  revenue: 18552,
  allUsers: '275 177,276',
  myUsers: '16% 51,318',
  percentage: '16%',
  color: '#EA4C89',
  bars: [
    { month: 'Jun', value: 11239 },
    { month: 'Jul', value: 8961 },
    { month: 'Aug', value: 6301 },
  ],
};

// Sales dynamic line chart data
export const salesDynamicData: ChartDataPoint[] = [
  { name: '1', value: 20, secondaryValue: 25 },
  { name: '5', value: 35, secondaryValue: 30 },
  { name: '10', value: 25, secondaryValue: 45 },
  { name: '15', value: 50, secondaryValue: 35 },
  { name: '20', value: 40, secondaryValue: 55 },
  { name: '25', value: 60, secondaryValue: 45 },
  { name: '30', value: 45, secondaryValue: 50 },
];

// Work with platforms pie data
export const platformPieData: PlatformPieData = {
  total: 71048,
  percentage: 45.3,
  platforms: [
    { name: 'Dribbble', percentage: 28.1, value: 64072, color: '#EA4C89', change: 8.4 },
    { name: 'Instagram', percentage: 14, value: 0, color: '#E4405F' },
    { name: 'Google', percentage: 9, value: 0, color: '#4285F4' },
    { name: 'Other', percentage: 3, value: 0, color: '#9CA3AF' },
  ],
};

// Sidebar navigation
export const navItems: NavItem[] = [
  { id: 'starred', label: 'Starred', icon: 'star', path: '/starred' },
  { id: 'recent', label: 'Recent', icon: 'clock', path: '/recent' },
  { id: 'sales-list', label: 'Sales list', icon: 'list', path: '/sales-list' },
  { id: 'goals', label: 'Goals', icon: 'target', path: '/goals', isActive: false },
  { id: 'dashboard', label: 'Dashboard', icon: 'grid', path: '/dashboard', isActive: true },
];

// Codename projects
export const projects: ProjectItem[] = [
  { id: 'cargo2go', name: 'Cargo2go', color: '#10B981' },
  { id: 'cloud3r', name: 'Cloud3r', color: '#3B82F6' },
  { id: 'idlome', name: 'Idlome', color: '#F59E0B' },
  { id: 'syllables', name: 'Syllables', color: '#8B5CF6' },
  { id: 'x-gb', name: 'x-Gb', color: '#EC4899' },
];

// Reports
export const reportItems: NavItem[] = [
  { 
    id: 'share-with-me', 
    label: 'Share with me', 
    icon: 'share',
    children: [
      { id: 'deals-by-user', label: 'Deals by user', icon: 'file' },
      { id: 'deal-duration', label: 'Deal duration', icon: 'file' },
    ]
  },
  { 
    id: 'my-reports', 
    label: 'My reports', 
    icon: 'folder',
    children: [
      { id: 'emails-received', label: 'Emails received', icon: 'file' },
      { id: 'deal-duration-2', label: 'Deal duration', icon: 'file' },
      { id: 'new-report', label: 'New report', icon: 'file', isActive: true },
      { id: 'analytics', label: 'Analytics', icon: 'file' },
    ]
  },
];

// Chart months for bar charts  
export const barChartData = [
  { month: 'Jun', value1: 11239, value2: 8961, value3: 6301 },
  { month: 'Jul', value1: 8961, value2: 11239, value3: 7500 },
  { month: 'Aug', value1: 6301, value2: 9500, value3: 8200 },
];

// User stats for bottom section
export const bottomUserStat = {
  user: { id: '2', name: 'Eren Y.', initials: 'EY', avatar: '', color: '#E94560' },
  revenue: 117115,
  stats: [
    { value: 23, label: '' },
    { value: 84, label: '' },
    { value: 0.78, label: '' },
    { value: 32, label: '%' },
    { value: 7, label: '' },
    { value: 15, label: '' },
  ],
};
