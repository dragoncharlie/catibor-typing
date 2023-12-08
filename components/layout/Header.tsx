import Link from 'next/link'

const Header = () => {

  return (
    <header className='border-b-2'>
      <div className='container flex items-center justify-between gap-16 h-40'>
        <Link className='hover:text-primary-500' href='/'>
          Catibor
        </Link>

        <div className='flex gap-16'>
          <Link className='hover:text-primary-500' href='/statistics'>
            My stats
          </Link>
          <Link href='https://github.com/dragoncharlie/catibor-typing/issues' target='_blank'>
            Bug!
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header