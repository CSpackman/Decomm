import { defineSchema, defineTable, s } from 'convex/schema'

export default defineSchema({
  users : defineTable({
    wallet: s.string(),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    streetAdress: s.optional(s.string()),
    stateProvince: s.optional(s.string()),
    country:s.optional(s.string()),
    zipCode:s.optional(s.string()),
    history:  s.optional(s.array(s.string())),
    email: s.optional(s.string()),
    optIn: s.optional(s.boolean()),
  }),
  checkouts: defineTable({
    merchantAddress: s.optional(s.string()),
    userAddress: s.optional(s.string()),
    TotalCartValue:  s.optional(s.number()),
    Items: s.optional(s.array(s.any())),
  }),
  Items: defineTable({
    ImgUrl: s.optional(s.string()),
    Price: s.optional(s.number()),
    Quanity: s.optional(s.number()),
    Title: s.optional(s.string())
  })
}
//, {strict: false}
)
