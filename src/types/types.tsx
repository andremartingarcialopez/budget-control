export type Categories = {
    id: string;
    name: string;
    icon: string;
}

export type Bill = {
    nameBill: string;
    amount: number;
    date: string;
    category: string;
    id: string
}

export type DrafBill = {
    nameBill: string;
    amount: number;
    date: string;
    category: string;
}