import FormBudget from "./components/FormBudget"

function App() {

  return (
    <>
      <header className="p-8 bg-purple-700 mx-2 rounded-xl mt-1">
        <h1 className="text-center text-2xl md:text-4xl text-white font-bold uppercase">Control de Presupuesto</h1>
      </header>

      <section className="mx-auto max-w-4xl">
        <FormBudget/>
      </section>
    </>
  )
}

export default App
