import React from 'react'
import QRCode from 'react-qr-code'

const MyQRCode = ({ value }: { value: string }) => {
  return (
    <QRCode value={value} />
  )
}

export default MyQRCode