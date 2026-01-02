import type { Position, PositionInput } from "./PositionTypes.js";

function pnlPercent(direction: "long" | "short", entry: number, current: number): number {
  const diff = direction === "long" ? (current - entry) : (entry - current);
  return (diff / entry) * 100;
}

export function createPosition(input: PositionInput): Position {
  const openedAt = input.openedAt ?? new Date();
  return {
    ...input,
    openedAt,
    status: "open",
    pnlPercent: pnlPercent(input.direction, input.entryPrice, input.currentPrice),
  };
}

export function updateCurrentPrice(pos: Position, newPrice: number): Position {
  return {
    ...pos,
    currentPrice: newPrice,
    pnlPercent: pnlPercent(pos.direction, pos.entryPrice, newPrice),
  };
}
