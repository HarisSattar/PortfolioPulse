import { Metadata } from 'next';

// This is the modern Next.js 15+ way to handle SEO and tab titles
export const metadata: Metadata = {
  title: 'PortfolioPulse | Real-time Stock Tracker',
  description: 'Monitor your stock portfolio with live Kafka-driven signals.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-bullish">
          PortfolioPulse
        </h1>
        <p className="text-gray-400 mt-2">
          Your equity, streamed in real-time. test
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          <p className="text-gray-500 italic">Waiting for price signals...</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">My Portfolio</h2>
          <p className="text-gray-500 italic">Connect your wallet or account to begin.</p>
        </div>
      </main>
    </div>
  );
}