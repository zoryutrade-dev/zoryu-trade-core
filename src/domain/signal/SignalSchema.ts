import { ValidationError } from "../../errors/ValidationError.js";
import type { SignalInput } from "./SignalTypes.js";

function isFiniteNumber(n: unknown): n is number {
  return typeof n === "number" && Number.isFinite(n);
}

export function validateSignalInput(input: SignalInput): void {
  if (!input.signalId?.trim()) throw new ValidationError("signalId is required");
  if (!input.symbol?.trim()) throw new ValidationError("symbol is required");
  if (input.direction !== "long" && input.direction !== "short") {
    throw new ValidationError("direction must be 'long' or 'short'");
  }

  const nums: Array<[string, unknown]> = [
    ["entryPrice", input.entryPrice],
    ["stopLoss", input.stopLoss],
    ["tp1", input.tps?.tp1],
    ["tp2", input.tps?.tp2],
    ["tp3", input.tps?.tp3],
    ["confidence", input.confidence],
    ["riskReward", input.riskReward],
  ];

  for (const [k, v] of nums) {
    if (!isFiniteNumber(v)) throw new ValidationError(`${k} must be a finite number`);
  }

  if (input.confidence < 0 || input.confidence > 100) {
    throw new ValidationError("confidence must be between 0 and 100");
  }
  if (input.riskReward <= 0) {
    throw new ValidationError("riskReward must be > 0");
  }
  if (input.entryPrice <= 0) throw new ValidationError("entryPrice must be > 0");
  if (input.stopLoss <= 0) throw new ValidationError("stopLoss must be > 0");

  // Optional sanity rules (basic)
  if (input.direction === "long") {
    if (!(input.stopLoss < input.entryPrice)) {
      throw new ValidationError("for long: stopLoss must be < entryPrice");
    }
  } else {
    if (!(input.stopLoss > input.entryPrice)) {
      throw new ValidationError("for short: stopLoss must be > entryPrice");
    }
  }
}
