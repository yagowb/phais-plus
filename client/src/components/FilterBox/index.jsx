import { Check, X } from "lucide-react"
import Checkbox from "../Input/Checkbox"

function FilterBox({ onClose }){
  return (
    <div className='absolute top-0 left-96 z-10 bg-bg-layer w-60 p-5 rounded-md space-y-3 shadow-md'>
      <div className='flex justify-between items-center'>
        <h1 className='font-medium'>Filtros</h1>
        <div className='flex gap-2 items-center'>
          <button onClick={onClose}>
            <X size={20} />
          </button>
          <Check size={20} />
        </div>
      </div>
      
      <input className='bg-bg-layer-hover border-none py-1 ps-2 rounded w-full text-sm placeholder-gray-400 outline-none focus:ring-1 focus:ring-green-dark' type="text" placeholder='Pesquisar...' />
      
      <div className='space-y-4'>
        <div className='space-y-1'>
          <h1 className='font-medium'>Receituário</h1>
          <Checkbox name='receituario' id='comum' label='Receita comum' />
          <Checkbox name='receituario' id='2vias' label='Receita comum em 2 vias' />
          <Checkbox name='receituario' id='idento' label='Idento de prescrição' />
          <Checkbox name='receituario' id='a1' label='A1 (Amarela)' />
          <Checkbox name='receituario' id='hospitalar' label='Uso hospitalar' />
        </div>

        <div className='space-y-1'>
          <h1 className='font-medium'>Tipo</h1>
          <Checkbox name='tipo' id='generico' label='G - Genérico' />
          <Checkbox name='tipo' id='referencia' label='R - Referência' />
          <Checkbox name='tipo' id='similar' label='S - Similar' />
          <Checkbox name='tipo' id='outros' label='O - Outros' />
        </div>
      </div>
    </div> 
  )
}

export default FilterBox