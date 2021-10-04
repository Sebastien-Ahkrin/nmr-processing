import { getDatabase } from '../getDatabase';

test('getDatabase', async () => {
  const database = await getDatabase();

  expect(database).toHaveLength(2);
  expect(database[0].ranges).toMatchInlineSnapshot(`
    Array [
      Object {
        "from": 1.2,
        "integration": 6,
        "signals": Array [
          Object {
            "delta": 1.2,
            "js": Array [
              Object {
                "coupling": 7,
                "multiplicity": "t",
              },
            ],
            "multiplicity": "t",
          },
        ],
        "to": 1.2,
      },
      Object {
        "from": 1.5,
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
        "to": 1.5,
      },
    ]
  `);
}, 30000);
