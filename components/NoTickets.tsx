import { Frown } from 'lucide-react'

export default function NoTickets ({name}:{name:string}) {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className='flex justify-center items-center text-gray-300'>
                <Frown size={64} />
                <h2 className='font-semibold text-3xl ml-4'>Parece que você não tem {name}</h2>
            </div>
        </div>
    )
}