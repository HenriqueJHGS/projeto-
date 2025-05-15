import React from 'react';
import { Building, Users, FileText, Plus, Search } from 'lucide-react';
import Button from '../components/common/Button';
import MetricCard from '../components/dashboard/MetricCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import ProjectsMap from '../components/dashboard/ProjectsMap';
import RecentActivities from '../components/dashboard/RecentActivities';
import ProjectStatusCard from '../components/dashboard/ProjectStatusCard';
import ProjectCard from '../components/projects/ProjectCard';
import ClientCard from '../components/clients/ClientCard';
import ContractCard from '../components/contracts/ContractCard';
import { dashboardMetrics, projects, clients, contracts } from '../utils/dummyData';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  // Get only the recent projects, clients and contracts
  const recentProjects = projects.slice(0, 2);
  const recentClients = clients.slice(0, 2);
  const recentContracts = contracts.slice(0, 2);

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex space-x-3">
          <Button leftIcon={<Search size={16} />} variant="outline">
            Search
          </Button>
          <Button leftIcon={<Plus size={16} />}>
            New Project
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardMetrics.map((metric) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MetricCard metric={metric} />
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <RevenueChart />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <ProjectStatusCard />
        </motion.div>
      </div>

      {/* Map and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <ProjectsMap />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <RecentActivities />
        </motion.div>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Building size={20} className="text-primary-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
          </div>
          <Button variant="outline" size="sm">
            View All Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Clients and Contracts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Users size={20} className="text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Recent Clients</h2>
            </div>
            <Button variant="outline" size="sm">
              View All Clients
            </Button>
          </div>
          <div className="space-y-4">
            {recentClients.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <ClientCard client={client} />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FileText size={20} className="text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Recent Contracts</h2>
            </div>
            <Button variant="outline" size="sm">
              View All Contracts
            </Button>
          </div>
          <div className="space-y-4">
            {recentContracts.map((contract) => (
              <motion.div
                key={contract.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <ContractCard contract={contract} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;