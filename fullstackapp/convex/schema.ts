import { defineSchema, defineTable, s } from 'convex/schema'

export default defineSchema({
  users : defineTable({
    wallet: s.string(),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    shippingAddress: s.optional(s.string()),
    history:  s.optional(s.array(s.string())),
    email: s.optional(s.string()),
  })
}
//, {strict: false}
)
