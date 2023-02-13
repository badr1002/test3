import React from 'react'
import QrReader from 'modern-react-qr-reader'

const App = () => {
  const [result, setResult] = React.useState('No Result')

  const handleScan = data => {
    if (data) {
      setResult({ result: data });
      console.log(result);
      alert('')
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div style={{
      position: 'relative',
      left: "40% ",

    }}>
      <QrReader
        delay={300}
        facingMode={"user"}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '40%' }}
      />
      <p>{result}</p>
    </div>
  )
}

export default App;