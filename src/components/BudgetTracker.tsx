import useBudget from "../hooks/useBudget";
import Amounts from "./Amounts";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function BudgetTracker() {

    const { state, dispatch } = useBudget();

    const gastado = state.bills.reduce(function (total, bill) {
        return total = (total + bill.amount)
    }, 0);

    const restante = state.budget - gastado;

    const percentage = ((gastado / state.budget) * 100).toFixed(1);
    

    return (
        <div className="p-5 bg-white shadow-2xl shadow-gray-400 rounded-xl mt-5 grid grid-cols-1 md:grid-cols-2 items-center mx-2 justify-center">

            <div className="w-90 ">
                <CircularProgressbar 
                value={+percentage}
                text={`${percentage}%`}
                background
                backgroundPadding={4}
                styles={buildStyles({
                  backgroundColor: +percentage >= 90 ? "#DC2626" :"#8200db",
                  textSize: 15,
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent"
                  
                })}
                >

                </CircularProgressbar>
            </div>

            <div className="flex flex-col space-y-2 mt-10 md:mt-0">
                <button className="w-full text-white bg-indigo-700 p-2 rounded-xl hover:bg-indigo-500 active:bg-indigo-700 cursor-pointer" onClick={() => dispatch({type: "reset-app"}) }>Reiniciar App</button>

                <Amounts
                    label="Presupuesto:"
                    amount={state.budget}
                />

                <Amounts
                    label="Gastado:"
                    amount={gastado}
                />

                <Amounts
                    label="Restante:"
                    amount={restante}
                />
            </div>

        </div>
    )
}
