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
    <div className='flex flex-col my-auto p-16'>
      <div className='flex flex-col gap-8 mx-auto min-w-[180px]'>
        <p>WPM: {wpm}</p>
        <p>CPM: {cpm}</p>
        <p>Errors: {errors}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Time: {time}s</p>
      </div>
      <div className='flex justify-center mt-24'>
        <button
          className='button'
          onClick={onRestart}
        >
          Compose another letter
        </button>
      </div>
    </div>
  )
}

export default EmailFinish