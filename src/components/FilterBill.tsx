import { categories } from "../data/data";
import useBudget from "../hooks/useBudget";

export function FilterBill() {

    const {dispatch} = useBudget();

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch({type: "filter-bill", payload: {id: e.target.value}})
    }

    return (
        <form className="p-5 bg-white shadow-2xl shadow-gray-400 rounded-xl mt-5 flex flex-col mx-2">
            <label className=" md:p-2 text-center md:text-start" htmlFor="filter-bill">Filtrar por categoria</label>
            <select name="" id="filter-bill" className="bg-slate-200 p-2 rounded-xl mt-3" onChange={handleChange}>
                <option value="">--Selecciona--</option>
                {categories.map(function (category) {
                    return (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )
                })}
            </select>
        </form>
    )
}
