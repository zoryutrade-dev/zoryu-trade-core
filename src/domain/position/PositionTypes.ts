import type { TradeDirection } from "../signal/SignalTypes.js";
import type { PositionStatus } from "./PositionState.js";

export type PositionInput = {
  positionId: string;
  signalId: string;

  symbol: string;
  direction: TradeDirection;

  entryPrice: number;
  currentPrice: number;

  tp1: number;
  tp2: number;
  tp3: number;
  stopLoss: number;

  confidence: number;

  openedAt?: Date;
};

export type Position = Required<Omit<PositionInput, "openedAt">> & {
  openedAt: Date;
  status: PositionStatus;
  pnlPercent: number;
  closedAt?: Date;
  closeReason?: string;
};
