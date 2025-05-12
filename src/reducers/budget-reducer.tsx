import type { Bill, Categories } from "../types/types"

export type BudgetActions =
    { type: "add-budget", payload: { budget: number } } |
    { type: "open-modal" } |
    { type: "close-modal" } |
    { type: "add-bill", payload: { bill: Bill } } |
    { type: "delete-bill", payload: { id: Bill["id"] } } |
    { type: "get-id-edit", payload: { id: Bill["id"] } } |
    { type: "edit-bill", payload: { bill: Bill } } |
    { type: "reset-app" } |
    { type: "filter-bill", payload: {id: Categories["id"]} } 

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
    idEdit: string
    idFilter: Categories["id"]
}

export const initialState: InitialStateProps = {
    budget: initialBudget(),
    modal: false,
    bills: initialBills(),
    idEdit: "",
    idFilter: ""
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
            modal: true,
        }
    }

    if (action.type == "close-modal") {
        return {
            ...state,
            modal: false,
            idEdit: ""
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

    if (action.type == "get-id-edit") {
        return {
            ...state,
            idEdit: action.payload.id,
            modal: true
        }
    }

    if (action.type == "edit-bill") {
        return {
            ...state,
            bills: state.bills.map(function (bill) {
                if (bill.id == state.idEdit) {
                    return action.payload.bill
                } else {
                    return bill
                }
            }),
            modal: false,
            idEdit: ""   
        }
    }

    if (action.type == "reset-app") {
        return {
            ...state,
            budget: 0,
            modal: false,
            bills: [],
            idEdit: ""
        }
    }

    if (action.type == "filter-bill") {
        return{
            ...state,
            idFilter: action.payload.id

        }
    }

    

    return state

}