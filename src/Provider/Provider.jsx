import React, { useState,createContext,useContext } from 'react'
import {countContext , iconContext} from '../context/context'
import DarkModeIcon from '@mui/icons-material/DarkMode';
// const MyContext = createContext();
export default function Provider({children}) {
    const [count,setCount] = useState(0);
    const [icon, setIcon] = useState(<DarkModeIcon/>);
    const [color, setColor] = useState({
        backgroundColor:'white',
        color : 'black'
    })
  return (

        <iconContext.Provider value={{icon, setIcon,color, setColor}}>
        <countContext.Provider value={{count, setCount}}>
            {children}
        </countContext.Provider>
        </iconContext.Provider>
  )
}

// export const useMyContext = () => useContext(MyContext);
