import type { Bill } from "../types/types"

export type BudgetActions =
    { type: "add-budget", payload: { budget: number } } |
    { type: "open-modal" } |
    { type: "close-modal" } |
    { type: "add-bill", payload: { bill: Bill } } |
    { type: "delete-bill", payload: { id: Bill["id"] } }

function initialBudget() {
    const budgetLocal = localStorage.getItem("budget");
    return budgetLocal ? JSON.parse(budgetLocal) : 0
}

function initialBills() {
    const billsLocal = localStorage.getItem("bills");
    return billsLocal ? JSON.parse(billsLocal) : []
}

export type InitialStateProps = {
    budget: number
    modal: boolean
    bills: Bill[];
}

export const initialState: InitialStateProps = {
    budget: initialBudget(),
    modal: false,
    bills: initialBills()
}

export function budgetReducer(state: InitialStateProps = initialState, action: BudgetActions) {


    if (action.type == "add-budget") {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type == "open-modal") {
        return {
            ...state,
            modal: true
        }
    }

    if (action.type == "close-modal") {
        return {
            ...state,
            modal: false
        }
    }

    if (action.type == "add-bill") {
        return {
            ...state,
            bills: [...state.bills, action.payload.bill]
        }
    }

    if (action.type == "delete-bill") {
        return {
            ...state,
            bills: state.bills.filter(bill => bill.id !== action.payload.id)
        }
    }

    return state

}