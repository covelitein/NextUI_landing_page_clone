import React from 'react'
import { cn } from '@/lib/utils'

const Container = ({ children, className } : any) => {
  return (
    <div className={cn('max-w-7xl mx-auto sm:px-7 px-5', className)}>
      {children}
    </div>
  )
}

export default Container