


import Gstatus from './compnents/Gstatus'
import Searchbar from './compnents/Searchbar'
import Usinfo from "./compnents/Usinfo"
import v1 from "./compnents/video/v1.mp4"
 import Global from "./compnents/Global"
function App() {
  return (
    <div className="App">
      <video autoPlay loop muted
      style ={{
        
        objextfit:"cover"
        
      }}>
        <source src={v1} type= "video/mp4"/>
      </video>
      <h1 id="cover"> Covid Tracker </h1>
     <Searchbar/>
     <Gstatus/>
     <Usinfo/>
    <Global/>
     
    </div>
  );
}

export default App;
