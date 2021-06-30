import {
  MODAL_CLOSE,
  MODAL_OPEN,
  ADD_BLOG,
  DELETE_BLOG,
  SEARCH_BLOG,
  INCREASE_COUNTER,
} from '../actions';

const test_reducer = (state, action) => {
  if (action.type === MODAL_CLOSE) {
    return { ...state, modalOpen:false };
  }

  if (action.type === MODAL_OPEN) {
    return { ...state, modalOpen:true };
  }

  if(action.type === DELETE_BLOG){


   const tempBlog = state.blog.filter((item)=> item.id !== action.payload)
    
    return {...state, blog:tempBlog}

  }


  if(action.type === ADD_BLOG){
    

    const tempBlog = state.blog 


    if(tempBlog){

      tempBlog.push({id:7, title:'dfdaf', description:'dfdsfsafdfafasfafsdf'})
    }




    return {...state, blog:tempBlog}

  

  }





  if (action.type === INCREASE_COUNTER) {


    let tempCounter = state.counter + 1


    return { ...state, counter:tempCounter };
  }


  if(action.type === SEARCH_BLOG){  

    
    let tempSearch = state.blog.filter(item=> item.title.includes(action.payload))



    let errSearch = state.blog.filter(item=> item.title.includes(action.payload)).length 


     if(errSearch === 0){

      return {...state, blog:tempSearch, error:true}      

     }

    
     
   


    return {...state, blog:tempSearch}
  }



  return state;

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default test_reducer;
