import { addBet } from '@/store/betslip/betslipSlice';
import { useAppSelector } from '@/store/hooks';
import { getObj } from '@/utils';
import { useDispatch } from 'react-redux';

const Bulletin = ({ bet }: { bet: Bet }) => {
  const bets = useAppSelector((s) => s.betslip.bets);
  const dispatch = useDispatch();

  const selectedOc = getObj(bets[bet.NID], 'oc.ID');
  const oc0 = getObj(bet, 'OCG.1.OC.0');
  const oc1 = getObj(bet, 'OCG.1.OC.1');
  const oc3 = getObj(bet, 'OCG.2.OC.3');
  const oc4 = getObj(bet, 'OCG.2.OC.4');
  const oc5 = getObj(bet, 'OCG.2.OC.5');
  const oc25 = getObj(bet, 'OCG.5.OC.25');
  const oc26 = getObj(bet, 'OCG.5.OC.26');

  const rowCass = ' border border-gray-300 px-3 py-6 text-center';

  return (
    <tr className="hover:bg-gray-50 cursor-pointer">
      <td className="border border-gray-300 px-3 py-6 text-left">
        <b>{bet.C}</b> {`${bet.T} ${bet.N}`}
      </td>
      <td className={rowCass}>Yorumlar</td>
      <td className={rowCass}>{getObj(bet, 'OCG.1.MBS')}</td>
      <td
        className={(selectedOc === oc0.ID ? 'bg-green-100' : '') + rowCass}
        onClick={() => dispatch(addBet({ bet, oc: oc0 }))}
      >
        {oc0.O}
      </td>

      <td
        className={(selectedOc === oc1.ID ? 'bg-green-100' : '') + rowCass}
        onClick={() => dispatch(addBet({ bet, oc: oc1 }))}
      >
        {oc1.O}
      </td>
      <td className={rowCass}></td>
      <td
        className={(selectedOc === oc25.ID ? 'bg-green-100' : '') + rowCass}
        onClick={() => dispatch(addBet({ bet, oc: oc25 }))}
      >
        {oc25.O}
      </td>
      <td
        className={(selectedOc === oc26.ID ? 'bg-green-100' : '') + rowCass}
        onClick={() => dispatch(addBet({ bet, oc: oc26 }))}
      >
        {oc26.O}
      </td>
      <td className={rowCass}></td>
      <td className={rowCass}></td>
      <td className={rowCass}></td>
      <td className={rowCass}></td>
      <td className={rowCass}></td>
      <td
        className={(selectedOc === oc3.ID ? 'bg-green-100' : '') + rowCass}
        onClick={() => dispatch(addBet({ bet, oc: oc3 }))}
      >
        {oc3.O}
      </td>
      <td
        className={(selectedOc === oc4.ID ? 'bg-green-100' : '') + rowCass}
        onClick={() => dispatch(addBet({ bet, oc: oc4 }))}
      >
        {oc4.O}
      </td>
      <td
        className={(selectedOc === oc5.ID ? 'bg-green-100' : '') + rowCass}
        onClick={() => dispatch(addBet({ bet, oc: oc5 }))}
      >
        {oc5.O}
      </td>
      <td className={rowCass}></td>
      <td className={rowCass}></td>
      <td className={rowCass}>3</td>
    </tr>
  );
};

export default Bulletin;
