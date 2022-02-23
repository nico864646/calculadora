import { useState } from 'react';
import { Calculator, Display, Grid } from './styles';
import Buttons from './components/Buttons';

function App() {
  const [display, setDisplay] = useState<string>('0')
  const [calc, setCalc] = useState<Array<string>>(['', '', '']);

  const handleNumber = (e: any) => {
    const array = calc
    if (!array[1]) {
      array[0] += e.target.textContent
      array[0] = array[0].replace(/\s+/g, '')
      setCalc(array)
      setDisplay(calc[0])
    }
    else {
      array[2] += e.target.textContent
      array[2] = array[2].replace(/\s+/g, '') 
      setCalc(array)
      setDisplay(calc[2])
    }
  }

  function handleOperator(e: any) {
    const array = calc
    array[1] = e.target.textContent
    setCalc(array)
    setDisplay('')
  }

  function handleResult(e: any) {
    const array = calc
    array[0] = eval(array[0] + array[1] + array[2]).toString()
    array[1] = ''
    array[2] = ''
    setCalc(array)
    setDisplay(calc[0])
  }

  function handleReset(e: any) {
    const array = calc
    if(array)
    array[0] = '' 
    array[1] = ''
    array[2] = ''
    setCalc(array)
    setDisplay('0')
  }

  return (
    <div>
      <Calculator>
        <Display>
          <Buttons insideValue='CE' onClick={e => { handleReset(e) }} />
          {display}
        </Display>
        <Grid>
          <Buttons insideValue='7' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='8' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='9' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='/' onClick={e => { handleOperator(e) }} />

          <Buttons insideValue='4' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='5' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='6' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='*' onClick={e => { handleOperator(e) }} />

          <Buttons insideValue='1' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='2' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='3' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='-' onClick={e => { handleOperator(e) }} />

          <Buttons insideValue='.' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='0' onClick={e => { handleNumber(e) }} />
          <Buttons insideValue='=' onClick={e => { handleResult(e) }} />
          <Buttons insideValue='+' onClick={e => { handleOperator(e) }} />
        </Grid>
      </Calculator>
    </div>
  );
}

export default App;
