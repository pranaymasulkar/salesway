
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Setting from './views/Setting';
import Team from './views/Team';
import Campaigns from './views/Campaigns';
import Flows from './views/Flows';
import Intigrations from './views/Intigrations';
import Customers from './views/Customers';

function App() {
  return (
    <>
     <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/setting" element={<Setting />}/>
        <Route exact path="/team" element={<Team />}/>
        <Route exact path="/campaigns" element={<Campaigns />}/>
        <Route exact path="/flows" element={<Flows />}/>
        <Route exact path="/intigrations" element={<Intigrations />}/>
        <Route exact path="/customers" element={<Customers />}/>
    </Routes>

    </>
  );
}

export default App;
