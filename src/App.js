import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Services from './pages/Services';
import NavMenu from './components/NavMenu';
import Clock from './pages/Home/Clock';


function App() {
  return (
      <ChakraProvider >
        <BrowserRouter>
          <NavMenu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
