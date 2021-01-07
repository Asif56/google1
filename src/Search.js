import React,{useState} from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import { useStatevalue } from './StateProvider';
import { actionTypes } from './reducer';

function Search( {hideButtons=false}) {

    const [input, setInput] = useState('');
    const history =useHistory()
    const [{},dispatch]= useStatevalue();

    const search =(e)=>{
       e.preventDefault();

      dispatch({
          type:actionTypes.SET_SEARCH_TERM,
          term:input
      })

       history.push('/search')

    };
  return (
    <form className='search'>
      <div className="search_input">
          <SearchIcon className='serarch_inputIcon' />
          <input value={input} onChange={e=>setInput(e.target.value)}/>
          <MicIcon/>
      </div>
      {!hideButtons ?
        <div className="search_buttons">
        <Button type="submit" onClick={search} variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I am feeling lucky</Button>

      </div>:(
            <div className="search_buttons">
            <Button className='search_hiddenButton' type="submit" onClick={search} variant='outlined'>Google Search</Button>
            <Button className='search_hiddenButton' variant='outlined'>I am feeling lucky</Button>
    
          </div>
      )
      
      }
      
    </form>
  )
}

export default Search
