import { getCustomer } from '@/lib/queries/get-customer'

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  try {
    const { customerId } = await searchParams

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId))

      if (!customer) {
        return (
          <>
            <h2 className='mb-2 text-2xl'>
              Customer ID #{customerId} not found.
            </h2>
          </>
        )
      }

      // put customer form component
    } else {
      // new customer form component
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
  }
}
