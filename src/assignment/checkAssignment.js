import arbutinData from './__tests__/data/ethylbenzeneNewCosy.json';

const signalID = arbutinData.spectra.reduce((acc, spectrum) => {
  if (spectrum.ranges) {
    spectrum.ranges.values.forEach((range) => {
      range.signals.forEach((signal) => {
        acc.push({ delta: signal.delta, id: signal.id });
      })
    })
  } else if (spectrum.zones) {
    spectrum.zones.values.forEach((zone) => {
      zone.signals.forEach((signal) => {
        acc.push({delta: [signal.x.delta, signal.y.delta], id: signal.id});
      })
    })
  }
  return acc;
}, []);

console.log(signalID)