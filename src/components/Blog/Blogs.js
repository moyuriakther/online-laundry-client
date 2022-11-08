import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogsInfo, setBlogsInfo] = useState()
    // useEffect(() => {
    //   fetch('https://mocki.io/v1/cd1ef9ae-8288-40bf-b3fa-694a32f3232c')
    //   .then(res => res.json())
    //   .then(data => setBlogsInfo(data))
    // }, [])
    console.log(blogsInfo)
    return (
        <div className="container my-5">
          <h2 className="privacy-title">Blog</h2>
          <div className="row">
            {
              blogsInfo.map(blogInfo =><Blog blogInfo={blogInfo} />)
            }
          </div>
        </div>
    );
};

export default Blogs;