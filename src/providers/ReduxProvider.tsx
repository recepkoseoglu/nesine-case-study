'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useHydrateBetslip } from '../hooks/useHydrateBetslip';

function HydrateWrapper({ children }: { children: React.ReactNode }) {
  useHydrateBetslip();
  return <>{children}</>;
}

export default function ReduxProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <HydrateWrapper>{children}</HydrateWrapper>
    </Provider>
  );
}
