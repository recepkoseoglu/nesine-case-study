'use client';
import React from 'react';
import Bulletin from './Bulettin';
import { getGrouppedBets } from '@/utils';

const BulletinList = ({ bets }: { bets: Bet[] }) => {
  const groups = React.useMemo(() => getGrouppedBets(bets || []), [bets]);
  const [visibleCount, setVisibleCount] = React.useState<number>(15);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setVisibleCount(15);
  }, [bets]);

  React.useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((v) => Math.min(v + 15, groups.length));
          }
        });
      },
      { root: null, rootMargin: '20px', threshold: 0.1 }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [groups.length]);

  const rowCass = 'border border-gray-300 px-3 py-2 text-center';

  return (
    <div className="bg-white">
      <table className="w-full text-sm border-collapse border border-gray-400">
        <thead className="bg-gray-300 sticky top-0 border-b border-gray-300">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-left">
              Event Count: {bets.length}
            </th>
            <th className={rowCass}>Yorumlar</th>
            <th className={rowCass}></th>
            <th className={rowCass}>1</th>
            <th className={rowCass}>X</th>
            <th className={rowCass}>2</th>
            <th className={rowCass}>Alt</th>
            <th className={rowCass}>Üst</th>
            <th className={rowCass}>H1</th>
            <th className={rowCass}>1</th>
            <th className={rowCass}>x</th>
            <th className={rowCass}>2</th>
            <th className={rowCass}>H2</th>
            <th className={rowCass}>1-X</th>
            <th className={rowCass}>1-2</th>
            <th className={rowCass}>X-2</th>
            <th className={rowCass}>Var</th>
            <th className={rowCass}>Yok</th>
            <th className={rowCass}>+99</th>
          </tr>
        </thead>
        <tbody>
          {groups.slice(0, visibleCount).map((items, idx: number) => {
            const firstBet = items[0];
            const date = [firstBet.D, firstBet.DAY].filter(Boolean).join(' ');
            const league = firstBet.LN || '';
            return (
              <React.Fragment key={idx}>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-3 py-1 text-left">
                    {`${date} ${league}`}
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    Yorumlar
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center"></td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    1
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    X
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    2
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    Alt
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    Üst
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    H1
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    1
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    x
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    2
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    H2
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    1-X
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    1-2
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    X-2
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    Var
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    Yok
                  </td>
                  <td className="border border-gray-300 px-3 py-1 text-center">
                    +99
                  </td>
                </tr>
                {items.map((b) => (
                  <Bulletin key={b.NID} bet={b} />
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div ref={sentinelRef} />
      {visibleCount < groups.length ? (
        <div className="p-2 text-center text-sm text-gray-500">
          Loading more…
        </div>
      ) : null}
    </div>
  );
};

export default BulletinList;
