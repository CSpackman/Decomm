import { mutation, query } from './_generated/server'

export const createCartInstance = mutation(async ({ db }, merchantAddress:string, TotalCartValue:number, Items:Array<any>, UserId:number) => {
  console.log(db);
  const checkout = {merchantAddress, UserId, TotalCartValue, Items}
  const checkoutId = await db.insert('checkouts', checkout);
})

export const createItemsInstance = mutation(async ({ db }, ImgUrl:string, Price:number, Quanity:number, Title:string) => {
  const items = {ImgUrl, Price, Quanity, Title}
  const itemsId = await db.insert('Items', items);
});

