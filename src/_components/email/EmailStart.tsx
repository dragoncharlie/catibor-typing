const EmailStart = ({onStart}: {onStart: () => void}) => (
  <div className='my-auto p-16'>
    <p>Hello! My name is Catibor and I have to type an <span className='whitespace-nowrap'>e-mail</span> to one of my clients as fast as possible.</p>
    <p>Could you help me, meow?</p>
    <div className='flex justify-center mt-24'>
      <button
        className='min-w-[180px] border-2 px-16 py-8 rounded-[20%_3%_38%_34%_/_4%_32%_5%_3%]'
        onClick={onStart}
      >
        Let's compose
      </button>
    </div>
  </div>
)

export default EmailStart
