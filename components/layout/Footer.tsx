import Link from 'next/link'

const Footer = () => {

  return (
    <footer className='py-8 border-t-2 h-40'>
      <div className='container flex justify-between gap-16'>
        <Link className='hover:text-primary-500' href='/'>
          Catibor
        </Link>

        <div className='flex gap-8'>
          <a href='https://t.me/addstickers/Catibor' target='_blank'>
            TG stickers
          </a>
          <a href='https://aspirity.ru/' target='_blank'>
            Aspirity
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer