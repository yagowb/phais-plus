import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import Input from '../../components/Input'

import { Link } from "react-router-dom";

import LogoLarge from '/logo-large.svg'
import LogoHorizontal from '/logo-horizontal-green.svg'

function Register(){
  return (
    <main className="relative flex flex-row-reverse flex-wrap lg:h-screen lg:items-center">
      <section className="w-full h-full bg-bg-main text-white-200 px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-lg text-center">
          <img src={LogoHorizontal} alt="" className='block mx-auto mb-6 sm:hidden' />
          <h1 className="text-xl font-bold sm:text-2xl">Quer utilizar nosso sistema?</h1>

          <p className="mt-2 text-gray-500 text-lg">
            Entre em contato conosco!
          </p>
        </div>

        <form action="" className="flex flex-col items-center mx-auto mb-0 mt-4 max-w-md gap-y-4">
          <Input label="CNPJ" type="text" placeholder="Insira o CNPJ" />
          <Input label="E-mail" type="email" placeholder="Insira o endereço de e-mail" />
          <Input label="Telefone" type="number" placeholder="Insira o número de telefone" />
          <Input label="Como devemos chamá-lo?" type="text" placeholder="Insira o nome do estabelecimento" />

          <div className="flex items-center justify-center">
            <Link to="analise" className='inline-flex items-center justify-center gap-2 rounded-lg bg-green-dark px-14 py-3 mt-2 text-sm font-medium text-white'>
              <UserPlusIcon className='w-6 h-6' />
              SOLICITAR
            </Link>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-6 items-center justify-center h-full w-full bg-bg-layer text-white-200 px-4 py-12 sm:h-96 sm:px-6 sm:py-16 lg:h-full lg:w-1/2 lg:px-8 lg:py-24">
        <img src={LogoLarge} alt="" />

        <div className='flex flex-col gap-2'>
          <p className='font-medium'>Se você já possui uma conta:</p>
          <Link to="login" className='flex items-center justify-center gap-3 rounded-lg font-medium bg-bg-main px-5 py-3 text-white'>
            <ArrowRightOnRectangleIcon className="h-6 w-6 text-white-200" />
            ACESSAR
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Register