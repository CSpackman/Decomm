import { mutation, query } from './_generated/server'

export const initUser = mutation(async ({ db }, wallet: string, firstName?: string, lastName?: string, email?:string, streetAdress?: string, stateProvince?:string,country?:string, zipCode?:string, phone?:string, history?: Array<string>) => {
  const user = {wallet, firstName, lastName, email,streetAdress,stateProvince,country,zipCode,phone,history}
  const userId = await db.insert('users', user);
})

export const getFromWallet = query(async ({ db }, wallet: string) => {
  const user = db.query("users").filter(q => q.eq(wallet, q.field('wallet'))).first();
  if(user){
    return user;
  }
})

export const editUser = mutation(async ({ db }, wallet: string,  firstName?: string, lastName?: string, shippingAddress?: string, email?: string) => {
  const user = await db.query("users").filter(q => q.eq(wallet, q.field('wallet'))).first();
  if(user){
    if(firstName){
      user.firstName = firstName;
      await db.replace(user._id, user);
      console.log("replaced firstName " + user.firstName)
    }
    if(lastName){
      user.lastName = lastName;
      await db.replace(user._id, user);
      console.log("replaced lastName " + user.lastName)
    }
    // if(shippingAddress){
    //   user.shippingAddress = shippingAddress;
    //   await db.replace(user._id, user);
    //   console.log("replaced shipping address " + user.shippingAddress)
    // }
    if(email){
      user.email = email;
      await db.replace(user._id, user);
      console.log("replaced email " + user.email)
    }
    }
  }
)


export default initUser;
