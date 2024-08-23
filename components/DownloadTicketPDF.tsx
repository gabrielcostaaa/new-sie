import { PDFDownloadLink } from '@react-pdf/renderer';
import TicketPDF from './TicketPDF';
import { Button } from "@/components/ui/button";

const DownloadTicketPDF = ({ ticket }) => {
  return (
    <div>
      <PDFDownloadLink
        document={<TicketPDF ticket={ticket} />}
        fileName={ticket.event.event_title}
      >
        {({ loading }) =>
          loading ? 'Gerando PDF...' : <Button className="w-auto h-10 text-sm py-2">Imprimir Ingresso</Button>
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadTicketPDF;
