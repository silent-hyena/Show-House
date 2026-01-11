'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  
  useEffect(() => {
    // This will show up in your Vercel logs and Browser console
    console.error("Caught by error.tsx:", error)
  }, [error])

  return (
    <div className="text-center p-10">
      <p>Could not load movies.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}