import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './assets/Styles.css'
import SinglePost from './pages/SinglePost';

import Home from './pages/Home';
import AddPost from './pages/AddPost'

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/single-post' element={<SinglePost />  } />
      <Route path= '/add-post' element={<AddPost /> } />
      <Route path= '*' element={<h2> page not found</h2>} /> 

    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
