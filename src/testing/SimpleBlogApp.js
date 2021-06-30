import React, { useRef } from 'react';

import { BlogContext } from './context';

import Modal from './Modal';

function SimpleBlogApp() {
  const inputRef = useRef();

  const {
    modalOpen,
    setModalOpenOpen,
    blog,
    deleteBlog,
    countUp,
    counter,
    findBlog,
    error,
    addingBlog
  } = React.useContext(BlogContext);

  return (
    <div>
      <div className="input-container">
        <input ref={inputRef} type="text" />

       

        <button onClick={(()=>findBlog(inputRef.current.value))}>Nadji Blog</button>
      </div>

    
      {modalOpen && <Modal />}

      <button onClick={setModalOpenOpen}>Show Modal</button>

      <div className="container">
        {blog.map((item) => {
          const { title, description, id } = item;

          return (
            <div onClick={() => deleteBlog(id)} key={id} className="blog">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          );
        })}

        {error && 'Nema trazenih blogova'}

        <button onClick={addingBlog}>Add Blog</button>

        <h1>Counter</h1>

        <p>{counter}</p>

        <button onClick={countUp}>Increase</button>
      </div>
    </div>
  );
}

export default SimpleBlogApp;
