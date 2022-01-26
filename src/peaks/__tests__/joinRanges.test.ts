import { NMRRange } from '../..';
import { joinRanges } from '../util/joinRanges';

test('with empty array', () => {
  const ranges: Array<NMRRange> = [];
  const result = joinRanges(ranges);
  expect(result).toStrictEqual([]);
});

test('with one element in array', () => {
  const ranges: Array<NMRRange> = [{ from: 0, to: 1 }];
  const result = joinRanges(ranges);
  expect(result).toStrictEqual([{ from: 0, to: 1 }]);
});

test('with two dis-joined elements in array', () => {
  const ranges: Array<NMRRange> = [
    { from: 0, to: 1 },
    { from: 2, to: 3 },
  ];

  const result = joinRanges(ranges);
  expect(result).toStrictEqual([
    { from: 0, to: 1 },
    { from: 2, to: 3 },
  ]);
});

test('with two touching elements in array', () => {
  const ranges: Array<NMRRange> = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
  ];

  const result = joinRanges(ranges);
  expect(result).toStrictEqual([
    { from: 0, to: 1 },
    { from: 1, to: 2 },
  ]);
});

test('with two overlapping element in array', () => {
  const ranges: Array<NMRRange> = [
    { from: 0, to: 1.5 },
    { from: 1.4, to: 2 },
  ];

  const result = joinRanges(ranges);
  expect(result).toStrictEqual([{ from: 0, to: 2 }]);
});

test('with two overlapping element one in another', () => {
  const ranges: Array<NMRRange> = [
    { from: 0, to: 2 },
    { from: 1.4, to: 1.5 },
  ];

  const result = joinRanges(ranges);
  expect(result).toStrictEqual([{ from: 0, to: 2 }]);
});

test('with three overlapping element one in another', () => {
  const ranges: Array<NMRRange> = [
    { from: 0, to: 2 },
    { from: 1.4, to: 1.5 },
    { from: 1.6, to: 3 },
  ];

  const result = joinRanges(ranges);
  expect(result).toStrictEqual([{ from: 0, to: 3 }]);
});

test('complex overlapping ranges', () => {
  const ranges: Array<NMRRange> = [
    { from: -2, to: -1 },
    { from: 0, to: 2 },
    { from: 1.4, to: 1.5 },
    { from: 1.6, to: 3 },
    { from: 5, to: 6 },
  ];

  const result = joinRanges(ranges);
  expect(result).toStrictEqual([
    { from: -2, to: -1 },
    { from: 0, to: 3 },
    { from: 5, to: 6 },
  ]);
});

test('with two overlapping elements & signals in array', () => {
  const ranges: Array<NMRRange> = [
    { from: -2, to: -1.5 },
    { from: -1.5, to: -1 },
    { from: 0, to: 1.5, signals: [{ delta: 1 }], integration: 1 },
    { from: 1.4, to: 2, signals: [{ delta: 2 }], integration: 2 },
  ];

  const result = joinRanges(ranges);

  expect(result).toStrictEqual([
    { from: -2, to: -1.5 },
    { from: -1.5, to: -1 },
    { from: 0, to: 2, integration: 3, signals: [{ delta: 1 }, { delta: 2 }] },
  ]);
});

test('with overlapping elements and integration to zero', () => {
  const ranges: Array<NMRRange> = [
    { from: 0, to: 1.5, integration: 0 },
    { from: 1.4, to: 2, integration: 2 },
  ];

  const result = joinRanges(ranges);

  expect(result).toStrictEqual([{ from: 0, to: 2, integration: 2 }]);
});

test('with overlapping elements and integration to undefined', () => {
  const ranges: Array<NMRRange> = [
    { from: 0, to: 1.5, integration: 3 },
    { from: 1.4, to: 2, integration: undefined },
  ];

  const result = joinRanges(ranges);

  expect(result).toStrictEqual([{ from: 0, to: 2, integration: 3 }]);
});
