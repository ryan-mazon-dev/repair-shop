import { getCustomer } from '@/lib/queries/get-customer'
import { getTicket } from '@/lib/queries/get-ticket'
import { BackButton } from '@/components/back-button'
import * as Sentry from '@sentry/nextjs'

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  try {
    const { customerId, ticketId } = await searchParams

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">Ticket ID or Customer ID required to load ticket form.</h2>
          <BackButton title='Go Back' variant='default' />
        </>
      )
    }

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId))

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found.</h2>
            <BackButton title='Go Back' variant='default' />
          </>
        )
      }

      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} is not active.</h2>
            <BackButton title='Go Back' variant='default' />
          </>
        )
      }

      console.log(customer)
    }

    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId))

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found.</h2>
            <BackButton title='Go Back' variant='default' />
          </>
        )
      }

      const customer = await getCustomer(ticket.customerId)

      console.log('ticket: ', ticket)
      console.log('customer: ', customer)
    }
  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e)
      throw e
    }
  }
}
