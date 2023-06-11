import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Container sx={{ mt: 5 }}></Container>
      </>

    </div>
  );
}

export default App;
