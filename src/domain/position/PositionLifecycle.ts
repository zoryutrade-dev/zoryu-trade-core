import type { Position } from "./PositionTypes.js";

type CloseResult = {
  position: Position;
  closed: boolean;
};

export function evaluatePosition(pos: Position): CloseResult {
  if (pos.status !== "open") return { position: pos, closed: true };

  const p = pos.currentPrice;

  if (pos.direction === "long") {
    if (p <= pos.stopLoss) return close(pos, "closed_sl", "Stop loss hit");
    if (p >= pos.tp3) return close(pos, "closed_tp3", "TP3 hit");
    if (p >= pos.tp2) return close(pos, "closed_tp2", "TP2 hit");
    if (p >= pos.tp1) return close(pos, "closed_tp1", "TP1 hit");
  } else {
    // short
    if (p >= pos.stopLoss) return close(pos, "closed_sl", "Stop loss hit");
    if (p <= pos.tp3) return close(pos, "closed_tp3", "TP3 hit");
    if (p <= pos.tp2) return close(pos, "closed_tp2", "TP2 hit");
    if (p <= pos.tp1) return close(pos, "closed_tp1", "TP1 hit");
  }

  return { position: pos, closed: false };
}

function close(pos: Position, status: Position["status"], reason: string): CloseResult {
  return {
    closed: true,
    position: {
      ...pos,
      status,
      closedAt: new Date(),
      closeReason: reason,
    },
  };
}
