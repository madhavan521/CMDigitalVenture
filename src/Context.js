import React, { Children, createContext, useEffect, useState } from 'react';
const Context =createContext()

const ContextProvider = ({children}) => {
    const [data ,setData] = useState([])


    const demo =()=>{
        fetch("http://localhost:8000/",
            {
                method:"GET",
                headers:{
                    "Content-Type" :"application/json"
                }
            }
        )
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result )
        })
        }

      useEffect(()=>{
          demo() 
      },[])

  return (
    <div>
    <Context.Provider value={{data}}>
        {children}
    </Context.Provider>
      
    </div>
  );
}

export { Context ,ContextProvider};
