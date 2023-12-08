const Footer = () => {

  return (
    <footer className='py-8 border-t-2 h-40'>
      <div className='container flex justify-between gap-16'>
        <p className='text-12'>
          Catibor © 2021 - {new Date().getFullYear()}
        </p>

        <div className='flex gap-16'>
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