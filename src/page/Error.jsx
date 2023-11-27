import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <div class="loader flex flex-col items-center justify-center h-fit fixed mt-96 bg-background">
        <div data-glitch="Loading..." class="glitch text-4xl">404 bad gateway...</div>
        <div className="back">
          <Link to="/">
          <h1 className='text-text text-2xl'>back !!</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
