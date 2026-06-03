"use client";

import { useState } from 'react';

export default function RWADashboard() {
  const [assetId, setAssetId] = useState('');

  const handleMint = () => {
    alert(`Minting RWA token for asset: ${assetId} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">RWA Tokenization</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Asset ID / Reference</label>
          <input
            type="text"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
            className="w-full p-4 border rounded-2xl"
            placeholder="Real estate #123 or Invoice-456"
          />
        </div>

        <button
          onClick={handleMint}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Mint RWA Token
        </button>
      </div>
    </div>
  );
}