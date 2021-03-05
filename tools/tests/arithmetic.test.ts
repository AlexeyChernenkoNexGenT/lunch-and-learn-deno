import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { add } from "./arithmetic.ts";

Deno.test("arithmetic.add", () => {
  const expectedResult = 9;
  const actualResult = add(4, 5);
  assertEquals(actualResult, expectedResult);
});
