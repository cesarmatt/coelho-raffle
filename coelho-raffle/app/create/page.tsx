export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto">
          <h1 className="text-4xl dark:text-white mb-1.5">Create a new rifa!</h1>
          <div className="container mx-auto bg-gray-light rounded-lg px-4 mt-1.5 py-1.5">
            <form>
                <div className="mb-1.5">
                    <label for="input-label" class="block text-sm font-medium mb-1 dark:text-white">Título</label>
                    <input type="email" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Viagem para Madrid!"/>
                </div>
                <div className="mb-1.5">
                    <label for="input-label" class="block text-sm font-medium mb-1 dark:text-white">Descrição</label>
                    <input type="email" id="input-label" className="p-4 sm:p-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Concorra a uma viagem para Madrid!"/>
                </div>
                <div>
                    <label for="input-label" class="block text-sm font-medium mb-1 dark:text-white">Imagem</label>
                    <label for="file-input" class="sr-only">Choose file</label>
                    <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                            file:bg-gray-50 file:border-0
                            file:bg-gray-100 file:me-4
                            file:py-3 file:px-4
                            dark:file:bg-gray-700 dark:file:text-gray-400" />
                </div>
            </form>
          </div>
        </div>
      </main>
    )
  }