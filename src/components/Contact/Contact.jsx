import React from 'react'
import {countContext , iconContext} from '../../context/context'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function Contact() {
    const {count,setCount} = useContext(countContext);
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
        <h1>Contact page <Link to={'/'}>Home Page</Link> <Link to={'/about'}>About Page</Link> 
        <span onClick={handle}>{icon}</span></h1>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={deccrement}>Deccrement</button>
    </div>
  )
}
