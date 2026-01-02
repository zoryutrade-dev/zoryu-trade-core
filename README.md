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

© Zoryu Trade — core logic, not presentation.
