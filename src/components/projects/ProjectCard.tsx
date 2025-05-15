import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import ProgressBar from '../common/ProgressBar';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const statusVariant = 
    project.status === 'completed' ? 'success' :
    project.status === 'in_progress' ? 'primary' :
    project.status === 'planning' ? 'warning' : 'error';

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-card-hover ${className}`}>
      <div className="relative">
        <img 
          src={project.thumbnail} 
          alt={project.name} 
          className="w-full h-44 object-cover rounded-md"
        />
        <div className="absolute top-2 right-2">
          <Badge 
            text={project.status.replace('_', ' ')} 
            variant={statusVariant}
            className="capitalize"
          />
        </div>
      </div>

      <div className="mt-4">
        <Link to={`/projects/${project.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
            {project.name}
          </h3>
        </Link>
        <p className="mt-1 text-gray-600 text-sm line-clamp-2">{project.description}</p>
        
        <div className="mt-3">
          <ProgressBar 
            value={project.progress} 
            label="Project Progress" 
            showPercentage 
            color={
              project.progress >= 75 ? 'success' :
              project.progress >= 25 ? 'primary' : 'warning'
            }
          />
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-gray-400" />
            <span>{project.location.city}, {project.location.state}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-gray-400" />
            <span>
              {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-gray-400" />
            <span>Manager: {project.manager}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-gray-500">Budget</p>
            <p className="font-medium text-gray-900">{formatCurrency(project.budget)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Units</p>
            <p className="font-medium text-gray-900">{project.availableUnits}/{project.units} available</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;