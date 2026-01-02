export function calculateWinRate(wins: number, losses: number): number {
  const closed = wins + losses;
  if (closed === 0) return 0;
  return (wins / closed) * 100;
}
