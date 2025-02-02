export class CreateEventDto {
  name: string;
  photo?: string;

  start_date: string = new Date().toISOString().split("T")[0]; //  "2025-02-02"
  start_time: string; 

  finish_date: string; 
  finish_time: string; 

  info?: string;
  eventTypeId: number;
  human_categoryId: number;
  venueId: number;
  langId: number;

  release_date: string; 
}
