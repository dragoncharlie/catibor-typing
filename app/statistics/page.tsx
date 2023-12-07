'use client'
import EmailWrap from "@/components/email/EmailWrap";
import {useEffect, useState} from "react";
import Link from "next/link";

type Stat = {
  wpm: number
  cpm: number
  accuracy: number
  date: string
}

const cellClassName = 'p-4 px-8'

const Statistics = () => {
  const [stats, setStats] = useState<Stat[]>([])

  useEffect(() => {
    const lsStats = localStorage.getItem('stats')
    if (lsStats) {
      setStats(JSON.parse(lsStats))
    }
  }, []);

  return (
    <div className='flex justify-center items-center grow'>
      <EmailWrap>
        <div className='flex flex-col my-auto p-16'>
          <p className='text-center mb-12 text-18'>Best 10 results</p>
          {stats.length ? (
            <table className='text-end'>
              <thead>
                <tr className='text-14 text-surface-800'>
                  <th className={cellClassName} />
                  <th className={cellClassName}>WPM</th>
                  <th className={cellClassName}>CPM</th>
                  <th className={cellClassName}>Accuracy</th>
                  <th  className={`${cellClassName} text-start`}>Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((record, index) => (
                  <tr key={record.date}>
                    <td className={cellClassName}>{index + 1}.</td>
                    <td className={cellClassName}>{record.wpm}</td>
                    <td className={cellClassName}>{record.cpm}</td>
                    <td className={cellClassName}>{record.accuracy}%</td>
                    <td className={`${cellClassName} text-start`}>{new Date(record.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>No recorded data yet. Let's go and write few email?</p>
            </>
          )}
          <div className='flex justify-center mt-24'>
            <Link
              className='min-w-[180px] border-2 px-16 py-8 rounded-[20%_3%_38%_34%_/_4%_32%_5%_3%]'
              href='/'
            >
              {stats.length ? 'Compose another letter' : 'GO!'}
            </Link>
          </div>
        </div>
      </EmailWrap>
    </div>
  )
}

export default Statistics