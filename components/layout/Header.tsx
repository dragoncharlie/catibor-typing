import Link from 'next/link'

const headerLinkClassNames = 'h-full flex items-center focus:outline-primary-500 outline-offset-4 gap-4'

const Header = () => {

  return (
    <header className='border-b-2 fixed top-0 right-0 left-0 z-20 bg-surface-50'>
      <div className='container flex items-center justify-between gap-16 h-40 py-8'>
        <Link className={headerLinkClassNames} href='/'>
          Catibor
        </Link>

        <div className='flex gap-16 h-full'>
          <Link className={headerLinkClassNames} href='https://github.com/dragoncharlie/catibor-typing/issues' target='_blank'>
            Bug!
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header