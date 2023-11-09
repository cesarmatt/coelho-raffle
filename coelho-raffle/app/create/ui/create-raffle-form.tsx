'use client';

import { createRaffle } from "@/app/lib/create/actions";
import { useFormState } from "react-dom";

export default function CreateRaffleForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createRaffle, initialState);
    return (
        <div className="container mx-auto bg-gray-light rounded-lg px-4 mt-1.5 py-1.5">
            <form action={ dispatch }>
                <div className="mb-1.5">
                    <label htmlFor="title" className="block text-sm font-medium mb-1 dark:text-black">Título</label>
                    <input type="text" id="title" name="title" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600" placeholder="Viagem para Madrid!"/>
                </div>
                <div className="mb-1.5">
                    <label htmlFor="description" className="block text-sm font-medium mb-1 dark:text-black">Descrição</label>
                    <input type="text" id="description" name="description" className="p-4 sm:p-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600" placeholder="Concorra a uma viagem para Madrid!"/>
                </div>
                <div className="mb-1.5">
                  <label htmlFor="hs-input-with-leading-and-trailing-icon value" className="block text-sm font-medium mb-2 dark:text-black">Valor do número</label>
                  <div className="relative">
                    <input type="number" id="hs-input-with-leading-and-trailing-icon value" name="hs-input-with-leading-and-trailing-icon value" className="py-3 px-4 ps-9 pe-16 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600" placeholder="0.00" />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <span className="text-black">R$</span>
                    </div>
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                      <span className="text-black">BRL</span>
                    </div>
                  </div>
                </div>
                <div className="mb-1.5">
                    <label htmlFor="file-input" className="block text-sm font-medium mb-1 dark:text-black">Imagem</label>
                    <label htmlFor="file-input" className="sr-only">Choose file</label>
                    <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                            file:bg-gray-50 file:border-0
                            file:bg-gray-100 file:me-4
                            file:py-3 file:px-4
                            dark:file:bg-gray-700 dark:file:text-gray-400" />
                </div>
                <div className="mt-3 flex justify-end">
                  <button type="button" className="mr-1.5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Cancelar
                  </button>
                  <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-600 text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Criar rifa
                  </button>
                </div>
            </form>
        </div>
    );
}