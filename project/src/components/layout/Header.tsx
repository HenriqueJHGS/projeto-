import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, Search, ChevronDown, Building2 } from 'lucide-react';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';
import { currentUser, notifications } from '../../utils/dummyData';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center text-primary-600 font-bold text-xl">
                <Building2 size={24} className="mr-2" />
                <span className="hidden sm:block">ConstructFlow</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <div className="relative flex-1 max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-1 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="sr-only">View notifications</span>
                <Bell size={20} />
                {unreadNotifications > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white" />
                )}
              </button>
              
              {/* Notification Dropdown */}
              {isNotificationsOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-2 px-3 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                      <Badge text={`${unreadNotifications} New`} variant="error" size="sm" />
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <Link
                        key={notification.id}
                        to={notification.link || '#'}
                        className={`block px-4 py-3 hover:bg-gray-50 transition duration-150 ease-in-out ${
                          !notification.read ? 'bg-primary-50' : ''
                        }`}
                        onClick={() => setIsNotificationsOpen(false)}
                      >
                        <div className="flex items-start">
                          <div 
                            className={`flex-shrink-0 h-2 w-2 mt-1.5 rounded-full ${
                              notification.type === 'success' ? 'bg-success-500' :
                              notification.type === 'warning' ? 'bg-warning-500' :
                              notification.type === 'error' ? 'bg-error-500' : 'bg-primary-500'
                            }`}
                          />
                          <div className="ml-3 w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
                            <p className="mt-1 text-xs text-gray-400">
                              {new Date(notification.createdAt).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="py-1 border-t border-gray-100">
                    <Link 
                      to="/notifications" 
                      className="block px-4 py-2 text-center text-sm text-primary-600 hover:text-primary-800 hover:bg-gray-50"
                      onClick={() => setIsNotificationsOpen(false)}
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-sm rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Avatar src={currentUser.avatar} name={currentUser.name} size="sm" status="online" />
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-800">{currentUser.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
                </div>
                <ChevronDown size={16} />
              </button>
              
              {/* Profile dropdown menu */}
              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Settings
                    </Link>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <Bell size={20} />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;