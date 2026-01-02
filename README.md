# Zoryu Trade Core

> Core business logic and domain engine for Zoryu Trade.

Zoryu Trade Core is the internal domain layer that defines how trading logic behaves across the system.
It contains **no UI code**, **no API handlers**, and **no infrastructure concerns**.

This repository represents the **source of truth** for:
- signal lifecycle behavior
- position state transitions
- risk and trade evaluation rules
- performance metric calculations

By isolating this layer, Zoryu ensures that execution logic remains consistent, testable,
and independent of delivery mechanisms.

---

## Responsibilities

Zoryu Trade Core is responsible for:

- Defining how AI signals become tradeable positions
- Managing position lifecycle states (open → monitor → close)
- Evaluating TP / SL conditions deterministically
- Calculating performance metrics such as PnL and win rate
- Enforcing shared domain rules across the system

This repository does **not**:
- interact with wallets
- fetch market data directly
- execute transactions
- expose HTTP APIs
- render user interfaces

---

## Design Principles

- **Pure domain logic**  
  No side effects, no network calls, no persistence.

- **Deterministic behavior**  
  Given the same inputs, outputs are always predictable.

- **Framework-agnostic**  
  Can be consumed by API services, workers, or simulations.

- **Test-first mindset**  
  Core logic is designed to be unit-testable in isolation.

---

## Typical Consumers

- `zoryu-trade-api` → position evaluation & metrics
- `zoryu-trade-worker` → TP / SL monitoring
- `zoryu-trade-ai` → signal validation & normalization
- `zoryu-trade-sdk` → client-side simulation or analytics

---

## Status

This repository is **private and internal**.
It is under active development and considered critical system infrastructure.

---
## Quick Usage (Example)

```ts
import { createSignal, signalToPositionInput, createPosition, tickPosition } from "@zoryu/trade-core";

const signal = createSignal({
  signalId: "SOL-LONG-001",
  symbol: "SOL",
  direction: "long",
  entryPrice: 100,
  stopLoss: 95,
  tps: { tp1: 105, tp2: 110, tp3: 120 },
  confidence: 80,
  riskReward: 2.5
});

const input = signalToPositionInput(signal, 100);
const position = createPosition(input);

const { position: updated, closed } = tickPosition(position, 105);
console.log(updated.status, closed);
```
© Zoryu Trade — core logic, not presentation.
