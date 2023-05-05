import './App.css';
import CreateBlog from './components/createBlog/createBlog';
import SideBar from './components/sideBar/sideBar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Blog from './components/blog/blog';
import EditBlog from './components/editBlog/editBlog';
import { Provider } from 'react-redux';
import store from './myRedux';

function App() {
  return (
    <Provider store={store}>
    <div class="d-flex">
            <Router>
                <SideBar></SideBar>
                <div class='content-ctn p-3'>
                    <Routes>
                        <Route path="/" element={<Blog/>}/>
                        <Route path="/create-blog" element={<CreateBlog/>}/>
                        <Route path="/edit-blog/:id" element={<EditBlog/>}/>
                    </Routes>
                </div>
            </Router>
    </div>
    </Provider>
  );
}

export default App;
