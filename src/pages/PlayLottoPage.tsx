import React, { useState } from 'react';
import { ArrowLeft, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PlayLottoPage() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [draws, setDraws] = useState('1');

  const handleNumberClick = (num: number) => {
    if (numbers.includes(num)) {
      setNumbers(numbers.filter(n => n !== num));
    } else if (numbers.length < 6) {
      setNumbers([...numbers, num]);
    }
  };

  const handleQuickPick = () => {
    const quickPick: number[] = [];
    while (quickPick.length < 6) {
      const num = Math.floor(Math.random() * 49) + 1;
      if (!quickPick.includes(num)) {
        quickPick.push(num);
      }
    }
    setNumbers(quickPick.sort((a, b) => a - b));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle lotto submission logic
    alert('Lotto numbers submitted successfully! Good luck!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600">Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-full">
              <Ticket className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold">Play Lotto</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Pick 6 Numbers</h2>
                <button
                  type="button"
                  onClick={handleQuickPick}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Quick Pick
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 49 }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleNumberClick(num)}
                    className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition
                      ${numbers.includes(num)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Draws
              </label>
              <select
                value={draws}
                onChange={(e) => setDraws(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">1 Draw (R 5)</option>
                <option value="2">2 Draws (R 10)</option>
                <option value="4">4 Draws (R 20)</option>
                <option value="8">8 Draws (R 40)</option>
                <option value="12">12 Draws (R 60)</option>
              </select>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Selected Numbers:</span>
                <span className="font-medium">
                  {numbers.sort((a, b) => a - b).join(', ') || 'None'}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Total Cost:</span>
                <span className="font-medium">
                  R {(Number(draws) * 5).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={numbers.length !== 6}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Play Now
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Next Draw:</h3>
            <p className="text-sm text-gray-600">
              Wednesday, 20 March 2024 - Estimated Jackpot: R 15,000,000
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}