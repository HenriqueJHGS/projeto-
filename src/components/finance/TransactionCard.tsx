import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowDown, Building, Users, Calendar, Tag } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { FinancialTransaction } from '../../types';

interface TransactionCardProps {
  transaction: FinancialTransaction;
  className?: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction, className = '' }) => {
  const formatCurrency = (amount: number, type: 'income' | 'expense') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(type === 'expense' ? -amount : amount);
  };

  const statusVariant = 
    transaction.status === 'completed' ? 'success' :
    transaction.status === 'pending' ? 'warning' : 'error';

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-card-hover ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
            transaction.type === 'income' ? 'bg-success-100 text-success-600' : 'bg-error-100 text-error-600'
          }`}>
            {transaction.type === 'income' ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
          </div>
          <div className="ml-3">
            <p className="font-semibold text-gray-900 line-clamp-1">
              {transaction.description}
            </p>
            <p className="text-sm text-gray-500">{transaction.category}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-semibold ${
            transaction.type === 'income' ? 'text-success-600' : 'text-error-600'
          }`}>
            {formatCurrency(transaction.amount, transaction.type)}
          </p>
          <Badge 
            text={transaction.status} 
            variant={statusVariant}
            size="sm"
            className="capitalize mt-1"
          />
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        {transaction.projectId && (
          <div className="flex items-center text-sm text-gray-600">
            <Building size={16} className="mr-2 text-gray-400" />
            <Link to={`/projects/${transaction.projectId}`} className="hover:text-primary-600">
              {transaction.projectName}
            </Link>
          </div>
        )}
        {transaction.clientId && (
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-gray-400" />
            <Link to={`/clients/${transaction.clientId}`} className="hover:text-primary-600">
              {transaction.clientName}
            </Link>
          </div>
        )}
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2 text-gray-400" />
          <span>{new Date(transaction.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Tag size={16} className="mr-2 text-gray-400" />
          <span className="capitalize">{transaction.category}</span>
        </div>
      </div>
    </Card>
  );
};

export default TransactionCard;