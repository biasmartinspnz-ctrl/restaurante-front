"use client"

import Image from 'next/image';


export default function Home() {
  
  async function cadastrar(e:any) {
    e.prevent
    alert("Produto cadastrado com sucesso!")
  }
  
  
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 flex flex-col items-center gap-6">
        
        <div className="flex justify-center">
          <Image 
            src="/logotipo-restaurante.jpg" 
            alt="logotipo" 
            width={120} 
            height={120} 
            className="rounded-full object-cover" 
          />
        </div>

        
        <h1 className="text-2xl font-bold text-gray-800 text-center w-full">
          Restaurante - Casa da Bea
        </h1><form className="w-full flex flex-col gap-4">
         

          <input 
            type="text" 
            placeholder="Digite a descrição..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          
          <input 
            type="number" 
            placeholder="Digite o preço..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        <input 
            type="text" 
            placeholder="Digite a categoria..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

<button
onClick={cadastrar}
className='w-full rounded-xl
bg-blue-600 px-4 py-3
font-medium text-white shadoe-sm cursor-pointer'

>
  Cadastrar
</button>
          
          
          <label className="flex items-center gap-3 cursor-pointer p-2 bg-gray-50 rounded-lg border border-gray-200">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-red-500 cursor-pointer"
            />
            <span className="text-gray-700 text-sm font-medium">O lanche está disponível</span>
          </label>

          
          <button 
            type="submit" 
            className="w-full mt-2 bg-blue-500 hover:bg-red-600 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm"
          >
            Cadastrar
          </button>
        </form>

      </div>
    </main>
  );
}
