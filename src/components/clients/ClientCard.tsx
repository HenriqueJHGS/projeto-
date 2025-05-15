import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Calendar, DollarSign, Tag } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Avatar from '../common/Avatar';
import { Client } from '../../types';

interface ClientCardProps {
  client: Client;
  className?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ client, className = '' }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const statusVariant = 
    client.status === 'active' ? 'success' :
    client.status === 'lead' ? 'warning' : 'error';

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-card-hover ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Avatar src={client.avatar} name={client.name} size="lg" />
          <div className="ml-3">
            <Link to={`/clients/${client.id}`} className="block">
              <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                {client.name}
              </h3>
            </Link>
            {client.company && (
              <p className="text-sm text-gray-600">{client.company}</p>
            )}
          </div>
        </div>
        <Badge 
          text={client.status} 
          variant={statusVariant}
          className="capitalize"
        />
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Mail size={16} className="mr-2 text-gray-400" />
          <a href={`mailto:${client.email}`} className="hover:text-primary-600">
            {client.email}
          </a>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone size={16} className="mr-2 text-gray-400" />
          <a href={`tel:${client.phone}`} className="hover:text-primary-600">
            {client.phone}
          </a>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2 text-gray-400" />
          <span>Client since {new Date(client.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-1">Interests</p>
        <div className="flex flex-wrap gap-1">
          {client.interests.map((interest, index) => (
            <Badge 
              key={index} 
              text={interest} 
              variant="secondary" 
              size="sm" 
            />
          ))}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2">
        <div>
          <div className="flex items-center mb-1">
            <DollarSign size={14} className="mr-1 text-gray-400" />
            <p className="text-xs text-gray-500">Total Spent</p>
          </div>
          <p className="font-medium text-gray-900">{formatCurrency(client.totalSpent)}</p>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <Calendar size={14} className="mr-1 text-gray-400" />
            <p className="text-xs text-gray-500">Last Contact</p>
          </div>
          <p className="font-medium text-gray-900">{new Date(client.lastContact).toLocaleDateString()}</p>
        </div>
      </div>
    </Card>
  );
};

export default ClientCard;