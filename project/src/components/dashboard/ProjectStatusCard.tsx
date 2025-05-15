import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Card, { CardHeader } from '../common/Card';
import { projectStatusChartData } from '../../utils/dummyData';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

interface ProjectStatusCardProps {
  className?: string;
}

const ProjectStatusCard: React.FC<ProjectStatusCardProps> = ({ className = '' }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 6,
          padding: 20,
          font: {
            size: 12,
          }
        }
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#1e293b',
        bodyColor: '#1e293b',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
      }
    }
  };

  return (
    <Card className={className}>
      <CardHeader 
        title="Project Status"
        subtitle="Current status distribution"
      />
      <div className="mt-4 h-48 px-4">
        <Doughnut data={projectStatusChartData} options={options} />
      </div>
    </Card>
  );
};

export default ProjectStatusCard;