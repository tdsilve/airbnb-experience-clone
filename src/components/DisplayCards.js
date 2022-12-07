import { useEffect, useState } from 'react';
import Card from './Card'
import ErrorInfo from './ErrorInfo';

export default function DisplayCards() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3004/cards")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Invalid data!")
      }
      setError(null)
      return res.json()
     })
     .then((data) => setData(data))
    .catch(error => {
      console.log(error.message)
      setError(error.message)
    })
  })
  return (
    <section className='cards-section'>
      {error ? 
          <ErrorInfo error={error}/> : 
          <Card data={data}/>
      }
    </section>
  )
}