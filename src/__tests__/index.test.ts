import { carbonImpurities } from '..';

test('index.test', () => {
  expect(carbonImpurities).toHaveLength(516);
  expect(carbonImpurities[0]).toMatchInlineSnapshot(`
    Object {
      "names": Array [
        "acetic acid",
      ],
      "nucleus": "13C",
      "ranges": Array [
        Object {
          "from": 171.68625,
          "signals": Array [
            Object {
              "assignment": "CO",
              "delta": 171.69,
            },
          ],
          "to": 171.69375,
        },
        Object {
          "from": 20.12625,
          "signals": Array [
            Object {
              "assignment": "CH₃",
              "delta": 20.13,
            },
          ],
          "to": 20.13375,
        },
      ],
      "smiles": "CC(=O)O",
      "solvent": "THF-d₈",
    }
  `);
});
