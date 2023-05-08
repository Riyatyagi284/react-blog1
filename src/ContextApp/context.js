import{createContext,useState} from 'react';
import {baseUrl} from '../baseUrl'


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
     const[page,setPage]=useState(1);
     const[posts,setPosts]=useState([]);
     const[totalPages,setTotalPages]=useState(null);



    //Data Filling

    async function fetchBlogPosts(page=1) {
        setLoading(true);
         let url = `${baseUrl}?page=${page}`;
        try{
           const result = await fetch (url);
           const data = await result.json();
           const d1 = setPage(data.page);
           setPosts(data.posts);
           setTotalPages(data.totalPages)
        }
        catch(error){
          setPage(1);
           setPosts([]);
           setTotalPages(null)
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value={
        loading,
        setLoading,
        page,
        setPage,
       posts,
       setPosts,
       totalPages,
       setTotalPages,
       fetchBlogPosts,
       handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}