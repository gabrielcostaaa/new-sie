import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import MyQRCode from '@/components/MyQRCode';
import tickets from '@/app/data/constants/tickets';

// Defina os estilos
const styles = StyleSheet.create({
  page: { flexDirection: 'column', padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, marginBottom: 10, textAlign: 'center' },
  info: { marginBottom: 6 },
  qrCode: { alignSelf: 'center', marginVertical: 20 },
});

// Componente PDF
const TicketPDF = ({ ticket }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Ingresso do Evento</Text>
        <Text style={styles.info}>Título: {ticket.event.event_title}</Text>
        <Text style={styles.info}>Data: {ticket.event.event_date}</Text>
        <Text style={styles.info}>Local: {ticket.event.event_location}</Text>
        <Text style={styles.info}>Cidade: {ticket.event.event_city}</Text>
        <Text style={styles.info}>Organizador: {ticket.event.organizer}</Text>
        <Text style={styles.info}>Número do Ingresso: {ticket.ticket_number}</Text>

        {/* Renderiza o QR code */}
        {/* <View style={styles.qrCode}>
          <MyQRCode value={ticket.registration_qr_code || "caiu aqui"} size={96} />
        </View> */}

        {/* Outras informações do ingresso */}
        
      </View>
    </Page>
  </Document>
);

export default TicketPDF;
