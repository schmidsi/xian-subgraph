import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { RequestMade } from "../generated/schema"
import { RequestMade as RequestMadeEvent } from "../generated/Xian/Xian"
import { handleRequestMade } from "../src/xian"
import { createRequestMadeEvent } from "./xian-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requestId = BigInt.fromI32(234)
    let location_address = "Example string value"
    let newRequestMadeEvent = createRequestMadeEvent(
      requestId,
      location_address
    )
    handleRequestMade(newRequestMadeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("RequestMade created and stored", () => {
    assert.entityCount("RequestMade", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "RequestMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requestId",
      "234"
    )
    assert.fieldEquals(
      "RequestMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "location_address",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
