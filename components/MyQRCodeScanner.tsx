"use client"

import React, { useState } from 'react'
import QrScanner from 'react-qr-scanner'

const MyQRCodeScanner = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleScan = (data: any) => {
    if (data) {
      setResult(data.text);
    }
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default MyQRCodeScanner;
