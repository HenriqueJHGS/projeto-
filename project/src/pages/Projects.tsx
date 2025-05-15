import React, { useState } from 'react';
import { Building, Plus, Filter, Search, Grid, List, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import ProjectCard from '../components/projects/ProjectCard';
import Badge from '../components/common/Badge';
import { projects } from '../utils/dummyData';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  
  const filteredProjects = filterStatus 
    ? projects.filter(project => project.status === filterStatus)
    : projects;
    
  const statuses = [
    { value: 'planning', label: 'Planning' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'on_hold', label: 'On Hold' }
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage and monitor all your construction projects</p>
        </div>
        <Button leftIcon={<Plus size={16} />}>
          New Project
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <div className="relative w-full sm:w-72">
          <Input 
            placeholder="Search projects..." 
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

      {/* Project Cards */}
      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48 md:h-auto">
                  <img 
                    src={project.thumbnail} 
                    alt={project.name} 
                    className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                      <p className="text-gray-600 mt-1">{project.description}</p>
                    </div>
                    <Badge 
                      text={project.status.replace('_', ' ')} 
                      variant={
                        project.status === 'completed' ? 'success' :
                        project.status === 'in_progress' ? 'primary' :
                        project.status === 'planning' ? 'warning' : 'error'
                      }
                      className="capitalize"
                    />
                  </div>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    <span>{project.location.city}, {project.location.state}</span>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`rounded-full h-2 ${
                          project.progress >= 75 ? 'bg-success-500' :
                          project.progress >= 25 ? 'bg-primary-500' : 'bg-warning-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Start Date</p>
                      <p className="font-medium">{new Date(project.startDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">End Date</p>
                      <p className="font-medium">{new Date(project.endDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Budget</p>
                      <p className="font-medium">${project.budget.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Units</p>
                      <p className="font-medium">{project.availableUnits}/{project.units}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">Details</Button>
                    <Button variant="primary" size="sm">Manage</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;