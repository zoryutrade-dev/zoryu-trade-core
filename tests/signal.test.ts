import { describe, it, expect } from "vitest";
import { createSignal } from "../src/domain/signal/Signal.js";

describe("Signal", () => {
  it("creates a valid signal", () => {
    const s = createSignal({
      signalId: "SOL-LONG-001",
      symbol: "SOL",
      direction: "long",
      entryPrice: 100,
      stopLoss: 95,
      tps: { tp1: 105, tp2: 110, tp3: 120 },
      confidence: 80,
      riskReward: 2.5,
      reasoning: "test"
    });

    expect(s.signalId).toBe("SOL-LONG-001");
    expect(s.createdAt).toBeInstanceOf(Date);
  });
});
