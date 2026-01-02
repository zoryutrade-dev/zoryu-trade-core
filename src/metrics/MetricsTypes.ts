export type PositionOutcome = {
  status: "open" | "win" | "loss";
  pnlPercent: number;
};

export type PerformanceStats = {
  total: number;
  wins: number;
  losses: number;
  pending: number;
  winRate: number;   // 0..100
  totalPnl: number;  // sum pnlPercent
};
