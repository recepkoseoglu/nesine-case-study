export const getObj = (obj: Record<string, any>, path: string) => {
  const keys = path
    .replace(/\[([^\[\]]*)\]/g, '.$1.')
    .split('.')
    .filter((t) => t !== '');

  return obj?.[path] ?? keys.reduce((xs: any, x: any) => xs?.[x] ?? null, obj);
};

export const getGrouppedBets = (bets: Bet[]) => {
  const groups: Record<string, Bet[]> = {};
  bets.forEach((b) => {
    const key = `${b.D || ''} ${b.LN || ''}`.trim();
    if (!groups[key]) groups[key] = [];
    groups[key].push(b);
  });
  return Object.values(groups);
};
