import { 
  User, 
  Project, 
  Client, 
  Contract, 
  FinancialTransaction, 
  Notification, 
  DashboardMetric,
  ChartData,
  RecentActivity
} from '../types';

export const currentUser: User = {
  id: 'user1',
  name: 'Alex Morgan',
  email: 'alex@constructflow.com',
  role: 'admin',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
};

export const projects: Project[] = [
  {
    id: 'proj1',
    name: 'Seaside Residences',
    description: 'Luxury condominium project with 120 units and ocean views',
    status: 'in_progress',
    progress: 65,
    startDate: '2024-03-15',
    endDate: '2025-12-20',
    budget: 24500000,
    spent: 14285000,
    location: {
      address: '123 Beach Avenue',
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      coordinates: [25.7617, -80.1918]
    },
    thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    units: 120,
    availableUnits: 43,
    manager: 'Emily Rodriguez'
  },
  {
    id: 'proj2',
    name: 'Green Valley Homes',
    description: 'Eco-friendly residential complex with 85 smart homes',
    status: 'planning',
    progress: 25,
    startDate: '2024-06-10',
    endDate: '2026-01-15',
    budget: 18700000,
    spent: 4250000,
    location: {
      address: '456 Valley Road',
      city: 'Portland',
      state: 'OR',
      country: 'USA',
      coordinates: [45.5152, -122.6784]
    },
    thumbnail: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600',
    units: 85,
    availableUnits: 85,
    manager: 'David Chen'
  },
  {
    id: 'proj3',
    name: 'Metropolitan Tower',
    description: 'Mixed-use skyscraper with residential and commercial spaces',
    status: 'in_progress',
    progress: 40,
    startDate: '2023-11-05',
    endDate: '2026-04-30',
    budget: 78500000,
    spent: 31400000,
    location: {
      address: '789 Downtown Blvd',
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      coordinates: [41.8781, -87.6298]
    },
    thumbnail: 'https://images.pexels.com/photos/273214/pexels-photo-273214.jpeg?auto=compress&cs=tinysrgb&w=600',
    units: 210,
    availableUnits: 168,
    manager: 'Sarah Johnson'
  },
  {
    id: 'proj4',
    name: 'Riverside Villas',
    description: 'Premium villas with luxury amenities along the riverfront',
    status: 'completed',
    progress: 100,
    startDate: '2022-07-20',
    endDate: '2024-02-28',
    budget: 32800000,
    spent: 31950000,
    location: {
      address: '321 River Lane',
      city: 'Austin',
      state: 'TX',
      country: 'USA',
      coordinates: [30.2672, -97.7431]
    },
    thumbnail: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
    units: 45,
    availableUnits: 12,
    manager: 'Michael Thompson'
  }
];

export const clients: Client[] = [
  {
    id: 'client1',
    name: 'Jennifer Aniston',
    email: 'jennifer@example.com',
    phone: '(555) 123-4567',
    company: 'Aniston Investments',
    status: 'active',
    createdAt: '2023-06-15',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    interests: ['Luxury Condos', 'Beachfront Properties'],
    totalSpent: 1250000,
    lastContact: '2024-04-03'
  },
  {
    id: 'client2',
    name: 'Robert Downey',
    email: 'robert@example.com',
    phone: '(555) 987-6543',
    company: 'Stark Industries',
    status: 'active',
    createdAt: '2023-08-22',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    interests: ['Commercial Properties', 'Mixed-Use Developments'],
    totalSpent: 4500000,
    lastContact: '2024-04-10'
  },
  {
    id: 'client3',
    name: 'Emma Thompson',
    email: 'emma@example.com',
    phone: '(555) 456-7890',
    status: 'lead',
    createdAt: '2024-02-10',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    interests: ['Eco-Friendly Homes', 'Smart Houses'],
    totalSpent: 0,
    lastContact: '2024-03-28'
  },
  {
    id: 'client4',
    name: 'James Wilson',
    email: 'james@example.com',
    phone: '(555) 789-0123',
    company: 'Wilson Properties',
    status: 'inactive',
    createdAt: '2023-05-05',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100',
    interests: ['Investment Properties', 'Residential Complexes'],
    totalSpent: 750000,
    lastContact: '2023-11-15'
  }
];

export const contracts: Contract[] = [
  {
    id: 'contract1',
    title: 'Seaside Residences Unit A12 Sale Agreement',
    clientId: 'client1',
    clientName: 'Jennifer Aniston',
    projectId: 'proj1',
    projectName: 'Seaside Residences',
    status: 'signed',
    createdAt: '2024-01-15',
    updatedAt: '2024-02-02',
    signedAt: '2024-02-02',
    value: 1250000,
    documentUrl: '/contracts/seaside-a12.pdf',
    expiresAt: '2024-07-15'
  },
  {
    id: 'contract2',
    title: 'Metropolitan Tower Commercial Space Lease',
    clientId: 'client2',
    clientName: 'Robert Downey',
    projectId: 'proj3',
    projectName: 'Metropolitan Tower',
    status: 'pending',
    createdAt: '2024-03-20',
    updatedAt: '2024-03-20',
    value: 4500000,
    documentUrl: '/contracts/metro-comm-lease.pdf',
    expiresAt: '2024-04-20'
  },
  {
    id: 'contract3',
    title: 'Green Valley Homes Unit B7 Purchase Agreement',
    clientId: 'client3',
    clientName: 'Emma Thompson',
    projectId: 'proj2',
    projectName: 'Green Valley Homes',
    status: 'draft',
    createdAt: '2024-03-28',
    updatedAt: '2024-04-05',
    value: 875000,
    documentUrl: '/contracts/green-valley-b7.pdf'
  },
  {
    id: 'contract4',
    title: 'Riverside Villas Unit C3 Sale Agreement',
    clientId: 'client4',
    clientName: 'James Wilson',
    projectId: 'proj4',
    projectName: 'Riverside Villas',
    status: 'completed',
    createdAt: '2023-08-10',
    updatedAt: '2023-12-05',
    signedAt: '2023-08-25',
    value: 750000,
    documentUrl: '/contracts/riverside-c3.pdf'
  }
];

export const financialTransactions: FinancialTransaction[] = [
  {
    id: 'trans1',
    type: 'income',
    amount: 250000,
    description: 'Initial payment for Unit A12',
    category: 'Sales',
    date: '2024-02-05',
    projectId: 'proj1',
    projectName: 'Seaside Residences',
    clientId: 'client1',
    clientName: 'Jennifer Aniston',
    status: 'completed'
  },
  {
    id: 'trans2',
    type: 'expense',
    amount: 1850000,
    description: 'Construction materials',
    category: 'Materials',
    date: '2024-03-12',
    projectId: 'proj1',
    projectName: 'Seaside Residences',
    status: 'completed'
  },
  {
    id: 'trans3',
    type: 'expense',
    amount: 750000,
    description: 'Contractor payment',
    category: 'Labor',
    date: '2024-03-28',
    projectId: 'proj3',
    projectName: 'Metropolitan Tower',
    status: 'completed'
  },
  {
    id: 'trans4',
    type: 'income',
    amount: 450000,
    description: 'Deposit for Commercial Space',
    category: 'Leasing',
    date: '2024-04-02',
    projectId: 'proj3',
    projectName: 'Metropolitan Tower',
    clientId: 'client2',
    clientName: 'Robert Downey',
    status: 'pending'
  }
];

export const notifications: Notification[] = [
  {
    id: 'notif1',
    title: 'Contract Signed',
    message: 'Jennifer Aniston has signed the Seaside Residences Unit A12 Sale Agreement',
    type: 'success',
    read: false,
    createdAt: '2024-04-10T09:23:45Z',
    link: '/contracts/contract1'
  },
  {
    id: 'notif2',
    title: 'Payment Received',
    message: 'Initial payment received for Seaside Residences Unit A12',
    type: 'info',
    read: true,
    createdAt: '2024-04-05T14:12:30Z',
    link: '/finance/trans1'
  },
  {
    id: 'notif3',
    title: 'Project Milestone',
    message: 'Metropolitan Tower has reached 40% completion',
    type: 'info',
    read: false,
    createdAt: '2024-04-08T11:45:22Z',
    link: '/projects/proj3'
  },
  {
    id: 'notif4',
    title: 'Contract Expiring',
    message: 'Metropolitan Tower Commercial Space Lease contract expires in 10 days',
    type: 'warning',
    read: false,
    createdAt: '2024-04-10T08:15:40Z',
    link: '/contracts/contract2'
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'metric1',
    label: 'Total Revenue',
    value: '$4,250,000',
    change: 12.5,
    trend: 'up',
    icon: 'dollar-sign'
  },
  {
    id: 'metric2',
    label: 'Active Projects',
    value: '3',
    change: 0,
    trend: 'neutral',
    icon: 'building'
  },
  {
    id: 'metric3',
    label: 'Available Units',
    value: '308',
    change: -5.2,
    trend: 'down',
    icon: 'home'
  },
  {
    id: 'metric4',
    label: 'Client Leads',
    value: '24',
    change: 8.7,
    trend: 'up',
    icon: 'users'
  }
];

export const revenueChartData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [650000, 750000, 825000, 950000, 1075000, 1250000],
      backgroundColor: 'rgba(15, 82, 186, 0.2)',
      borderColor: 'rgba(15, 82, 186, 1)',
      borderWidth: 2
    },
    {
      label: 'Expenses',
      data: [450000, 520000, 580000, 620000, 700000, 750000],
      backgroundColor: 'rgba(244, 67, 54, 0.2)',
      borderColor: 'rgba(244, 67, 54, 1)',
      borderWidth: 2
    }
  ]
};

export const projectStatusChartData: ChartData = {
  labels: ['Planning', 'In Progress', 'Completed', 'On Hold'],
  datasets: [{
    label: 'Projects by Status',
    data: [1, 2, 1, 0],
    backgroundColor: [
      'rgba(255, 193, 7, 0.6)',
      'rgba(15, 82, 186, 0.6)',
      'rgba(76, 175, 80, 0.6)',
      'rgba(244, 67, 54, 0.6)'
    ],
    borderColor: [
      'rgba(255, 193, 7, 1)',
      'rgba(15, 82, 186, 1)',
      'rgba(76, 175, 80, 1)',
      'rgba(244, 67, 54, 1)'
    ],
    borderWidth: 1
  }]
};

export const recentActivities: RecentActivity[] = [
  {
    id: 'activity1',
    description: 'signed a contract for Seaside Residences Unit A12',
    user: {
      id: 'user1',
      name: 'Alex Morgan',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    timestamp: '2024-04-10T09:23:45Z',
    type: 'contract',
    entityId: 'contract1'
  },
  {
    id: 'activity2',
    description: 'added a new client lead',
    user: {
      id: 'user2',
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    timestamp: '2024-04-10T08:45:12Z',
    type: 'client',
    entityId: 'client3'
  },
  {
    id: 'activity3',
    description: 'updated the Metropolitan Tower project to 40% completion',
    user: {
      id: 'user3',
      name: 'David Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    timestamp: '2024-04-09T15:30:22Z',
    type: 'project',
    entityId: 'proj3'
  },
  {
    id: 'activity4',
    description: 'processed payment for construction materials',
    user: {
      id: 'user4',
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    timestamp: '2024-04-09T11:15:40Z',
    type: 'financial',
    entityId: 'trans2'
  }
];