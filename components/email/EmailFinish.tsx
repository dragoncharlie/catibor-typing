import Tooltip from "@/components/Tooltip";

type EmailFinishProps = {
  stat: {
    accuracy: string
    time: number
    cpm: number
    wpm: number
    errors: number
  }
  onRestart: () => void
}

const EmailFinish = ({stat: {accuracy, time, cpm, wpm, errors}, onRestart}: EmailFinishProps) => {


  return (
    <div className='flex flex-col m-auto p-16 max-w-[320px] w-full'>
      <p className='mb-24 text-18 text-center'>Meooowray, it has been sent!</p>
      <div className='flex flex-col gap-8 max-w-[180px] w-full mx-auto'>
        <p>
          <span className='text-surface-800 text-14'>
            WPM<Tooltip text='Words per&nbsp;minute (5&nbsp;characters per&nbsp;word)'>?</Tooltip>:
          </span> {wpm}
        </p>
        <p>
          <span className='text-surface-800 text-14'>
            CPM<Tooltip text='Characters (symbols) per&nbsp;minute'>?</Tooltip>:
          </span> {cpm}
        </p>
        <p><span className='text-surface-800 text-14'>Errors:</span> {errors}</p>
        <p><span className='text-surface-800 text-14'>Accuracy:</span> {accuracy}%</p>
        <p><span className='text-surface-800 text-14'>Time:</span> {time}s</p>
      </div>
      <button
        className='button mt-24 w-full'
        onClick={onRestart}
      >
        Compose another letter
      </button>
    </div>
  )
}

export default EmailFinish