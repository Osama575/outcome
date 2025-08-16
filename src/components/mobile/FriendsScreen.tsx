
import React from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, MessageCircle, Trophy, TrendingUp, Clock, Users } from 'lucide-react';

const FriendsScreen = () => {
  const friends = [
    { 
      name: 'Mike_Jordan23', 
      avatar: 'MJ', 
      status: 'online', 
      winRate: 68, 
      totalDuels: 45,
      color: 'bg-blue-600' 
    },
    { 
      name: 'Sarah_Bets', 
      avatar: 'SB', 
      status: 'offline', 
      winRate: 72, 
      totalDuels: 38,
      color: 'bg-purple-600' 
    },
    { 
      name: 'Tommy_TB', 
      avatar: 'TT', 
      status: 'online', 
      winRate: 45, 
      totalDuels: 67,
      color: 'bg-red-600' 
    },
    { 
      name: 'KingBet99', 
      avatar: 'KB', 
      status: 'in-game', 
      winRate: 81, 
      totalDuels: 23,
      color: 'bg-yellow-600' 
    },
  ];

  const pendingChallenges = [
    { 
      name: 'Sarah_Bets', 
      game: 'Lakers vs Warriors', 
      stake: 25, 
      type: 'received',
      avatar: 'SB',
      color: 'bg-purple-600'
    },
    { 
      name: 'Tommy_TB', 
      game: 'Chiefs vs Bills', 
      stake: 50, 
      type: 'sent',
      avatar: 'TT',
      color: 'bg-red-600'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Friends</h1>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Friends
        </Button>
      </div>

      {/* Pending Challenges */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Pending Challenges</h2>
        <div className="space-y-3">
          {pendingChallenges.map((challenge, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${challenge.color} rounded-full flex items-center justify-center`}>
                    <span className="text-sm font-bold">{challenge.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{challenge.name}</p>
                    <p className="text-sm text-gray-400">{challenge.game}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-semibold">${challenge.stake}</p>
                  <p className="text-xs text-gray-400">
                    {challenge.type === 'received' ? 'Received' : 'Sent'}
                  </p>
                </div>
              </div>
              
              {challenge.type === 'received' ? (
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                    Accept
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 rounded-xl">
                    Decline
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center py-2">
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Waiting for response...</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Friends List */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Your Friends</h2>
        <div className="space-y-3">
          {friends.map((friend, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className={`w-12 h-12 ${friend.color} rounded-full flex items-center justify-center`}>
                      <span className="text-sm font-bold">{friend.avatar}</span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                      friend.status === 'online' ? 'bg-green-500' : 
                      friend.status === 'in-game' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                  </div>
                  <div>
                    <p className="font-semibold">{friend.name}</p>
                    <p className="text-sm text-gray-400 capitalize">{friend.status}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 rounded-xl">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                    Challenge
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-900 rounded-xl p-3">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-semibold">{friend.winRate}%</span>
                  </div>
                  <p className="text-xs text-gray-400">Win Rate</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-3">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-semibold">{friend.totalDuels}</span>
                  </div>
                  <p className="text-xs text-gray-400">Total Duels</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Friend Suggestions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Suggested Friends</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">JD</span>
                </div>
                <div>
                  <p className="font-semibold">John_Doe_Bets</p>
                  <p className="text-sm text-gray-400">Mutual friend: Mike_Jordan23</p>
                </div>
              </div>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                Add Friend
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsScreen;
