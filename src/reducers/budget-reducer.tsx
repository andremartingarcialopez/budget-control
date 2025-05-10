export type BudgetActions =
    { type: "add-budget", payload: { budget: number } }

export type InitialStateProps = {
    budget: number
}

export const initialState: InitialStateProps = {
    budget: 0,
}

export function budgetReducer(state: InitialStateProps = initialState,action: BudgetActions) {


    if (action.type == "add-budget") {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    return state
    
}