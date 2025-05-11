import BillsList from "./components/BillsList"
import { BudgetTracker } from "./components/BudgetTracker"
import FormBudget from "./components/FormBudget"
import ModalAndButton from "./components/ModalAndBuuton"
import useBudget from "./hooks/useBudget"

function App() {

  const { state } = useBudget()

  return (
    <>
      <header className="p-8 bg-purple-700 mx-2 rounded-xl mt-1">
        <h1 className="text-center text-2xl md:text-4xl text-white font-bold uppercase">Control de Presupuesto</h1>
      </header>

      <section className="mx-auto max-w-4xl">
        {state.budget <= 0 || isNaN(state.budget) ? <FormBudget /> :
          <>
            <BudgetTracker />
            <BillsList/>
            <ModalAndButton/>

          </>
        }

      </section>
    </>
  )
}

export default App
