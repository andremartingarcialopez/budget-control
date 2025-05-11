import { formatUSD } from "../helpers/helpers"

export type AmountsProps = {
    label?: string,
    amount: number
}

export default function Amounts({ label, amount }: AmountsProps) {
    return (
        <p className="text-2xl md:text-3xl text-indigo-600 font-bold">{label} <span className="text-black font-normal">{formatUSD(amount)}</span></p>
    )
}
