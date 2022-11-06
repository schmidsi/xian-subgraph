import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { RequestMade, ResponseReceived } from "../generated/Xian/Xian"

export function createRequestMadeEvent(
  requestId: BigInt,
  location_address: string
): RequestMade {
  let requestMadeEvent = changetype<RequestMade>(newMockEvent())

  requestMadeEvent.parameters = new Array()

  requestMadeEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestMadeEvent.parameters.push(
    new ethereum.EventParam(
      "location_address",
      ethereum.Value.fromString(location_address)
    )
  )

  return requestMadeEvent
}

export function createResponseReceivedEvent(
  requestId: BigInt
): ResponseReceived {
  let responseReceivedEvent = changetype<ResponseReceived>(newMockEvent())

  responseReceivedEvent.parameters = new Array()

  responseReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return responseReceivedEvent
}
