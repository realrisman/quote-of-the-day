import { Quote } from 'lucide-react'

const QuoteDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="relative max-w-full sm:max-w-2xl">
        <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 text-primary">
          <Quote className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16" />
        </div>
        <blockquote className="relative px-4 pt-12 text-center font-serif text-xl italic leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl">
          &quot;Laughter is the best medicine, but the Joke Tax is the worst prescription.&quot;
        </blockquote>
        <div className="mt-4 text-center text-xs font-medium text-muted-foreground sm:text-sm">
          - Jokester, Court Jester
        </div>
      </div>
    </div>
  )
}

export default QuoteDisplay
