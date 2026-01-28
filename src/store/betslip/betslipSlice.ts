import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setToLocalStorage, removeFromLocalStorage } from '../../utils/storage';

interface BetslipState {
  bets: Record<string, { id: string; bet: Bet; oc: Oc }>;
}

const STORAGE_KEY = 'betslip-state';

const initialState: BetslipState = { bets: {} };

const betslipSlice = createSlice({
  name: 'betslip',
  initialState,
  reducers: {
    addBet(state, action: PayloadAction<{ bet: Bet; oc: Oc }>) {
      if (state.bets[action.payload.bet.NID]?.oc?.ID === action.payload.oc.ID) {
        delete state.bets[action.payload.bet.NID];
      } else {
        state.bets[action.payload.bet.NID] = {
          id: action.payload.bet.NID,
          bet: action.payload.bet,
          oc: action.payload.oc
        };
      }
      setToLocalStorage(STORAGE_KEY, state);
    },
    clearBets(state) {
      state.bets = {};
      removeFromLocalStorage(STORAGE_KEY);
    },
    hydrateBetslip(_, action: PayloadAction<BetslipState>) {
      return action.payload;
    }
  }
});

export const { addBet, clearBets, hydrateBetslip } = betslipSlice.actions;
export default betslipSlice.reducer;
