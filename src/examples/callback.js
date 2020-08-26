import React, {useState, useCallback} from 'react';
import ItemsList from './ItemsList'
function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)
  const styles = {
    color: colored ? 'blue' : 'black',
  }
  
  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Element ${i + indexNumber}`)
  }, [count])
  
  return (
    <>
      <h1 style={styles}>Elements count: {count}</h1>
      <button className='btn btn-success' onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Warning</button>
      <ItemsList getItems={generateItemsFromAPI} />
    </>
  )
}

export default App