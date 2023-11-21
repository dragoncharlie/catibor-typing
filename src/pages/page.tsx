import CatiborAnimation from "@/_components/catibor-animation/CatiborAnimation.tsx";
import {useState} from "react";

export default function Home() {
	const [isActive, setIsActive] = useState(false)

	const onFocus = () => setIsActive(true)
	const onBlur = () => setIsActive(false)

	return (
		<div className='flex flex-col grow'>
			<h1>Catibor</h1>
			<div className='flex relative grow'>
				<div className='w-1/2'>
					<input className='border' autoFocus onFocus={onFocus} onBlur={onBlur}/>
				</div>
				<div className='w-1/2 flex flex-col'>
					<CatiborAnimation className='absolute bottom-0 right-0 w-4/5' active={isActive} />
				</div>
			</div>
		</div>
	)
}
