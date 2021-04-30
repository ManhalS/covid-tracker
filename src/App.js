


import Gstatus from './compnents/Gstatus'
import Searchbar from './compnents/Searchbar'
import Usinfo from "./compnents/Usinfo"

function App() {
  return (
    <div className="App">
      <h1> Covid Tracker </h1>
     <Searchbar/>
     <Gstatus/>
     <Usinfo/>
     
    </div>
  );
}

export default App;
