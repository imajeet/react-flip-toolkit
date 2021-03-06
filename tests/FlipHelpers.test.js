import { rectInViewport, shouldApplyTransform } from "../src/flipHelpers"
import { getEasingName } from "../src/FlipHelpers/tweenUpdate"

Object.defineProperty(window, "innerHeight", {
  value: 100,
  writable: true
})

Object.defineProperty(window, "innerWidth", {
  value: 100,
  writable: true
})

describe("getEasingName", () => {
  it("returns provided ease if it exists in shifty", () => {
    expect(getEasingName("easeInQuad")).toBe("easeInQuad")
  })

  it("defaults to easeOut if neither FlippedEase or FlipperEase are valid", () => {
    expect(getEasingName("fakeEase", "fakeEase2")).toBe("easeOutExpo")
  })
})

describe("rectInViewport", () => {
  it("returns true if rect is in viewport", () => {
    expect(rectInViewport({ top: 1, bottom: 99, left: 1, right: 99 })).toBe(
      true
    )
  })

  it("if rect isnt in viewport, returns false", () => {
    expect(rectInViewport({ top: 100, bottom: 101, left: 1, right: 99 })).toBe(
      false
    )
    expect(rectInViewport({ top: -1, bottom: 0, left: 1, right: 99 })).toBe(
      false
    )
    expect(rectInViewport({ top: 1, bottom: 99, left: 100, right: 101 })).toBe(
      false
    )
    expect(rectInViewport({ top: 1, bottom: 99, left: -1, right: 0 })).toBe(
      false
    )
  })
})

describe("shouldApplyTransform", () => {
  it("returns true if either id passes the flipComponentIdFilter", () => {
    expect(shouldApplyTransform(["foo", "bar"], "foo", "whooaa")).toBe(true)
    expect(shouldApplyTransform(["foo", "bar"], "huh", "bar")).toBe(true)
    expect(shouldApplyTransform("bar", "huh", "bar")).toBe(true)
  })

  it("returns false if neither id passes the flipComponentIdFilter", () => {
    expect(shouldApplyTransform(["foo", "bar"], "foot", "whooaa")).toBe(false)
    expect(shouldApplyTransform("bar", "huh", "bart")).toBe(false)
  })
})

it("if rect isnt in viewport, returns false", () => {
  expect(rectInViewport({ top: 100, bottom: 101, left: 1, right: 99 })).toBe(
    false
  )
  expect(rectInViewport({ top: -1, bottom: 0, left: 1, right: 99 })).toBe(false)
  expect(rectInViewport({ top: 1, bottom: 99, left: 100, right: 101 })).toBe(
    false
  )
  expect(rectInViewport({ top: 1, bottom: 99, left: -1, right: 0 })).toBe(false)
})
