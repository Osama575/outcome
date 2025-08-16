
import React from 'react';
import { Home, Plus, Users, User, Wallet } from 'lucide-react';

interface MobileNavigationProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'create', label: 'Create', icon: Plus },
    { id: 'friends', label: 'Friends', icon: Users },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 max-w-sm mx-auto">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveScreen(item.id)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeScreen === item.id
                ? 'text-emerald-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <item.icon className={`h-5 w-5 ${
              activeScreen === item.id && item.id === 'create' ? 'bg-emerald-600 p-1 rounded-full' : ''
            }`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
