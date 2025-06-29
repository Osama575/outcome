
import React from 'react';
import { Play, TrendingUp, Users, Trophy, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileHomeScreen = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
          <p className="text-gray-400">Ready to duel?</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Balance</p>
          <p className="text-xl font-bold text-emerald-400">$1,247.50</p>
        </div>
      </div>

      {/* Quick Challenge Button */}
      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl">
        <Users className="mr-2 h-5 w-5" />
        Challenge Friends
      </Button>

      {/* Active Duels */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Active Duels</h2>
        <div className="space-y-3">
          {/* Duel 1 */}
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold">vs Mike_Jordan23</p>
                  <p className="text-sm text-gray-400">Lakers vs Warriors</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-emerald-400 font-semibold">$50</p>
                <p className="text-xs text-gray-400">Stake</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Play className="h-4 w-4 text-red-500" />
                <span className="text-sm">Live: LAL 78 - GSW 82</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <Clock className="h-3 w-3" />
                <span>2:34 Q3</span>
              </div>
            </div>
          </div>

          {/* Duel 2 */}
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">SB</span>
                </div>
                <div>
                  <p className="font-semibold">vs Sarah_Bets</p>
                  <p className="text-sm text-gray-400">Chiefs vs Bills</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-emerald-400 font-semibold">$25</p>
                <p className="text-xs text-gray-400">Stake</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Starts in 2 hours</span>
              </div>
              <div className="text-xs text-gray-400">
                <span>NFL Week 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Won vs Tommy_TB</p>
                <p className="text-sm text-gray-400">Bucs vs Falcons</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-semibold">+$40</p>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <TrendingUp className="h-4 w-4 rotate-180" />
              </div>
              <div>
                <p className="font-medium">Lost vs KingBet99</p>
                <p className="text-sm text-gray-400">Celtics vs Heat</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-red-400 font-semibold">-$20</p>
              <p className="text-xs text-gray-400">Yesterday</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">Your Stats</h3>
          <Trophy className="h-5 w-5" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">23</p>
            <p className="text-xs opacity-90">Wins</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">7</p>
            <p className="text-xs opacity-90">Losses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">77%</p>
            <p className="text-xs opacity-90">Win Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHomeScreen;
