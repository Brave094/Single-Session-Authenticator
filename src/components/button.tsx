interface Props {
    label: string
}

export const Button = ({label}: Props) => {
    return (
        <button className="bg-slate-800 text-white rounded-md lg:h-14 w-24 hover:bg-slate-600 duration-300 ">{label}</button>
    )
}

