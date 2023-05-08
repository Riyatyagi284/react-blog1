
import {useContext,useEffect} from 'react';
import {AppContext} from './ContextApp/context'
import Header from './component/Header'
import Blog from './component/Blog'
import Pagination from './component/Pagination'


function App() {
  const {fetchBlogPosts} = useContext(AppContext);
   
  useEffect(() => { 
      fetchBlogPosts();
},[]);
  return (
    <div className="wrapper">
     <Header/>
     <Blog/>
     <Pagination/>
    </div>
  );
}

export default App;
