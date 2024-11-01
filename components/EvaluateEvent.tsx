import Link from 'next/link';
import { Button } from "@/components/ui/button";

const EvaluateEvent = ({ event_id }: { event_id: number }) => {
  return (
    <div className="absolute inset-0 bg-white opacity-50 transition-opacity duration-300 ease-in-out transform hover:opacity-75 flex items-center justify-center">
        <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Avalie o Evento</h4>
            <Link href={`/admin/avaliacoes/${event_id}`} passHref>
                <Button variant="outline">Avaliar</Button>
            </Link>
        </div>
    </div>
  )
}

export default EvaluateEvent;
