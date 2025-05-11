import { useState } from "react";
import { categories } from "../data/data";
import MessageError from "./MessageError";
import { currentDay } from "../helpers/helpers";
import type { DrafBill } from "../types/types";
import useBudget from "../hooks/useBudget";
import { v4 } from "uuid";

export default function FormBill() {

    const { state, dispatch } = useBudget();
    const [bill, setBill] = useState<DrafBill>({
        nameBill: "",
        amount: 0,
        date: currentDay(),
        category: ""
    });
    const [error, setError] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        if (e.target.id == "amount") {
            setBill({ ...bill, [e.target.id]: Number(e.target.value) })
        } else {
            setBill({ ...bill, [e.target.id]: e.target.value })
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (Object.values(bill).includes("")) {
            setError("Todos los campos son obligatorios");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }

        if (bill.nameBill.trim() == "") {
            setError("Todos los campos son obligatorios");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }

        if (bill.amount <= 0 || isNaN(bill.amount)) {
            setError("Introduce una cantidad valida");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }

        dispatch({ type: "add-bill", payload: { bill: { ...bill, id: v4() } } })
        state.modal = false;

    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3" action="">
            <legend className="text-center text-2xl md:text-4xl font-bold text-indigo-700 border-b-4 pb-2">Nuevo Gasto</legend>

            <div>
                <label className="p-2" htmlFor="nameBill">Nombre:</label>
                <input type="text" placeholder="Introduce el nombre del gasto. Ej. Gasolina" className="w-full bg-slate-200 p-2 rounded-xl" id="nameBill" value={bill.nameBill} onChange={handleChange} />
            </div>

            <div>
                <label className="p-2" htmlFor="amount">Cantidad:</label>
                <input type="number" placeholder="Introduce la cantidad del gasto. Ej. 500" className="w-full bg-slate-200 p-2 rounded-xl" id="amount" value={bill.amount} onChange={handleChange} />
            </div>

            <div>
                <label className="p-2" htmlFor="date">Fecha:</label>
                <input type="date" className="w-full bg-slate-200 p-2 rounded-xl" id="amount" value={bill.date} onChange={handleChange} />
            </div>

            <div>
                <label className="p-2" htmlFor="category">Categoria:</label>
                <select className="w-full bg-slate-200 p-2 rounded-xl" id="category" value={bill.category} onChange={handleChange}>
                    <option value="">--Selecciona--</option>
                    {categories.map(function (category) {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    })}
                </select>
            </div>

            <input className="bg-indigo-600 mt-5 p-2 rounded-xl text-white cursor-pointer hover:bg-indigo-400 active:bg-indigo-600" type="submit" value={"Agregar Gasto"} />

            {error && <MessageError
                error={error} />
            }
        </form>
    )
}
