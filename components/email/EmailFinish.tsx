type EmailFinishProps = {
  accuracy: number
  time: number
  cpm: number
  wpm: number
  errors:number,
  onRestart: () => void
}

const EmailFinish = ({ accuracy, time, cpm, wpm, errors, onRestart }: EmailFinishProps) => (
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
        className='min-w-[180px] border-2 px-16 py-8 rounded-[20%_3%_38%_34%_/_4%_32%_5%_3%]'
        onClick={onRestart}
      >
        Compose another letter
      </button>
    </div>
  </div>
)

export default EmailFinish