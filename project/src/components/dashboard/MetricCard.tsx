import React from 'react';
import Card from '../common/Card';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { DashboardMetric } from '../../types';

interface MetricCardProps {
  metric: DashboardMetric;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, className = '' }) => {
  const Icon = (() => {
    try {
      // Dynamic import from lucide-react
      const LucideIcon = require('lucide-react')[metric.icon];
      return LucideIcon ? <LucideIcon size={20} /> : null;
    } catch (error) {
      return null;
    }
  })();

  return (
    <Card className={`transition-all duration-300 hover:shadow-card-hover ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary-100 flex items-center justify-center text-primary-600">
          {Icon}
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{metric.value}</h3>
          <p className="text-sm text-gray-500">{metric.label}</p>
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center">
          {metric.trend === 'up' && (
            <>
              <TrendingUp size={16} className="text-success-500 mr-1" />
              <span className="text-sm text-success-700">+{metric.change}%</span>
            </>
          )}
          {metric.trend === 'down' && (
            <>
              <TrendingDown size={16} className="text-error-500 mr-1" />
              <span className="text-sm text-error-700">-{Math.abs(metric.change)}%</span>
            </>
          )}
          {metric.trend === 'neutral' && (
            <span className="text-sm text-gray-500">No change</span>
          )}
        </div>
        <button className="p-1 text-gray-400 hover:text-primary-600 transition-colors">
          <ArrowRight size={16} />
        </button>
      </div>
    </Card>
  );
};

export default MetricCard;