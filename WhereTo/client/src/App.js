import { Box } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import { Router } from "@reach/router";




function App() {
  return (
      <>
      <Header />
     
      <Box style={{marginTop:64}} >
      <Router>
        <Home path="/" />
        <DetailView path="/detail"/>
      </Router>
      </Box>
      
      </>
  );
}

export default App;
