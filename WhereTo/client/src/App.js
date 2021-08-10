import { Box } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';




function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{marginTop:64}} >
        <Home />
      </Box>
    </div>
  );
}

export default App;
