import useBudget from "../hooks/useBudget"
import { BillInformation } from "./BillInformation";

export default function BillsList() {

    const { state } = useBudget();

    const filterBill = state.idFilter ?
        state.bills.filter(function (bill) {
            return bill.category == state.idFilter
        }) :
        state.bills

    return (
        <div className="p-5 bg-white shadow-2xl shadow-gray-400 rounded-xl mt-5 flex flex-col mx-2">
            {filterBill.length == 0 ?
                <p className="text-xl font-semibold text-purple-700 uppercase">No hay Gastos</p> :
                <>
                    <p className="text-xl font-semibold text-indigo-700 uppercase">Tus Gastos</p>
                    {filterBill.map(function (bill) {
                        return (
                            <BillInformation
                                key={bill.id}
                                bill={bill}
                            />
                        )
                    })}


                </>
            }

        </div>
    )
}
