import { Matrix } from 'ml-matrix';
import { getShapeGenerator } from 'ml-peak-shape-generator';

export class SpectrumGenerator {
  /**
   *
   * @param {object} [options={}]
   * @param {number} [options.from=0]
   * @param {number} [options.to=0]
   * @param {function} [options.nbPoints=10001]
   * @param {number} [options.factor] default value depends of the shape in order to cover 99.99% of the surface
   * @param {object} [options.shape={kind:'gaussian'}]
   * @param {string} [options.shape.kind] kind of shape, gaussian, lorentzian or pseudovoigt
   * @param {object} [options.shape.options] options for the shape (like `mu` for pseudovoigt)
   */
  constructor(options = {}) {
    const {
      from = { x: 0, y: 0 },
      to = { x: 10, y: 10 },
      nbPoints = { x: 512, y: 512 },
      peakWidthFct = () => 5,
      shape = {
        kind: 'gaussian2D',
      },
    } = options;

    for (const axis of ['x', 'y']) {
      assertNumber(from[axis], `from-${axis}`);
      assertNumber(to[axis], `to-${axis}`);
      assertInteger(nbPoints[axis], `nbPoints-${axis}`);
    }

    this.from = from;
    this.to = to;
    this.nbPoints = nbPoints;
    this.interval = calculeIntervals(from, to, nbPoints);

    this.peakWidthFct = peakWidthFct;
    this.maxPeakHeight = Number.MIN_SAFE_INTEGER;

    let shapeGenerator = getShapeGenerator(shape);
    this.shape = shapeGenerator;

    for (const axis of ['x', 'y']) {
      if (this.to[axis] <= this.from[axis]) {
        throw new RangeError('to option must be larger than from');
      }
    }

    if (typeof this.peakWidthFct !== 'function') {
      throw new TypeError('peakWidthFct option must be a function');
    }

    this.reset();
  }

  addPeak(peak, options = {}) {
    if (
      typeof peak !== 'object' ||
      (peak.length !== 2 &&
        peak.length !== 3 &&
        (peak.x === undefined || peak.y === undefined))
    ) {
      throw new Error(
        'peak must be an array with two (or three) values or an object with {x,y,width?}',
      );
    }

    let xPosition;
    let yPosition;
    let intensity;
    let peakWidth;
    let peakOptions;
    if (Array.isArray(peak)) {
      [xPosition, intensity, peakWidth, peakOptions] = peak;
    } else {
      xPosition = peak.x;
      yPosition = peak.y;
      intensity = peak.z;
      peakWidth = peak.width;
      peakOptions = peak.options;
    }

    const position = { x: xPosition, y: yPosition };

    if (intensity > this.maxPeakHeight) this.maxPeakHeight = intensity;

    let {
      width = peakWidth === undefined
        ? this.peakWidthFct(xPosition, yPosition)
        : peakWidth,
      widthLeft,
      widthRight,
      shape: shapeOptions,
    } = options;

    if (peakOptions) {
      Object.assign(shapeOptions || {}, peakOptions || {});
    }

    let shapeGenerator = shapeOptions
      ? getShapeGenerator(shapeOptions)
      : this.shape;

    if (!widthLeft) widthLeft = width;
    if (!widthRight) widthRight = width;

    if (typeof widthLeft !== 'object')
      widthLeft = { x: widthLeft, y: widthLeft };
    if (typeof widthRight !== 'object')
      widthRight = { x: widthRight, y: widthRight };

    let factor =
      options.factor === undefined
        ? shapeGenerator.getFactor()
        : options.factor;

    const firstPoint = {};
    const lastPoint = {};
    const middlePoint = {};
    for (const axis of ['x', 'y']) {
      const first = position[axis] - (widthLeft[axis] / 2) * factor;
      const last = position[axis] + (widthLeft[axis] / 2) * factor;
      firstPoint[axis] = Math.max(
        0,
        Math.floor((first - this.from[axis]) / this.interval[axis]),
      );
      lastPoint[axis] = Math.min(
        this.nbPoints[axis] - 1,
        Math.ceil((last - this.from[axis]) / this.interval[axis]),
      );
      const middlePointX = Math.round((position[axis] - this.from[axis]) / this.interval[axis]);
    }


    const middlePointX = Math.round((xPosition - this.fromX) / this.intervalX);

    const firstValueY = yPosition - (widthLeft / 2) * factor;
    const lastValueY = yPosition + (widthRight / 2) * factor;

    const firstPointY = Math.max(
      0,
      Math.floor((firstValueY - this.fromY) / this.intervalY),
    );
    const lastPointY = Math.min(
      this.nbPointsY - 1,
      Math.ceil((lastValueY - this.fromY) / this.intervalY),
    );
    const middlePointY = Math.round((yPosition - this.fromY) / this.intervalY);
    // PEAK SHAPE MAY BE ASYMMETRC (widthLeft and widthRight) !
    // we calculate the left part of the shape

    shapeGenerator.setFWHM(widthLeft);
    for (let xIndex = firstPointX; xIndex < lastPointX; xIndex++) {
      for (let yIndex = firstPointY; yIndex < lastPointY; yIndex++) {
        this.data.z[xIndex][yIndex] +=
          intensity *
          shapeGenerator.fct(
            this.data.x[xIndex] - xPosition,
            this.data.y[yIndex] - yPosition,
          );
      }
    }

    return this;
  }

  reset() {
    const spectrum = (this.data = {
      x: new Float64Array(this.nbPointsX),
      y: new Float64Array(this.nbPointsY),
      z: new Matrix(this.nbPointsX, this.nbPointsY).to2DArray(),
    });

    for (let i = 0; i < this.nbPointsX; i++) {
      spectrum.x[i] = this.fromX + i * this.intervalX;
    }

    for (let i = 0; i < this.nbPointsY; i++) {
      spectrum.y[i] = this.fromY + i * this.intervalY;
    }
    return this;
  }
}

function calculeIntervals(from, to, nbPoints) {
  const intervals = {};
  for (const axis in from) {
    intervals[axis] = (to[axis] - from[axis]) / (nbPoints[axis] - 1);
  }
  return intervals;
}

function assertInteger(value, name) {
  if (!Number.isInteger(value)) {
    throw new TypeError(`${name} option must be an integer`);
  }
}

function assertNumber(value, name) {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${name} option must be a number`);
  }
}
