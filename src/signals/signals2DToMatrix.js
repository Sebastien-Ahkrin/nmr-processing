// import { determineRealTop } from './peaks/util/determineRealTop';

// let data = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 10],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// let minX = 0;
// let minY = 0;
// let maxX = data[0].length - 1;
// let maxY = data.length - 1;

// let flatten = new Array(data.length * data[0].length);
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data[0].length; j++) {
//     flatten[j + i * data[0].length] = data[i][j];
//   }
// }
// let peaks = [{y: 3, x: 6, z: 3}];

// let newPeaks = determineRealTop({z: flatten, minX, maxX, minY, maxY}, peaks, data[0].length);

// console.log(newPeaks);

import { writeFileSync } from 'fs';



import { SpectrumGenerator } from './SpectrumGenerator';

import { xyzAutoPeaksPicking } from '../index';



export function signals2DToMatrix(signals, options = {}) {
  const { width = {x: 0.01, y: 0.01}, shape = {
      kind: 'gaussian2D',
      options: {
          
      }
  } } = options;
  
}
let minX = 0;
let minY = 0;
let maxX = 10;
let maxY = 10;

let spectrumGenerator = new SpectrumGenerator({
  fromX: minX,
  toX: maxX,
  nbPointsX: 512,
  fromY: minY,
  toY: maxY,
  nbPointsY: 512,
});

let peaks = [
  { x: 3, y: 5, z: 5, width: 1 },
  { x: 3, y: 3, z: -3, width: 1 },
  // { x: 8, y: 2, z: 3, width: 1 },
];

for (let peak of peaks) {
  spectrumGenerator.addPeak(peak);
}

