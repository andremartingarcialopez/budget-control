import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

export default function useBudget() {

    const context = useContext(BudgetContext);
    if (!context) {
        throw new Error("La app completa debe correr dentro del Provider");
        
    }
    return context;
}
