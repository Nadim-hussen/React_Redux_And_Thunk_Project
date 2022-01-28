import { Route, Routes } from 'react-router-dom';
import './App.css';
import Count from './components/Count';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Count />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
