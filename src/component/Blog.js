
import React from 'react'
import'./Blog.css'
import { AppContext } from '../ContextApp/context';
import Spinner from '../component/Spinner';
import { useContext } from 'react';
const Blog = () => {
  const{posts,loading} = useContext(AppContext);
  return (
    <div className='container'>
      {
        loading?
        (<Spinner/>):
        (
        posts.length===0 ?
         (<div><p>No post found</p></div>)
         :
         (posts.map( ( post ) => (
            <div key={post.id}>
             <p className='para1'>{post.title}</p>
             <p className='para2'>
              By <span className='span1'>{post.author}</span> on <span className='span2'>{post.category}</span></p>
              
              <p className='para1'>Posted on {post.date} </p>
              <p className='para2'>{post.content}</p>
              
            <div>
            {post.tags.map((tag,index) => (
              <span className='span3' key={index}>
              {` #${tag}`}
              </span>
            ))}

            </div>

            </div>
          )
          ))

        )
      
            }

    </div>
  )
}

export default Blog
