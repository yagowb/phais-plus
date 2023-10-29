import { useState } from "react"
import { Link } from "react-router-dom";


import { MenuIcon } from 'lucide-react'

function NavbarMobile(){
  const [menuIsActive, setMenuIsActive] = useState(false)

  return (
    <nav className='relative flex justify-between items-center sm:hidden'>
      <button onClick={() => {setMenuIsActive(!menuIsActive)}} className='hover:bg-bg-layer flex gap-1 items-center p-1 rounded cursor-pointer'>
        <MenuIcon size={32} color='rgb(229, 231, 235)' />
        <span className='text-2xl font-medium text-gray-200'>PHAIS+</span>
      </button >
      
      <img
        src="https://ui-avatars.com/api/?name=Beatriz+Vidal&background=B0E2D5&color=2E875C&bold=true"
        alt="Perfil"
        className="w-9 h-9 rounded-full bg-green-light"
      />

      {!menuIsActive || 
        <ul className='absolute top-11 left-1 z-20 bg-bg-layer px-3 w-10/12 sm:w-52 py-3 rounded shadow space-y-1'>
          <NavbarMobileItem text='Home' path='/home' />
          <NavbarMobileItem text='Solicitações' path='/solicitacoes' />
          <NavbarMobileItem text='Medicamentos' path='/medicamentos' />
        </ul>
      }
    </nav>
  )
}

function NavbarMobileItem({text, path}){
  return (
    <li className='hover:bg-bg-layer-hover w-full px-4 py-2 rounded cursor-pointer'>
      <Link to={path} > {text} </Link>
    </li>
  )
}

export default NavbarMobile