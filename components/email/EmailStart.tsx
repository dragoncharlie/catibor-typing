type EmailStartProps = {
	onStart: () => void
}

const EmailStart = ({ onStart }: EmailStartProps) => (
	<div className='max-w-[320px] m-auto p-16 flex flex-col gap-8'>
		<p>Hello!</p>
		<p>
			My&nbsp;name is&nbsp;Catibor, I&nbsp;am CEO of&nbsp;a&nbsp;small
			IT-company. I have to&nbsp;sent a&nbsp;lot of&nbsp;
			<span className='whitespace-nowrap'>e-mails</span> to&nbsp;one of&nbsp;my
			clients as&nbsp;fast&nbsp;as&nbsp;possible.
		</p>
		<p>Could you help me, meow?</p>
		<button className='button w-full mt-24' onClick={onStart}>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			Let's compose
		</button>
	</div>
)

export default EmailStart
