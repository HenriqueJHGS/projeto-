import React, { useState } from 'react';
import { Users, Plus, Search, Filter, Grid, List } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import ClientCard from '../components/clients/ClientCard';
import Badge from '../components/common/Badge';
import { clients } from '../utils/dummyData';
import { motion } from 'framer-motion';

const Clients: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  
  const filteredClients = filterStatus 
    ? clients.filter(client => client.status === filterStatus)
    : clients;
    
  const statuses = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'lead', label: 'Lead' }
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 mt-1">Manage your client relationships</p>
        </div>
        <Button leftIcon={<Plus size={16} />}>
          Add Client
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <div className="relative w-full sm:w-72">
          <Input 
            placeholder="Search clients..." 
            fullWidth
            leftIcon={<Search size={16} />}
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Filter:</span>
            <div className="flex space-x-1">
              <Badge 
                text="All" 
                variant={filterStatus === null ? 'primary' : 'default'}
                className="cursor-pointer"
                onClick={() => setFilterStatus(null)}
              />
              {statuses.map(status => (
                <Badge 
                  key={status.value}
                  text={status.label} 
                  variant={filterStatus === status.value ? 'primary' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setFilterStatus(status.value)}
                />
              ))}
            </div>
          </div>
          
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button 
              className={`p-2 ${view === 'grid' ? 'bg-primary-50 text-primary-600' : 'bg-white text-gray-600'}`}
              onClick={() => setView('grid')}
            >
              <Grid size={16} />
            </button>
            <button 
              className={`p-2 ${view === 'list' ? 'bg-primary-50 text-primary-600' : 'bg-white text-gray-600'}`}
              onClick={() => setView('list')}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Client Cards */}
      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ClientCard client={client} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{client.name}</h3>
                    {client.company && <p className="text-sm text-gray-600">{client.company}</p>}
                  </div>
                </div>
                
                <div className="hidden md:flex items-center space-x-4">
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm">{client.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm">{client.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total Spent</p>
                    <p className="text-sm font-medium">${client.totalSpent.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge 
                    text={client.status} 
                    variant={
                      client.status === 'active' ? 'success' :
                      client.status === 'lead' ? 'warning' : 'error'
                    }
                    className="capitalize"
                  />
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
              
              <div className="mt-4 md:hidden grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm">{client.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm">{client.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Spent</p>
                  <p className="text-sm font-medium">${client.totalSpent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Last Contact</p>
                  <p className="text-sm">{new Date(client.lastContact).toLocaleDateString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clients;