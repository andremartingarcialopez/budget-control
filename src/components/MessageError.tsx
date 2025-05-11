export type MessageErrorProps = {
    error: string
}

export default function MessageError({error}: MessageErrorProps) {
  return (
    <p className="text-center p-2 mt-3 rounded-xl bg-red-700 text-white w-full">{error}</p>
  )
}
