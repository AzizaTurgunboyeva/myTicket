export enum TicketType {
  ONLINE = "online",
  OFFLINE = "offline",
  DELIVERING="deliver"
}

export class CreateTicketDto {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  ticket_type: TicketType; 
}
