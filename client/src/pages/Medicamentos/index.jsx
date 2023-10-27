import Sidebar from './../../components/Sidebar'
import Table from './../../components/Table'

import { Search } from 'lucide-react'

function Medicamentos(){
  let tableTitles = ['Código', 'Medicamento', '-', 'Receituário', 'Tipo', 'Laboratório']
  let tableValues = [['#123', 'Topison', 'Furoato de mometasona', 'Receita Comum', 'R', 'LIBBS'], ['#123', 'Topison', 'Furoato de mometasona', 'Receita Comum', 'R', 'LIBBS'], ['#123', 'Topison', 'Furoato de mometasona', 'Receita Comum', 'R', 'LIBBS'], ['#123', 'Topison', 'Furoato de mometasona', 'Receita Comum', 'R', 'LIBBS'], ['#123', 'Topison', 'Furoato de mometasona', 'Receita Comum', 'R', 'LIBBS']]

  return (
    <div className='flex text-gray-200'>
      <Sidebar />
      <main className='bg-bg-dark flex-1 flex  overflow-x-hidden'>
        <div className='w-full flex flex-col py-5 px-10 gap-3'>
          <h1 className='text-xl font-medium'>Todos os medicamentos</h1>

          <div className='bg-bg-main p-5 rounded space-y-4 flex flex-col items-center md:items-start'>
            <div className='relative flex justify-center w-10/12 md:w-fit'>
              <input className='bg-bg-layer border-none rounded-lg w-full md:w-auto md:pe-36 placeholder-gray-400' type="text" placeholder='Pesquisar...' />
              
              <Search strokeWidth={1} className='absolute inset-y-2 end-3 text-gray-400' />
            </div>

            <Table titles={tableTitles} values={tableValues} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Medicamentos