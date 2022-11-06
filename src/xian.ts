import {
  RequestMade as RequestMadeEvent,
  ResponseReceived as ResponseReceivedEvent
} from "../generated/Xian/Xian"
import { RequestMade, ResponseReceived } from "../generated/schema"

export function handleRequestMade(event: RequestMadeEvent): void {
  let entity = new RequestMade(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.location_address = event.params.location_address
  entity.save()
}

export function handleResponseReceived(event: ResponseReceivedEvent): void {
  let entity = new ResponseReceived(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.save()
}
