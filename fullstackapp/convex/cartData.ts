import { mutation, query } from './_generated/server'

export const createCartInstance = mutation(async ({ db }, merchantAddress:string, TotalCartValue:string, Items:Array<any>) => {
  console.log(db);
  const checkout = {merchantAddress, TotalCartValue, Items}
  const checkoutId = await db.insert('checkouts', checkout);
})

