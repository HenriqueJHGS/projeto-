import React, { useState } from 'react';
import { FileText, Plus, Search, Filter } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import ContractCard from '../components/contracts/ContractCard';
import Badge from '../components/common/Badge';
import { contracts } from '../utils/dummyData';
import { motion } from 'framer-motion';

const Contracts: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  
  const filteredContracts = filterStatus 
    ? contracts.filter(contract => contract.status === filterStatus)
    : contracts;
    
  const statuses = [
    { value: 'draft', label: 'Draft' },
    { value: 'pending', label: 'Pending' },
    { value: 'signed', label: 'Signed' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contracts</h1>
          <p className="text-gray-600 mt-1">Manage all your contracts in one place</p>
        </div>
        <Button leftIcon={<Plus size={16} />}>
          New Contract
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <div className="relative w-full sm:w-72">
          <Input 
            placeholder="Search contracts..." 
            fullWidth
            leftIcon={<Search size={16} />}
          />
        </div>
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
          <span className="text-sm text-gray-600 whitespace-nowrap">Filter:</span>
          <div className="flex space-x-1 flex-nowrap">
            <Badge 
              text="All" 
              variant={filterStatus === null ? 'primary' : 'default'}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setFilterStatus(null)}
            />
            {statuses.map(status => (
              <Badge 
                key={status.value}
                text={status.label} 
                variant={filterStatus === status.value ? 'primary' : 'default'}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setFilterStatus(status.value)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contract Cards */}
      <div className="space-y-4">
        {filteredContracts.map((contract, index) => (
          <motion.div
            key={contract.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ContractCard contract={contract} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contracts;