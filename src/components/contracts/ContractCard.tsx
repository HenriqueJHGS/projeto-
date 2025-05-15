import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Building, User, Calendar, DollarSign } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Contract } from '../../types';

interface ContractCardProps {
  contract: Contract;
  className?: string;
}

const ContractCard: React.FC<ContractCardProps> = ({ contract, className = '' }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const statusVariant = 
    contract.status === 'signed' || contract.status === 'completed' ? 'success' :
    contract.status === 'active' ? 'primary' :
    contract.status === 'pending' ? 'warning' :
    contract.status === 'draft' ? 'secondary' : 'error';

  const isExpiringSoon = contract.expiresAt && new Date(contract.expiresAt).getTime() - new Date().getTime() < 7 * 24 * 60 * 60 * 1000;

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-card-hover ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-md bg-primary-100 flex items-center justify-center text-primary-600">
            <FileText size={20} />
          </div>
          <div className="ml-3">
            <Link to={`/contracts/${contract.id}`} className="block">
              <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-1">
                {contract.title}
              </h3>
            </Link>
          </div>
        </div>
        <Badge 
          text={contract.status.replace('_', ' ')} 
          variant={statusVariant}
          className="capitalize"
        />
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Building size={16} className="mr-2 text-gray-400" />
          <Link to={`/projects/${contract.projectId}`} className="hover:text-primary-600">
            {contract.projectName}
          </Link>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <User size={16} className="mr-2 text-gray-400" />
          <Link to={`/clients/${contract.clientId}`} className="hover:text-primary-600">
            {contract.clientName}
          </Link>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2 text-gray-400" />
          <span>Created on {new Date(contract.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign size={16} className="mr-2 text-gray-400" />
          <span>{formatCurrency(contract.value)}</span>
        </div>
      </div>
      
      {isExpiringSoon && contract.status === 'pending' && (
        <div className="mt-4 bg-warning-50 border border-warning-200 rounded-md p-2">
          <p className="text-xs text-warning-700">
            This contract expires on {new Date(contract.expiresAt!).toLocaleDateString()}
          </p>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
        <Button variant="outline" size="sm" leftIcon={<FileText size={14} />}>
          View Document
        </Button>
        {contract.status === 'draft' || contract.status === 'pending' ? (
          <Button variant="primary" size="sm">
            {contract.status === 'draft' ? 'Send' : 'Follow up'}
          </Button>
        ) : null}
      </div>
    </Card>
  );
};

export default ContractCard;