import CreateRaffleForm from "./ui/create-raffle-form";

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto">
          <h1 className="text-4xl dark:text-white mb-3.5">Create a new rifa!</h1>
          <CreateRaffleForm />
        </div>
      </main>
    )
  }