import type { Signal, SignalInput } from "./SignalTypes.js";
import { validateSignalInput } from "./SignalSchema.js";

export function createSignal(input: SignalInput): Signal {
  validateSignalInput(input);

  return {
    ...input,
    createdAt: input.createdAt ?? new Date(),
  } as Signal;
}
