import type { Signal } from "../domain/signal/SignalTypes.js";
import type { PositionInput } from "../domain/position/PositionTypes.js";

export function signalToPositionInput(signal: Signal, currentPrice: number): PositionInput {
  return {
    positionId: `pos_${signal.signalId}`,
    signalId: signal.signalId,

    symbol: signal.symbol,
    direction: signal.direction,

    entryPrice: signal.entryPrice,
    currentPrice,

    tp1: signal.tps.tp1,
    tp2: signal.tps.tp2,
    tp3: signal.tps.tp3,
    stopLoss: signal.stopLoss,

    confidence: signal.confidence,
  };
}
