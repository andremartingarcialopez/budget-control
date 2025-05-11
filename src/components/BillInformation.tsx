import { useMemo } from "react"
import type { Bill } from "../types/types"
import useBudget from "../hooks/useBudget"
import { categories } from "../data/data"
import Amounts from "./Amounts"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

export type BillInformationProps = {
    bill: Bill
}

export function BillInformation({ bill }: BillInformationProps) {

    const { state,dispatch } = useBudget();
    const infoCategory = useMemo(() => {
        return categories.filter(function (category) {
            return category.id == bill.category
        })[0];
    }, [state.bills])

    function leadingActions() {
        return (
            <LeadingActions>
                <SwipeAction onClick={() => { }}>
                    Editar
                </SwipeAction>
            </LeadingActions>
        )
    }

    function trailingActions() {
        return (
            <TrailingActions>
                <SwipeAction destructive={true} onClick={() =>dispatch({type: "delete-bill", payload: {id:bill.id}}) }>
                    Eliminar
                </SwipeAction>
            </TrailingActions>
        )
    }

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="bg-slate-200 p-5 flex gap-3 space-y-3 items-center rounded-xl mt-5 w-full">

                    <div>
                        <img className="w-15 md:w-20" src={`/icon_${infoCategory.icon}.png`} alt="" />
                    </div>


                    <div className="flex flex-col space-y-0.9 flex-1">
                        <p className="text-xl font-semibold text-gray-800">{bill.nameBill}</p>
                        <p className="text-gray-600">{infoCategory.name}</p>
                        <p className="text-gray-500 text-sm">{bill.date}</p>
                    </div>

                    <Amounts
                        amount={bill.amount}
                    />

                </div>
            </SwipeableListItem>
        </SwipeableList> 
    )
}
