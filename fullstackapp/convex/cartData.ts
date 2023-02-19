import { mutation, query } from './_generated/server'

export const initCart = mutation(async ({ db }, wallet: string, firstName?: string, lastName?: string, email?:string, streetAdress?: string, stateProvince?:string,country?:string, zipCode?:string, phone?:string, history?: Array<string>) => {
  console.log(db);
//   const checkouts = {wallet, firstName, lastName, email,streetAdress,stateProvince,country,zipCode,phone,history}
//   const userId = await db.insert('checkouts', checkouts);
})