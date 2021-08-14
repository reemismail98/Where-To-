import { Box } from '@material-ui/core';
import './App.css';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import { Router } from "@reach/router";
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/post/About';
import  Post  from './components/home/Post';



function App() {
  return (
      <>
      <Box style={{marginTop:64}} >
      <Router>
      <Login path="/login" />
      <Register path="/register" />
        <Home path="/" />
        <DetailView path="/detail/:id"/>
        <CreateView path="/create"/>
        <UpdateView path="/update"/>
        <About path="/about"/>
        <Post path="/hindi"/>
      
      </Router>
      </Box>
      
      </>
  );
}

export default App;
