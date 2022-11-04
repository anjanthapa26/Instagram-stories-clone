import { useState } from 'react';
import './App.css';
import Container from './components/Container/Container';

function App() {
  const [showdisplay, setShowDisplay] = useState(false);

  const ShowStories = (e) => {
    setShowDisplay(!showdisplay)

  }
  console.log('app rendered')
  return (
    <>
    <div className='container'>
      <div className='inner-container' onClick={ShowStories}>
      </div>
      <Container showdisplay={showdisplay} ShowStories ={ShowStories} />
    </div>
    </>
  );
}

export default App;
