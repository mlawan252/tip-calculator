import { useState } from 'react';
import './App.css';
import Amount from './components/Amount';
import Reset from './components/Reset';
import Result from './components/Result';
import Service from './components/Service';

function App() {
  const [amount, setAmount] = useState('');
  const [selectedInput, setSelectedInput] = useState('')
  const [friendInput, setFriendInput] = useState('')
  
  function handleReset(){
    setAmount('')
    setSelectedInput('')
    setFriendInput('')
}
  
  return (
    <div>
      <Amount setAmount={setAmount} amount={amount}/>
      <Service percentage={selectedInput} onInput={setSelectedInput}>How did you like the service</Service>
      <Service percentage={friendInput} onInput={setFriendInput}>How does your friend like the service</Service>
      <Result amount = {amount} selectedInput={selectedInput} friendInput={friendInput}/>
      <Reset onHandleReset={handleReset} />
    </div>
  );
}

export default App;
