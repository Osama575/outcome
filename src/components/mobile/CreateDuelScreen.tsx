
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Zap, Circle, Target, Trophy, Users } from 'lucide-react';

const CreateDuelScreen = () => {
  const [selectedSport, setSelectedSport] = useState('nfl');
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customOdds, setCustomOdds] = useState(1.9);

  const sports = [
    { id: 'nfl', name: 'NFL', icon: Zap, color: 'bg-orange-600' },
    { id: 'nba', name: 'NBA', icon: Circle, color: 'bg-red-600' },
    { id: 'mlb', name: 'MLB', icon: Target, color: 'bg-blue-600' },
    { id: 'soccer', name: 'Soccer', icon: Trophy, color: 'bg-green-600' },
  ];

  const amounts = [5, 10, 25, 50];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <ArrowLeft className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Create Duel</h1>
      </div>

      {/* Sport Selection */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Choose Sport</h2>
        <div className="grid grid-cols-2 gap-3">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                selectedSport === sport.id
                  ? 'border-emerald-400 bg-emerald-900/30'
                  : 'border-gray-700 bg-gray-800'
              }`}
            >
              <div className={`w-12 h-12 ${sport.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <sport.icon className="h-6 w-6 text-white" />
              </div>
              <p className="font-medium">{sport.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Game Selection */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Select Game</h2>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">Kansas City Chiefs</p>
            <p className="text-sm text-gray-400">vs</p>
            <p className="font-semibold">Buffalo Bills</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">Sunday, 1:00 PM EST</p>
            <p className="text-xs text-gray-500">Week 12 • Arrowhead Stadium</p>
          </div>
        </div>
      </div>

      {/* Prediction Type */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Your Prediction</h2>
        <div className="space-y-3">
          <button className="w-full bg-gray-800 border-2 border-emerald-400 rounded-2xl p-4 text-left">
            <p className="font-semibold">Kansas City Chiefs to Win</p>
            <p className="text-sm text-gray-400">Moneyline</p>
          </button>
          <button className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 text-left">
            <p className="font-semibold">Over 47.5 Points</p>
            <p className="text-sm text-gray-400">Total Points</p>
          </button>
        </div>
      </div>

      {/* Stake Amount */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Stake Amount</h2>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-3 rounded-xl font-semibold transition-all ${
                selectedAmount === amount
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-800 text-gray-300 border border-gray-700'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
        <Input
          type="number"
          placeholder="Custom amount"
          className="bg-gray-800 border-gray-700 text-white"
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(parseInt(e.target.value) || 0)}
        />
      </div>

      {/* Custom Odds */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Set Your Odds</h2>
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span>Odds</span>
            <span className="text-emerald-400 font-bold">{customOdds.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="1.1"
            max="3.0"
            step="0.1"
            value={customOdds}
            onChange={(e) => setCustomOdds(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>1.1x</span>
            <span>3.0x</span>
          </div>
        </div>
      </div>

      {/* Opponent Selection */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Challenge Opponent</h2>
        <div className="space-y-3">
          <button className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">MJ</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">Mike_Jordan23</p>
              <p className="text-sm text-gray-400">Win Rate: 68% • Online</p>
            </div>
          </button>
          <button className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 flex items-center justify-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Find Random Opponent</span>
          </button>
        </div>
      </div>

      {/* Send Challenge Button */}
      <div className="pt-4">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl">
          Send Challenge - ${selectedAmount}
        </Button>
        <p className="text-center text-sm text-gray-400 mt-2">
          Potential winnings: ${(selectedAmount * customOdds).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CreateDuelScreen;
