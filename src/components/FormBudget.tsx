import { useState } from "react"
import useBudget from "../hooks/useBudget";
import MessageError from "./MessageError";

export default function FormBudget() {

    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget();
    const [error, setError] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setBudget(e.target.valueAsNumber)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (budget <= 0 || isNaN(budget)) {
            setError("Introduce un presupuesto valido");
            setTimeout(() => {
                setError("")
            }, 3000);
            return;
        }

        dispatch({ type: "add-budget", payload: { budget: budget } });
    }

    return (
        <form onSubmit={handleSubmit} className="p-5 bg-white shadow-2xl shadow-gray-400 rounded-xl mt-5 flex flex-col mx-2">

            <label className="text-center text-2xl md:text-4xl font-bold text-indigo-600" htmlFor="budget">Presupuesto</label>
            <input id="budget" type="number" placeholder="Introduce la cantidad de tu presupuesto. Ej. 5,000" className="bg-slate-200 p-2 rounded-xl mt-3" value={budget} onChange={handleChange} />

            <input className="bg-indigo-600 mt-5 p-2 rounded-xl text-white cursor-pointer hover:bg-indigo-400 active:bg-indigo-600" type="submit" value={"Agregar Presupuesto"} />

            {error && <MessageError
                error={error} />
            }


        </form>
    )
}
