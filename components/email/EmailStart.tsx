type EmailStartProps = {
  onStart: () => void
}

const EmailStart = ({onStart}: EmailStartProps) => (
  <div className='max-w-[320px] m-auto p-16 flex flex-col gap-8'>
    <p>Hello!</p>
    <p> My name is Catibor, I am CEO of a small IT-company. I have to sent a lot of <span className='whitespace-nowrap'>e-mails</span> to one of my clients as fast as possible.</p>
    <p>Could you help me, meow?</p>
    <div className='flex justify-center mt-24'>
      <button
        className='button w-full'
        onClick={onStart}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's compose
      </button>
    </div>
  </div>
)

export default EmailStart
