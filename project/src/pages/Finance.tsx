import React, { useState } from 'react';
import { DollarSign, Plus, Filter, ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardHeader, CardContent } from '../components/common/Card';
import Badge from '../components/common/Badge';
import TransactionCard from '../components/finance/TransactionCard';
import { financialTransactions } from '../utils/dummyData';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Finance: React.FC = () => {
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  
  // Filter transactions based on selected filters
  const filteredTransactions = financialTransactions.filter(transaction => {
    const matchesType = filterType ? transaction.type === filterType : true;
    const matchesStatus = filterStatus ? transaction.status === filterStatus : true;
    return matchesType && matchesStatus;
  });
  
  // Calculate totals
  const totalIncome = financialTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalExpenses = financialTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const balance = totalIncome - totalExpenses;
  
  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [450000, 520000, 610000, 790000, 820000, 950000],
        borderColor: 'rgba(76, 175, 80, 1)',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Expenses',
        data: [380000, 430000, 520000, 590000, 610000, 680000],
        borderColor: 'rgba(244, 67, 54, 1)',
        backgroundColor: 'rgba(244, 67, 54, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: (value: any) => `$${value / 1000}k`
        }
      }
    },
    plugins: {
      tooltip: {
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
    }
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your income, expenses and financial health</p>
        </div>
        <div className="flex space-x-3">
          <Button leftIcon={<Plus size={16} />} variant="outline">
            New Expense
          </Button>
          <Button leftIcon={<Plus size={16} />}>
            New Income
          </Button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-success-50 border border-success-100">
            <div className="flex items-center">
              <div className="p-3 bg-success-100 rounded-lg">
                <ArrowUp size={24} className="text-success-600" />
              </div>
              <div className="ml-4">
                <p className="text-success-700 font-medium">Total Income</p>
                <h3 className="text-2xl font-bold text-success-800">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(totalIncome)}
                </h3>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="bg-error-50 border border-error-100">
            <div className="flex items-center">
              <div className="p-3 bg-error-100 rounded-lg">
                <ArrowDown size={24} className="text-error-600" />
              </div>
              <div className="ml-4">
                <p className="text-error-700 font-medium">Total Expenses</p>
                <h3 className="text-2xl font-bold text-error-800">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(totalExpenses)}
                </h3>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="bg-primary-50 border border-primary-100">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-lg">
                <DollarSign size={24} className="text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-primary-700 font-medium">Current Balance</p>
                <h3 className="text-2xl font-bold text-primary-800">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(balance)}
                </h3>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Financial Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader 
            title="Financial Overview"
            subtitle="Income vs. Expenses (6 months)"
            action={
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">Monthly</Button>
                <Button size="sm" variant="outline">Quarterly</Button>
                <Button size="sm" variant="outline">Yearly</Button>
              </div>
            }
          />
          <CardContent>
            <div className="h-80">
              <Line data={chartData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Transactions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Type:</span>
              <div className="flex space-x-1">
                <Badge 
                  text="All" 
                  variant={filterType === null ? 'primary' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setFilterType(null)}
                />
                <Badge 
                  text="Income" 
                  variant={filterType === 'income' ? 'success' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setFilterType('income')}
                />
                <Badge 
                  text="Expense" 
                  variant={filterType === 'expense' ? 'error' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setFilterType('expense')}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Status:</span>
              <div className="flex space-x-1">
                <Badge 
                  text="All" 
                  variant={filterStatus === null ? 'primary' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setFilterStatus(null)}
                />
                <Badge 
                  text="Completed" 
                  variant={filterStatus === 'completed' ? 'success' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setFilterStatus('completed')}
                />
                <Badge 
                  text="Pending" 
                  variant={filterStatus === 'pending' ? 'warning' : 'default'}
                  className="cursor-pointer"
                  onClick={() => setFilterStatus('pending')}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
            >
              <TransactionCard transaction={transaction} />
            </motion.div>
          ))}
        </div>
        
        {filteredTransactions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No transactions match your current filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Finance;