export interface NMRPeak1D {
  kind?: string;
  x: number;
  y: number;
  shape: {
    width: number;
    noiseLevel?: number;
    soft?: boolean;
    kind?: string;
  };
}
