import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/routes';

function App() {
  return (
    <div >
      <BrowserRouter>
      <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
