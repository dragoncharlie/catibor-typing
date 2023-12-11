import React from 'react';

const EmailWrap = ({ children }: {children: React.ReactNode}) => (
  <div className='max-w-[520px] w-full border-2 h-full bg-surface-50 flex flex-col max-h-screen relative'>
    <div className='border-b-2 w-full top-0 left-0 text-12 px-16 py-4'>
      <p><span className='text-surface-800'>To:</span> important@client.com</p>
      <p><span className='text-surface-800'>From:</span> catibor@aspirity.com</p>
    </div>
    {children}
  </div>
)

export default EmailWrap