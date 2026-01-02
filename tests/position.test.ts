import { describe, it, expect } from "vitest";
import { createPosition } from "../src/domain/position/Position.js";
import { tickPosition } from "../src/engine/PositionEngine.js";

describe("Position", () => {
  it("closes at TP1 for long", () => {
    const p = createPosition({
      positionId: "pos_1",
      signalId: "sig_1",
      symbol: "SOL",
      direction: "long",
      entryPrice: 100,
      currentPrice: 100,
      tp1: 105,
      tp2: 110,
      tp3: 120,
      stopLoss: 95,
      confidence: 80
    });

    const res = tickPosition(p, 105);
    expect(res.closed).toBe(true);
    expect(res.position.status).toBe("closed_tp1");
  });

  it("closes at SL for short", () => {
    const p = createPosition({
      positionId: "pos_2",
      signalId: "sig_2",
      symbol: "SOL",
      direction: "short",
      entryPrice: 100,
      currentPrice: 100,
      tp1: 95,
      tp2: 90,
      tp3: 80,
      stopLoss: 105,
      confidence: 70
    });

    const res = tickPosition(p, 106);
    expect(res.closed).toBe(true);
    expect(res.position.status).toBe("closed_sl");
  });
});
