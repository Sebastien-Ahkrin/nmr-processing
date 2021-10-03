import { NMRSignal2D } from "./NMRSignal2D";

interface fromTo { from: number, to: number }

export interface Zone {
  x: fromTo,
  y: fromTo,
  signals: NMRSignal2D
}