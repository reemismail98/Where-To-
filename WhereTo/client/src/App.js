import { Box } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import { Router } from "@reach/router";
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import login from './components/loginreg/login';



function App() {
  return (
      <>
      <Header />
     
      <Box style={{marginTop:64}} >
      <Router>
      <login path="/login" />
        <Home path="/" />
        <DetailView path="/detail"/>
        <CreateView path="/create"/>
        <UpdateView path="/update"/>
      </Router>
      </Box>
      
      </>
  );
}

export default App;
