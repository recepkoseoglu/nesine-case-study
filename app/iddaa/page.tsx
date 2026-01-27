import dynamic from 'next/dynamic';
import BulletinList from '@/components/BulletinList';
const Betslip = dynamic(() =>
  import('@/components/Betslip.tsx').then((module) => module.default)
);

const Page = async () => {
  const data = await fetch('https://nesine-case-study.onrender.com/bets');
  const bets = (await data.json()) as Bet[];

  return (
    <main className="p-4">
      <Betslip />
      <BulletinList bets={bets} />
    </main>
  );
};

export default Page;
