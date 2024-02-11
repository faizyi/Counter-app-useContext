import React, { useContext } from 'react'
import {countContext , iconContext} from '../../context/context'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom'
export default function About() {
    const {count, setCount} = useContext(countContext);
    const {icon ,setIcon, color, setColor} = useContext(iconContext)
    function increment(){
        setCount(count + 1)
    }
    function deccrement(){
        setCount(count - 1)
    }
    function handle(){
        if(color.backgroundColor == 'white'){
            setIcon(<LightModeIcon/>)
            setColor({
                backgroundColor:'black',
                color : 'white'
            })
        }else{
            setIcon(<DarkModeIcon/>)
            setColor({
                backgroundColor:'white',
                color : 'black'
            })
        }
    }
  return (
    <div style={color}>
        <h1>About page <Link to={'/'}>Home Page</Link> <Link to={'/contact'}>Contact Page</Link>
        <span onClick={handle}>{icon}</span></h1>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={deccrement}>Deccrement</button>
    </div>
  )
}
