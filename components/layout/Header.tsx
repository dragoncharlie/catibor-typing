import Link from 'next/link'

const Header = () => {

  return (
    <header className='border-b-2'>
      <div className='container flex items-center justify-between gap-16 h-40'>
        <Link className='hover:text-primary-500' href='/'>
          Catibor
        </Link>

        <div>
          <Link className='hover:text-primary-500' href='/statistics'>
            My stats
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header