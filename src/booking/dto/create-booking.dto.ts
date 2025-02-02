export class CreateBookingDto {
    cartId:number
    createdAt:Date=new Date()
    finishedAt:Date
    payment_methodId:number
    delivery_methodId:number
    dicount_couponId:number
    statusId:number
}
