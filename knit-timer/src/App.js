import logo from './logo.svg';
import './App.css';
import StopWatch from './components/stopwatch';
import RowCounter from './components/rowcounter';
function App() {
  return (
    <div className='bg-gray-950 mx-auto content-center min-h-screen flex items-center justify-center'>
    <><StopWatch></StopWatch><RowCounter></RowCounter></>
    </div>
  );
}

export default App;
