import Link from 'next/link';
import Image from "next/image";

const footerLinkClassNames = 'h-full flex items-center focus:outline-primary-500 outline-offset-4 gap-4'

const Footer = () => {

  return (
    <footer className='border-t-2 z-10 bg-surface-50'>
      <div className='container flex justify-between gap-16 py-8 h-40'>
        <p className='text-12'>
          Catibor © 2021 - {new Date().getFullYear()}
        </p>

        <div className='flex gap-16 h-full'>
          <Link className={footerLinkClassNames} href='https://t.me/addstickers/Catibor' target='_blank'>
            <Image className='h-24 w-24' src='/typing-animation/sticker.png' alt='' width={64} height={64} />
            TG stickers
          </Link>
          <Link className={footerLinkClassNames} href='https://aspirity.ru/' target='_blank'>
            <Image className='h-24 w-24' src='/typing-animation/aspirity.png' alt='' width={64} height={64} />
            Aspirity
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer