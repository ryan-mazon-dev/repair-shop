import { getCustomer } from '@/lib/queries/get-customer'
import { BackButton } from '@/components/back-button'
import * as Sentry from '@sentry/nextjs'

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
            <BackButton title='Go Back' variant='default' />
          </>
        )
      }

      console.log(customer)
      // put customer form component
    } else {
      // new customer form component
    }
  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e)
      throw e
    }
  }
}
