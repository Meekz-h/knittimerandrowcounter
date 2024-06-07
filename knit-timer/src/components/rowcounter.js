import  React, { useState} from 'react';


function RowCounter(){
    const [rows, setRows] = useState(0);

    const increaseRows = () => {
      setRows(rows + 1);
    };
  
    const decreaseRows = () => {
      setRows(rows > 0 ? rows - 1 : 0);
    };
  
    const resetRows = () => {
      setRows(0);
    };
  
    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setRows(value);
      }
    };
  
    return (
        <div className="mx-auto align-middle">
          <div className=" size-auto text-9xl bg-lime-600 rounded-3xl my-5 text-white text-center m-auto h">
            {rows}
          </div>
          <input
            type="number"
            className="mx-auto my-5 pl-5 text-2xl text-gray-950"
            value={rows}
            onChange={handleInputChange}
            min="0"
          />
          <div className="controls">
            <button className="bg-indigo-400 hover:bg-rose-400  text-white font-bold py-2 px-4 rounded mx-2" onClick={increaseRows}>+</button>
            <button className="bg-indigo-400 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded mx-2" onClick={decreaseRows}>-</button>
            <button className="bg-indigo-400 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded mx-2" onClick={resetRows}>Reset</button>
          </div>
        </div>
    );
  }


export default RowCounter;