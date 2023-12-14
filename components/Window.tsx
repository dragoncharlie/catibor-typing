import React from "react";

type WindowProps = {
  title: React.ReactNode
  onClose: () => void
  className?: string
  onFocus: () => void
  children: React.ReactNode
}

const Window = ({children, title, onClose, onFocus, className = ''}: WindowProps) => {

  return (
    <div className={`border-2 overflow-hidden bg-surface-50 ${className}`}>
      <button
        onClick={onClose}
        className='button absolute top-[3px] right-16 w-24 h-24 min-w-0 p-0 text-16 z-10'
        type='button'
      >
        X
      </button>
      <div onClick={onFocus} className='flex flex-col h-full'>
        <div className='relative border-b-2 w-full top-0 left-0 text-12 px-16 py-4 h-32 flex items-center shrink-0'>
          <p>
            {title}
          </p>
        </div>
        {children}
      </div>
    </div>
  )

}

export default Window