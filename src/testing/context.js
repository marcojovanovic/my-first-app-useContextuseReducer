import React, { createContext, useReducer } from 'react';

// 1. Reducer
import reducer from './reducers/test_reducer';

import { blog } from './data.js';

// 3. Context

export const BlogContext = createContext(); // izvoz za komponente

// 4 InitialState

const initialState = {
  modalOpen: false,
  blog: blog,
  counter:0,
  searchValue:'',
  error:false
};

// dispatch Functions

const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setModalOpenClose = () => {
    dispatch({ type: 'MODAL_CLOSE' });
  };

  const setModalOpenOpen = () => {
    dispatch({ type: 'MODAL_OPEN' });
  };

  const deleteBlog = (id) => {
    dispatch({ type: 'DELETE_BLOG', payload: id });
  };

  const countUp = () =>{

    dispatch({ type: 'INCREASE_COUNTER' });


  }

  const findBlog = (searchItem) =>{

    dispatch({ type: 'SEARCH_BLOG', payload:searchItem });


  }

  const addingBlog = () =>{

    dispatch({ type: 'ADD_BLOG'});


  }

  return (
    <BlogContext.Provider
      value={{ ...state, setModalOpenClose, setModalOpenOpen, deleteBlog, countUp, findBlog,addingBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProvider }; // izvoz za index.js
