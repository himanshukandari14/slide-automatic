import React, { Children } from 'react'
import { Spinner } from './Spinner'
import { cn } from '@/lib/utils'

type Props = {
    state:boolean
    className: string
    children: React.ReactNode
    color?:string
}

const Loader = ({children, state, className, color}: Props) => {
  return state ? (<div className={cn(className)}>
    <Spinner color={color} />
  </div>)
  : (
    Children
  )
}
export default Loader