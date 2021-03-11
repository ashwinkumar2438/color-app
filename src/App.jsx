import './App.scss';
import {useRef} from 'react';

//going without components due to less time left.
function App() {

  const inputRef=useRef(null);



  return (
    <div className="App">
      <div className="main-box">
        <div className="left-side">
          <input type="text" className="main-input" ref={inputRef}/>
          <button className="color-me" onClick={()=>{
            
          }}>
            color me
          </button>
        </div>
        <div className="right-side">
          {
            [...Array(9)].map((_,i)=>{
              let textval=i+1;
              return (<div key={i} className="grid">
                {textval}
              </div>)

            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
