

import Global from './compnents/Global'
import Gstatus from './compnents/Gstatus'
import Searchbar from './compnents/searchbr'
import Usinfo from "./compnents/Usinfo"

function App() {
  return (
    <div className="App">
      <h1> Covid Tracker </h1>
     <Searchbar/>
     <Gstatus/>
     <Usinfo/>
     <Global/>
    </div>
  );
}

export default App;
