import { query } from './_generated/server'
import { Document } from './_generated/dataModel'

export default query(async ({ db }): Promise<Document<'users'>[]> => {
  return await db.query('users').collect()
})
