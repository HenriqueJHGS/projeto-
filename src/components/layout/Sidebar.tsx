import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building, Users, Contact as FileContract, DollarSign, BarChart4, MessageSquare, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const mainNavItems: NavItem[] = [
  { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
  { title: 'Projects', icon: <Building size={20} />, path: '/projects' },
  { title: 'Clients', icon: <Users size={20} />, path: '/clients' },
  { title: 'Contracts', icon: <FileContract size={20} />, path: '/contracts' },
  { title: 'Finance', icon: <DollarSign size={20} />, path: '/finance' },
  { title: 'Reports', icon: <BarChart4 size={20} />, path: '/reports' },
];

const secondaryNavItems: NavItem[] = [
  { title: 'Support', icon: <MessageSquare size={20} />, path: '/support' },
  { title: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  { title: 'Help', icon: <HelpCircle size={20} />, path: '/help' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed z-10 lg:z-0 inset-y-0 left-0 w-64 bg-white shadow-md transition-transform duration-300 ease-in-out transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      <div className="h-full flex flex-col overflow-y-auto">
        <div className="px-6 py-6 flex-shrink-0 bg-gray-50 border-b border-gray-200">
          <div className="text-sm mb-1 text-gray-500">Hello,</div>
          <div className="font-semibold text-gray-900">ConstructFlow</div>
        </div>

        <nav className="mt-4 flex-1 px-4 space-y-1">
          <p className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </p>
          {mainNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}
                group flex items-center px-2 py-2.5 text-sm font-medium rounded-md
              `}
            >
              <span className="mr-3">{item.icon}</span>
              {item.title}
            </NavLink>
          ))}

          <div className="pt-6 border-t border-gray-200 mt-6">
            <p className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Support
            </p>
            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}
                  group flex items-center px-2 py-2.5 text-sm font-medium rounded-md
                `}
              >
                <span className="mr-3 text-gray-500">{item.icon}</span>
                {item.title}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="bg-primary-50 m-4 p-4 rounded-lg">
          <p className="text-sm font-medium text-primary-700">Need help?</p>
          <p className="text-xs text-primary-600 mt-1">Ask our AI assistant for quick answers and support.</p>
          <button className="mt-2 w-full bg-white border border-primary-200 text-primary-700 text-sm px-3 py-1.5 rounded shadow-sm hover:bg-primary-700 hover:text-white transition-colors">
            Ask AI Assistant
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;