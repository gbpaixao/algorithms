import { mapResources } from "./index";

test("Map resources", () => {
  const resources = [
    {
      id: "1",
      url: "https://example.com/a",
    },
    {
      id: "2",
      url: "https://example.com/b",
    },
    {
      id: "3",
      url: "https://example.com/c",
    },
    {
      id: "4",
      url: "https://example.com/d",
    },
  ];
  
  const data = [
    {
      a: "1",
      b: "resource:1",
    },
    {
      a: "2",
      b: {
        c: "resource:2",
        d: [
          {
            e: "resource:3",
          },
        ],
        f: ["resource:4", "resource:1"],
      },
    },
  ];
  
  const output = [
    {
      "a": "1",
      "b": "https://example.com/a"
    },
    {
      "a": "2",
      "b": {
        "c": "https://example.com/b",
        "d": [
          {
            "e": "https://example.com/c"
          }
        ],
        "f": [
          "https://example.com/d",
          "https://example.com/a"
        ]
      }
    }
  ]
  const response = mapResources(resources, data)
  expect(response).toEqual(output)
})