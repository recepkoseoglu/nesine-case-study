import dynamic from 'next/dynamic';
import BulletinList from '@/components/BulletinList';
import Link from 'next/link';
const Betslip = dynamic(() =>
  import('@/components/Betslip.tsx').then((module) => module.default)
);

const Page = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const bets = (await data.json()) as Bet[];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-center h-16">
          <div className="text-2xl font-extrabold tracking-tight">
            <Link href="/" className="hover:underline">
              Nesine Case Study
            </Link>
          </div>
        </div>
      </header>
      <section>
        <Betslip />
        <BulletinList bets={bets} />
      </section>
    </main>
  );
};

export default Page;
