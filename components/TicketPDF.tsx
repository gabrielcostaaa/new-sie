import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';  
import QRCode from 'qrcode';  

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#f8f8f8',
  },
  section: {
    border: '1 solid #000',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', // Centraliza verticalmente
  },
  leftColumn: {
    width: '30%', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightColumn: {
    width: '70%', 
    flexDirection: 'column',
    justifyContent: 'center',
  },
  qrCode: {
    width: 100,
    height: 100,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
  },
  eventDetails: {
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'left',
  },
  eventDates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});

const TicketPDF = ({ ticket }) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');  

  useEffect(() => {
    QRCode.toDataURL(ticket.registration_qr_code || 'caiu aqui')
      .then((url) => {
        setQrCodeDataUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [ticket]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          
          {/* Coluna Esquerda - QR Code */}
          <View style={styles.leftColumn}>
            {qrCodeDataUrl && <Image style={styles.qrCode} src={qrCodeDataUrl} />}
          </View>

          {/* Coluna Direita - Informações do Evento */}
          <View style={styles.rightColumn}>
            <Text style={styles.eventTitle}>{ticket.event.event_title}</Text>
            <Text style={styles.eventDetails}>Local: {ticket.event.event_location}, {ticket.event.event_city}</Text>
            
            {/* Data e Horário de Início */}
            <View style={styles.eventDates}>
              <Text style={styles.eventDetails}>Data Início: {ticket.event.event_start_date}</Text>
              <Text style={styles.eventDetails}>Hora Início: {ticket.event.event_start_time}</Text>
            </View>

            {/* Data e Horário de Fim */}
            <View style={styles.eventDates}>
              <Text style={styles.eventDetails}>Data Fim: {ticket.event.event_end_date}</Text>
              <Text style={styles.eventDetails}>Hora Fim: {ticket.event.event_end_time}</Text>
            </View>
            {/* <Text style={styles.eventDetails}>Número do Ingresso: {ticket.ticket_number}</Text>
            <Text style={styles.eventDetails}>Organizador: {ticket.event.organizer_name}</Text> */}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default TicketPDF;




