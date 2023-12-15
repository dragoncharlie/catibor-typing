import React from "react";
import Window from "@/components/Window";
import Link from "next/link";

type HelpWindowProps = {
  onFocus: () => void
  onClose: () => void
  layer: string
}

const HelpWindow = ({onFocus, onClose, layer}: HelpWindowProps) => {
  return (
    <Window
      className={`absolute left-128 bottom-16 max-w-[520px] h-1/2 w-2/3 lg:w-1/2 ${layer}`}
      title='help.txt'
      onClose={onClose}
      onFocus={onFocus}>
      <div className='p-16 min-w-[120px] overflow-auto'>
        <p className='mb-8'>What is it?</p>
        <p className='mb-20 text-surface-800'>
          It is just a mini-game to practice your typing skills.
        </p>
        <p className='mb-8'>Who is Catibor?</p>
        <p className='mb-20 text-surface-800'>
          Catibor is a CEO of a small outsource IT-company.
          He has a lot of tasks and one of them is writing emails to the {'company\'s'} clients for various reasons.
          So he would like to get your help&nbsp;;)
        </p>
        <p className='mb-8'>I found a bug!</p>
        <p className='mb-20 text-surface-800'>
          If you found any kind of bug you can report it to <Link className='text-surface-900 underline' href='https://github.com/dragoncharlie/catibor-typing/issues' target='_blank'>github issues section</Link> and we will try to fix it a soon as possible.
        </p>
        <p className='mb-8'>I want to help!</p>
        <p className='mb-20 text-surface-800'>
          If you have any suggestion, read a previous question.
          If you want to help directly, there is <Link className='text-surface-900 underline' href='https://github.com/dragoncharlie/catibor-typing' target='_blank'>the source code</Link>&nbsp;;)
        </p>
      </div>
    </Window>
  )
}

export default HelpWindow
