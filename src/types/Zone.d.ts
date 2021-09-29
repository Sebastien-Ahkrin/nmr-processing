import { Signal2D } from "./signal2D";

interface fromTo { from: number, to: number }

export interface Zone {
  x: fromTo,
  y: fromTo,
  signals: Signal2D
}