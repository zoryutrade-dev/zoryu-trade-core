export type TradeDirection = "long" | "short";

export type SignalTPs = {
  tp1: number;
  tp2: number;
  tp3: number;
};

export type SignalInput = {
  signalId: string;
  symbol: string;
  direction: TradeDirection;

  entryPrice: number;
  stopLoss: number;
  tps: SignalTPs;

  confidence: number; // 0..100
  riskReward: number; // > 0

  reasoning?: string;
  createdAt?: Date;
};

export type Signal = Required<Omit<SignalInput, "createdAt">> & {
  createdAt: Date;
};
