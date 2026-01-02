import type { Position } from "../domain/position/PositionTypes.js";
import type { PerformanceStats } from "./MetricsTypes.js";
import { calculateWinRate } from "./WinRateCalculator.js";

function isWinStatus(status: Position["status"]) {
  return status === "closed_tp1" || status === "closed_tp2" || status === "closed_tp3";
}

function isLossStatus(status: Position["status"]) {
  return status === "closed_sl";
}

export function aggregatePerformance(positions: Position[]): PerformanceStats {
  let wins = 0;
  let losses = 0;
  let pending = 0;
  let totalPnl = 0;

  for (const p of positions) {
    totalPnl += p.pnlPercent;

    if (p.status === "open") pending++;
    else if (isWinStatus(p.status)) wins++;
    else if (isLossStatus(p.status)) losses++;
  }

  return {
    total: positions.length,
    wins,
    losses,
    pending,
    winRate: calculateWinRate(wins, losses),
    totalPnl,
  };
}
