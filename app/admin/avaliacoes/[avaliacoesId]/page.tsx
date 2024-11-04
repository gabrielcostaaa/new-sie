import EventFeedback from "@/components/EventFeedback";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    avaliacoesId: string;
  };
};

export default async function AvaliacoesDetalhes({ params }: Props) {
  const session = await getServerSession()
  const { avaliacoesId } = params;

  return (
    <div>
      <EventFeedback event_id={avaliacoesId} session_user={session}/>
    </div>
  );
}

  