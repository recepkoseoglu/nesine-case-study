import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BetslipState {
  bets: Record<string, { id: string; bet: Bet; oc: Oc }>;
}

const initialState: BetslipState = { bets: {} };

const betslipSlice = createSlice({
  name: 'betslip',
  initialState,
  reducers: {
    addBet(state, action: PayloadAction<{ bet: Bet; oc: Oc }>) {
      if (state.bets[action.payload.bet.NID]?.oc?.ID === action.payload.oc.ID) {
        delete state.bets[action.payload.bet.NID];
        return;
      }
      state.bets[action.payload.bet.NID] = {
        id: action.payload.bet.NID,
        bet: action.payload.bet,
        oc: action.payload.oc
      };
    },

    clearBets(state) {
      state.bets = {};
    }
  }
});

export const { addBet, clearBets } = betslipSlice.actions;
export default betslipSlice.reducer;
