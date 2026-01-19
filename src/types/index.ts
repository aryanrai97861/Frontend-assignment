// User data types
export interface User {
  id: string;
  name: string;
  avatar: string;
  initials: string;
  color: string;
}

// Metric card types
export interface MetricCard {
  id: string;
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  color?: string;
}

// User statistics for the performance table
export interface UserStat {
  id: string;
  user: User;
  revenue: number;
  leads: number;
  kpi: number;
  winLoss: string;
  rank?: number;
  badges?: Badge[];
}

export interface Badge {
  type: 'top-sales' | 'sales-streak' | 'top-review';
  label: string;
}

// Platform data for charts
export interface PlatformData {
  id: string;
  name: string;
  value: number;
  percentage: number;
  color: string;
  icon: string;
}

// Revenue data
export interface RevenueData {
  current: number;
  previous: number;
  percentageChange: number;
  isPositive: boolean;
  period: string;
  previousPeriod: string;
}

// Chart data point
export interface ChartDataPoint {
  name: string;
  value: number;
  secondaryValue?: number;
}

// Sales dynamic data
export interface SalesDynamicData {
  points: ChartDataPoint[];
  currentUser?: User;
  userRevenue?: number;
  userStats?: {
    value: number;
    percentage: number;
    change: number;
  }[];
}

// Deals by category
export interface DealsByCategory {
  categories: {
    name: string;
    icon: string;
    color: string;
  }[];
}

// Platform value breakdown
export interface PlatformValueData {
  platform: string;
  revenue: number;
  allUsers: string;
  myUsers: string;
  percentage: string;
  color: string;
  bars: {
    month: string;
    value: number;
  }[];
}

// Work with platforms pie data
export interface PlatformPieData {
  total: number;
  percentage: number;
  platforms: {
    name: string;
    percentage: number;
    value: number;
    color: string;
    change?: number;
  }[];
}

// Navigation item
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path?: string;
  isActive?: boolean;
  badge?: number;
  children?: NavItem[];
}

// Project/Codename item
export interface ProjectItem {
  id: string;
  name: string;
  color: string;
  isActive?: boolean;
}

// Filter option
export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

// Timeframe option
export interface TimeframeOption {
  id: string;
  label: string;
  startDate: string;
  endDate: string;
}
