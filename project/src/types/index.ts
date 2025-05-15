export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'agent' | 'client';
  avatar: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in_progress' | 'completed' | 'on_hold';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    coordinates: [number, number]; // [latitude, longitude]
  };
  thumbnail: string;
  units: number;
  availableUnits: number;
  manager: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'active' | 'inactive' | 'lead';
  createdAt: string;
  avatar: string;
  interests: string[];
  totalSpent: number;
  lastContact: string;
}

export interface Contract {
  id: string;
  title: string;
  clientId: string;
  clientName: string;
  projectId: string;
  projectName: string;
  status: 'draft' | 'pending' | 'signed' | 'active' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  signedAt?: string;
  value: number;
  documentUrl: string;
  expiresAt?: string;
}

export interface FinancialTransaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
  projectId?: string;
  projectName?: string;
  clientId?: string;
  clientName?: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: number | string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

export interface RecentActivity {
  id: string;
  description: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  timestamp: string;
  type: 'project' | 'client' | 'contract' | 'financial';
  entityId: string;
}