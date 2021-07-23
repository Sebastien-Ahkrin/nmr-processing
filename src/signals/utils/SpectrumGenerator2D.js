import { Matrix } from 'ml-matrix';
import { getShapeGenerator } from 'ml-peak-shape-generator';

export class SpectrumGenerator2D {
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
    options = Object.assign(
      {},
      {
        fromX: 0,
        toX: 1000,
        nbPointsX: 10001,
        fromY: 0,
        toY: 1000,
        nbPointsY: 10001,
        peakWidthFct: () => 5,
        shape: {
          kind: 'gaussian2D',
        },
      },
      options,
    );

    this.fromX = options.fromX;
    this.toX = options.toX;
    this.nbPointsX = options.nbPointsX;
    this.fromY = options.fromY;
    this.toY = options.toY;
    this.nbPointsY = options.nbPointsY;
    this.intervalX = (this.toX - this.fromX) / (this.nbPointsX - 1);
    this.intervalY = (this.toY - this.fromY) / (this.nbPointsY - 1);
    this.peakWidthFct = options.peakWidthFct;
    this.maxPeakHeight = Number.MIN_SAFE_INTEGER;

    let shapeGenerator = getShapeGenerator(options.shape);
    this.shape = shapeGenerator;

    assertNumber(this.fromX, 'fromX');
    assertNumber(this.toX, 'toX');
    assertInteger(this.nbPointsX, 'nbPointsX');
    assertNumber(this.fromY, 'fromY');
    assertNumber(this.toY, 'toY');
    assertInteger(this.nbPointsY, 'nbPointsY');

    if (this.toX <= this.fromX) {
      throw new RangeError('to option must be larger than from');
    }

    if (this.toY <= this.fromY) {
      throw new RangeError('to option must be larger than from');
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

    if (intensity > this.maxPeakHeight) this.maxPeakHeight = intensity;

    let {
      width = peakWidth === undefined
        ? this.peakWidthFct(xPosition)
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

    let factor =
      options.factor === undefined
        ? shapeGenerator.getFactor()
        : options.factor;

    const firstValueX = xPosition - (widthLeft / 2) * factor;
    const lastValueX = xPosition + (widthRight / 2) * factor;

    const firstPointX = Math.max(
      0,
      Math.floor((firstValueX - this.fromX) / this.intervalX),
    );
    const lastPointX = Math.min(
      this.nbPointsX - 1,
      Math.ceil((lastValueX - this.fromX) / this.intervalX),
    );
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
