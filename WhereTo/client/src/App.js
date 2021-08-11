import { Box } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';




function App() {
  return (
      <>
      <Header />
      <Box style={{marginTop:64}} >
        <Home />
        <DetailView/>
      </Box>
      </>
  );
}

export default App;
