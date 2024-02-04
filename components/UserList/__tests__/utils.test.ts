import {
  normalizeListItem,
  normalizeListItems,
  denormalizeListItems,
} from "../utils";

import type { TUserList } from "../types";

jest.mock("react-native-uuid", () => ({
  v4: jest.fn(() => "mock-uuid"),
}));

describe("normalizeListItem", () => {
  it("should return a normalized list item with title and id", () => {
    const result = normalizeListItem("Test Item");
    expect(result).toEqual({ title: "Test Item", id: "mock-uuid" });
  });
});

describe("normalizeListItems", () => {
  it("should return an array of normalized list items from comma-separated data", () => {
    const result = normalizeListItems("Item1,Item2,Item3");
    expect(result).toEqual([
      { title: "Item1", id: "mock-uuid" },
      { title: "Item2", id: "mock-uuid" },
      { title: "Item3", id: "mock-uuid" },
    ]);
  });

  it("should return an empty array if data is empty", () => {
    const result = normalizeListItems("");
    expect(result).toEqual([]);
  });
});

describe("denormalizeListItems", () => {
  it("should return a comma-separated string of titles from list items", () => {
    const listItems: TUserList = [
      { title: "Item1", id: "mock-uuid" },
      { title: "Item2", id: "mock-uuid" },
      { title: "Item3", id: "mock-uuid" },
    ];
    const result = denormalizeListItems(listItems);
    expect(result).toEqual("Item1,Item2,Item3");
  });

  it("should return an empty string if list is empty", () => {
    const result = denormalizeListItems([]);
    expect(result).toEqual("");
  });
});
