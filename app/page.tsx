import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-extrabold tracking-tight">
            Nesine Case Study
          </div>
          <nav className="space-x-4">
            <Link
              href="/iddaa"
              className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Browse Bets
            </Link>
          </nav>
        </div>
      </header>

      <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Real-time betting picks, fast odds, and secure wagers
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the latest matches and market odds. Add selections to your
            betslip and place bets with confidence. Built for speed and clarity.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/iddaa"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
            >
              Start Betting
            </Link>
            <a
              href="#features"
              className="text-sm text-gray-700 hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>

        <div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-gray-500">LIVE</div>
                <div className="font-semibold">FC Example vs United Test</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Match</div>
                <div className="text-lg font-semibold">1.85</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button className="py-2 rounded-md bg-gray-100 hover:bg-gray-200">
                1
              </button>
              <button className="py-2 rounded-md bg-gray-100 hover:bg-gray-200">
                X
              </button>
              <button className="py-2 rounded-md bg-gray-100 hover:bg-gray-200">
                2
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-16">
        <h2 className="text-2xl font-bold mb-6">Why choose Nesine Bets?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Fast Odds</h3>
            <p className="text-sm text-gray-600">
              Get live market updates and lightning-fast pricing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Secure Wallet</h3>
            <p className="text-sm text-gray-600">
              Bank-grade security for deposits and payouts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Smart Betslip</h3>
            <p className="text-sm text-gray-600">
              Add selections and manage your stake from one place.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="container py-6 text-sm text-gray-600 flex justify-between">
          <div>© {new Date().getFullYear()} Nesine Bets</div>
          <div>Terms · Privacy</div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
