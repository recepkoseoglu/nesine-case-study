'use client';
import { useMemo } from 'react';
import { useAppSelector } from '../store/hooks';

const Betslip = () => {
  const bets = useAppSelector((s) => s.betslip.bets);
  const list = Object.values(bets);

  const totalStake = useMemo(() => {
    if (list.length === 0) return 0;
    return list.reduce((acc, b) => {
      return acc * (Number(b.oc?.O) || 1);
    }, 1);
  }, [list]);

  return (
    <div className="fixed bottom-0 right-0 bg-white border border-gray-300 py-4 m-4 w-120 shadow-lg text-sm">
      {list.map((b) => {
        return (
          <div
            key={b.id}
            className="border-b border-gray-300 p-2 flex gap-4 items-center"
          >
            <span>{b.oc?.MBS}</span>
            <span>Kod: {b.bet.C}</span>
            <span>Maç: {b.bet.N}</span>
            <strong>Oran: {b.oc?.O}</strong>
          </div>
        );
      })}
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
