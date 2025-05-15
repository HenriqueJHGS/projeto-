import React from 'react';
import Card, { CardHeader } from '../common/Card';
import Avatar from '../common/Avatar';
import Button from '../common/Button';
import { recentActivities } from '../../utils/dummyData';
import { ClockIcon } from 'lucide-react';

const RecentActivities: React.FC = () => {
  // Function to format date to relative time
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    }
    
    return date.toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader 
        title={
          <div className="flex items-center">
            <ClockIcon size={18} className="text-primary-600 mr-2" />
            <span>Recent Activities</span>
          </div>
        }
        subtitle="Latest updates from the team"
        action={
          <Button size="sm" variant="outline">View All</Button>
        }
      />
      
      <div className="mt-4 space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex">
            <div className="flex-shrink-0">
              <Avatar src={activity.user.avatar} name={activity.user.name} size="md" />
            </div>
            
            <div className="ml-3 flex-1">
              <div className="text-sm">
                <span className="font-medium text-gray-900">{activity.user.name}</span>
                {' '}
                <span className="text-gray-600">{activity.description}</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                {formatRelativeTime(activity.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-sm text-primary-600 hover:text-primary-800 font-medium">
          Load more
        </button>
      </div>
    </Card>
  );
};

export default RecentActivities;