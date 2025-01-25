'use client'

import { useState } from 'react'
import { Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

type QuoteDisplayProps = {
  quotes: {
    text: string
    author: string | null | undefined
  }[]
}

const QuoteDisplay = ({ quotes }: QuoteDisplayProps) => {
  const [quote, setQuote] = useState(quotes[0])

  const getAnotherQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative max-w-full sm:max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 text-primary">
          <Quote className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-18 lg:w-18 text-gray-400 dark:text-gray-600" />
        </div>
        <blockquote className="relative px-4 pt-4 md:pt-8 text-center font-serif text-xl italic leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
          &quot;{quote.text}&quot;
        </blockquote>
        <div className="mt-4 text-center text-xs font-medium text-gray-500 dark:text-gray-400">
          - {quote.author}
        </div>
      </div>
      <Button
        onClick={getAnotherQuote}
        className="mt-6 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full shadow transition-all"
      >
        Get Another Quote
      </Button>
    </div>
  )
}

export default QuoteDisplay
