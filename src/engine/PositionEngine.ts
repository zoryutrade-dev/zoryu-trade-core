import type { Position } from "../domain/position/PositionTypes.js";
import { updateCurrentPrice } from "../domain/position/Position.js";
import { evaluatePosition } from "../domain/position/PositionLifecycle.js";

export function tickPosition(pos: Position, newPrice: number) {
  const updated = updateCurrentPrice(pos, newPrice);
  return evaluatePosition(updated);
}
