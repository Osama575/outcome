
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, MessageCircle, Clock, TrendingUp, Shield } from 'lucide-react';

const ActiveDuelScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Thierry_Henry', message: 'Good luck! 🏀', time: '2:34 PM' },
    { user: 'You', message: 'You too! Arsenal Got This💪', time: '2:35 PM' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: 'You', message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setMessage('');
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <ArrowLeft className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Active Duel</h1>
      </div>

      {/* VS Section */}
      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-lg font-bold">You</span>
            </div>
            <p className="font-semibold">Alex_Predictor</p>
            <p className="text-sm text-emerald-400">Chiefs Win</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">VS</div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-400">Escrow Protected</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-lg font-bold">MJ</span>
            </div>
            <p className="font-semibold">Mike_Jordan23</p>
            <p className="text-sm text-blue-400">Bills Win</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-400 mb-1">$50</p>
          <p className="text-sm text-gray-400">Total Stake • Winner takes all</p>
        </div>
      </div>

      {/* Game Status */}
      <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Kansas City Chiefs vs Buffalo Bills</h3>
          <div className="flex items-center space-x-1 text-red-500">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">LIVE</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold">21</p>
            <p className="text-sm text-gray-400">KC</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
              <Clock className="h-4 w-4" />
              <span className="text-sm">3:42</span>
            </div>
            <p className="text-xs text-gray-400">2nd Quarter</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">14</p>
            <p className="text-sm text-gray-400">BUF</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Your prediction status:</span>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">Winning!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-gray-800 rounded-2xl border border-gray-700">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="font-semibold">Trash Talk</h3>
          <MessageCircle className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="p-4 space-y-3 max-h-40 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-3 py-2 rounded-2xl ${
                msg.user === 'You' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gray-700 text-gray-100'
              }`}>
                <p className="text-sm">{msg.message}</p>
                <p className="text-xs opacity-70 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send a message..."
              className="bg-gray-700 border-gray-600 text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-emerald-600 hover:bg-emerald-700 px-4"
            >
              Send
            </Button>
          </div>
        </div>
      </div>

      {/* Potential Winnings */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-4">
        <div className="text-center">
          <h3 className="font-semibold mb-2">Potential Winnings</h3>
          <p className="text-3xl font-bold">$50.00</p>
          <p className="text-sm opacity-90">If Chiefs win</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveDuelScreen;
