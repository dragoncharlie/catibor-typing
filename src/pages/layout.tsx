import {Outlet} from 'react-router-dom'
import useTheme from '@/_themes/useTheme.tsx'
import Header from "@/_components/layout/Header.tsx";
import Footer from "@/_components/layout/Footer.tsx";

function Layout() {
  useTheme()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='grow'>
        <div className='container'>
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
