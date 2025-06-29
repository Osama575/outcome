
import React, { useState } from 'react';
import MobileHomeScreen from '@/components/mobile/MobileHomeScreen';
import CreateDuelScreen from '@/components/mobile/CreateDuelScreen';
import ActiveDuelScreen from '@/components/mobile/ActiveDuelScreen';
import FriendsScreen from '@/components/mobile/FriendsScreen';
import MobileNavigation from '@/components/mobile/MobileNavigation';

const MobileApp = () => {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <MobileHomeScreen />;
      case 'create':
        return <CreateDuelScreen />;
      case 'active':
        return <ActiveDuelScreen />;
      case 'friends':
        return <FriendsScreen />;
      default:
        return <MobileHomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white max-w-sm mx-auto relative overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-sm">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-full bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <MobileNavigation activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default MobileApp;
