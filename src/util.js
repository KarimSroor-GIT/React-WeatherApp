 
      const checkByKey= (key,value) =>{
      
      if (value === null || value === '') return false;
      else{
      if (window.localStorage.getItem(key) === null ||
          window.localStorage.getItem(key) !== value)
      {
        window.localStorage.setItem(key,value)
        return false;
      } else 
        return true;
    }
    }
  
    export default checkByKey;