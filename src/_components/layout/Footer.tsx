import {Link} from "react-router-dom";

const Footer = () => {

  return (
    <footer className='py-32'>
      <div className='container flex justify-between gap-16'>
        <Link className='hover:text-primary-500' to='/'>
          Catibor
        </Link>

        <div className='flex flex-col gap-16'>
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