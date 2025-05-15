import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import Card, { CardHeader } from '../common/Card';
import Button from '../common/Button';
import { revenueChartData } from '../../utils/dummyData';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

interface RevenueChartProps {
  className?: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ className = '' }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
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
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD',
                maximumFractionDigits: 0
              }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          }
        }
      },
      y: {
        grid: {
          borderDash: [2, 4],
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          callback: function(value: any) {
            return '$' + value / 1000 + 'k';
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.3
      },
      point: {
        radius: 2,
        hoverRadius: 5
      }
    }
  };

  return (
    <Card className={className}>
      <CardHeader 
        title="Financial Overview"
        subtitle="Revenue vs. Expenses"
        action={
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">Monthly</Button>
            <Button size="sm" variant="outline">Quarterly</Button>
          </div>
        }
      />
      <div className="mt-4 h-72">
        <Line data={revenueChartData} options={options} />
      </div>
    </Card>
  );
};

export default RevenueChart;