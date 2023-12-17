import React from "react";

type TooltipProps = {
  children: React.ReactNode
  text: string
}
const Tooltip = ({ children, text }: TooltipProps) => {

  return (
    <span className='group relative'>
      <span className='hover:text-primary cursor-help'>
        {children}
      </span>
      <span
        className='absolute text-center -translate-y-full left-1/2 -translate-x-1/2 -top-12 px-8 py-4 opacity-0 pointer-events-none group-hover:opacity-100 my-4 text-surface-50 bg-surface-800 text-12 leading-120 font-[400]'
      >
        {text}
        <span className='absolute h-8 w-8 bg-surface-800 block rotate-45 left-1/2 -translate-x-1/2' />
      </span>
    </span>
  )
}

export default Tooltip