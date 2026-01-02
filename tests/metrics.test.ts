import { describe, it, expect } from "vitest";
import { aggregatePerformance } from "../src/metrics/MetricsAggregator.js";
import type { Position } from "../src/domain/position/PositionTypes.js";

describe("Metrics", () => {
  it("aggregates performance correctly", () => {
    const positions: Position[] = [
      {
        positionId: "p1",
        signalId: "s1",
        symbol: "SOL",
        direction: "long",
        entryPrice: 100,
        currentPrice: 110,
        tp1: 105, tp2: 110, tp3: 120,
        stopLoss: 95,
        confidence: 80,
        openedAt: new Date(),
        status: "closed_tp2",
        pnlPercent: 10,
        closedAt: new Date(),
        closeReason: "TP2 hit",
      },
      {
        positionId: "p2",
        signalId: "s2",
        symbol: "SOL",
        direction: "long",
        entryPrice: 100,
        currentPrice: 94,
        tp1: 105, tp2: 110, tp3: 120,
        stopLoss: 95,
        confidence: 70,
        openedAt: new Date(),
        status: "closed_sl",
        pnlPercent: -6,
        closedAt: new Date(),
        closeReason: "SL hit",
      },
      {
        positionId: "p3",
        signalId: "s3",
        symbol: "SOL",
        direction: "long",
        entryPrice: 100,
        currentPrice: 101,
        tp1: 105, tp2: 110, tp3: 120,
        stopLoss: 95,
        confidence: 60,
        openedAt: new Date(),
        status: "open",
        pnlPercent: 1,
      },
    ];

    const stats = aggregatePerformance(positions);

    expect(stats.total).toBe(3);
    expect(stats.wins).toBe(1);
    expect(stats.losses).toBe(1);
    expect(stats.pending).toBe(1);
    expect(stats.winRate).toBe(50);
    expect(stats.totalPnl).toBe(5); // 10 + (-6) + 1
  });
});
