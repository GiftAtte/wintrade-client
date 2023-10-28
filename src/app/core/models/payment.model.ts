import { Product } from "./product.model";

export interface Payment{
    id:number;
    product_id:number;
    amount:number
    status:string
    transaction_id:string;
    currency:string;
    payment_type:string;
    product?:any;
    user?:any;
    created_at?:Date
}