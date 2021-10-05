import { resurrectRange } from '../resurrectRange';

describe('resurrectRange', () => {
  it('1 (t, 3H, J=7.0Hz)', () => {
    const range = resurrectRange('1 (t, 3H, J=7.0Hz)');
    expect(range).toMatchInlineSnapshot(`
      Object {
        "from": 0.94125,
        "integration": 3,
        "signals": Array [
          Object {
            "delta": 1,
            "js": Array [
              Object {
                "coupling": 7,
                "multiplicity": "t",
              },
            ],
            "multiplicity": "t",
          },
        ],
        "to": 1.05875,
      }
    `);
  });
  it('1.5 (hept,  2H, J=7.0Hz)', () => {
    const range = resurrectRange('1.5 (hept,  2H, J=7.0Hz)');
    expect(range).toMatchInlineSnapshot(`
      Object {
        "from": 1.44125,
        "integration": 2,
        "signals": Array [
          Object {
            "delta": 1.5,
            "js": Array [
              Object {
                "coupling": 7,
                "multiplicity": "hept",
              },
            ],
            "multiplicity": "hept",
          },
        ],
        "to": 1.55875,
      }
    `);
  });
});
