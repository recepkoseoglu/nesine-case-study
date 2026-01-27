'use client';
import { useMemo } from 'react';
import { useAppSelector } from '../store/hooks';

const Betslip = () => {
  const bets = useAppSelector((s) => s.betslip.bets);

  const totalStake = useMemo(() => {
    const list = Object.values(bets);
    if (list.length === 0) return 0;
    return Object.values(bets).reduce((acc, b) => {
      return acc * (Number(b.oc?.O) || 1);
    }, 1);
  }, [bets]);

  return (
    <div className="fixed bottom-0 right-0 bg-white border border-gray-300 py-4 m-4 w-120 shadow-lg text-sm">
      <ul style={{ paddingLeft: 16 }}>
        {Object.values(bets).map((b) => {
          return (
            <li key={b.id} style={{ marginBottom: 8 }}>
              <div className="border-b border-gray-300 py-1 flex gap-4 items-center">
                <p>{b.oc?.MBS}</p>
                <p>Kod: {b.bet.C}</p>
                <p>Maç: {b.bet.N}</p>
                <strong>Oran: {b.oc?.O}</strong>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="p-4 text-md">
        Toplam Tutar:{' '}
        <b>
          {totalStake.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL
        </b>
      </div>
    </div>
  );
};

export default Betslip;
