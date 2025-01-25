import type { NextPage } from 'next'

import QuoteDisplay from '@/components/quote-display'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Quote } from '@/payload-types'

const transformData = (data: { docs: Quote[] }) => {
  return data.docs.map((doc) => ({
    text: doc.text,
    author: doc.author,
  }))
}

const Page: NextPage = async () => {
  const payload = await getPayload({ config })
  const data = await payload.find({
    collection: 'quotes',
  })
  const quotes = transformData(data)

  return <QuoteDisplay quotes={quotes} />
}

export default Page
