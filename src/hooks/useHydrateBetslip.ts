'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hydrateBetslip } from '../store/betslip/betslipSlice';
import { getFromLocalStorage } from '../utils/storage';

const STORAGE_KEY = 'betslip-state';

export const useHydrateBetslip = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const stored = getFromLocalStorage(STORAGE_KEY, null);
    if (stored) {
      dispatch(hydrateBetslip(stored));
    }
  }, [dispatch]);
};
