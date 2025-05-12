import BillsList from "./components/BillsList"
import { BudgetTracker } from "./components/BudgetTracker"
import { FilterBill } from "./components/FilterBill"
import FormBudget from "./components/FormBudget"
import ModalAndButton from "./components/ModalAndBuuton"
import useBudget from "./hooks/useBudget"

function App() {

  const { state } = useBudget()

  localStorage.setItem("budget", JSON.stringify(state.budget))
  localStorage.setItem("bills",JSON.stringify(state.bills));

  return (
    <>
      <header className="p-8 bg-purple-700 mx-2 rounded-xl mt-1">
        <h1 className="text-center text-2xl md:text-4xl text-white font-bold uppercase">Control de Presupuesto</h1>
      </header>

      <section className="mx-auto max-w-4xl">
        {state.budget <= 0 || isNaN(state.budget) ? <FormBudget /> :
          <>
            <BudgetTracker />
            <FilterBill/>
            <BillsList/>
            <ModalAndButton/>

          </>
        }

      </section>
    </>
  )
}

export default App
