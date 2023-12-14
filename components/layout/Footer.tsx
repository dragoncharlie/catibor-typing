import Link from 'next/link';

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
            TG stickers
          </Link>
          <Link className={footerLinkClassNames} href='https://aspirity.ru/' target='_blank'>
            Aspirity
          </Link>
          <Link className={footerLinkClassNames} href='https://github.com/dragoncharlie/catibor-typing/issues' target='_blank'>
            Bug!
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer