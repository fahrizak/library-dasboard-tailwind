import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {

  const [showSidebar, SetShowSidebar] = useState('left-[-100%]');
  const [showIcon, SetShowIcon] = useState(true);

  const toggleClass = () => {
    SetShowSidebar(showSidebar === 'left-[-100%]' ? 'left-0' : 'left-[-100%]');
    SetShowIcon(!showIcon);

  };
  return ( 
    <main>
      <Header toggle={toggleClass} showIcon={showIcon}/>
      <Sidebar toggle={toggleClass} showSidebar={showSidebar}/>
      <Footer />
    </main>
   );
}
 
export default App;