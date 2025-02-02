export class CreateCartDto {
  customerId: number;
  createdAt: Date = new Date();
  finishedAt?: Date;
  statusId: number;
}
