import type { NMRSignal2D } from "./NMRSignal2D";

interface fromTo { from: number, to: number }

export interface NMRZone {
  x: fromTo,
  y: fromTo,
  id?: string;
  signals: NMRSignal2D
}