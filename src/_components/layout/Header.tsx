import {Link} from "react-router-dom";
import LocaleSwitcher from "@/_i18n/LocaleSwitcher.tsx";
// import ThemeSwitcher from "@/_themes/ThemeSwitcher.tsx";

const Header = () => {

  return (
    <header>
      <div className='container flex items-center justify-between gap-16 h-60'>
        <Link className='hover:text-primary-500' to='/'>
          Catibor
        </Link>
        {/*<ThemeSwitcher />*/}
        <LocaleSwitcher />
      </div>
    </header>
  )
}

export default Header