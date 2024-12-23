import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { customers } from '@/db/schema'

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: z => z.min(1, 'First name is required'),
  lastName: z => z.min(1, 'Last name is required'),
  address1: z => z.min(1, 'Address is required'),
  city: z => z.min(1, 'City is required'),
  state: z => z.length(2, 'State must be exactly 2 characters'),
  email: z => z.email('Invalid email address'),
  zip: z => z.regex(/^\d{5}(-\d{4})?$/, 'Invalid Zip code. Use 5 digits'),
  phone: z => z.regex(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format. Use XXX-XXX-XXXX'),
})

export const selectCustomerSchema = createSelectSchema(customers)
