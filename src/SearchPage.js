import React from 'react'
import './SearchPage.css'
import { useStatevalue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import {Link } from 'react-router-dom'
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'



function SearchPage() {
    const [{term},dispatch] =useStatevalue();
    const{data} = useGoogleSearch(term);

    // console.log(data)
  return (
    <div className='searchPage'>
      <div className="searchPage_header">
        <Link to='/'>
      <img className='searchPage_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png' />
      </Link>
      <div className="searchPage_headerBody">
      <Search hideButtons/>
       <div className="searchPage_options">
           <div className="searchPage_optionLeft">
               <div className="searchPage_option">
                 <SearchIcon/>
                 <Link to='/all'>All</Link>
               </div>
               <div className="searchPage_option">
                 <DescriptionIcon/>
                 <Link to='/news'>News</Link>
               </div> <div className="searchPage_option">
                 <ImageIcon/>
                 <Link to='/images'>Images</Link>
               </div> <div className="searchPage_option">
                 <LocalOfferIcon/>
                 <Link to='/shopping'>Shopping</Link>
               </div> <div className="searchPage_option">
                 <RoomIcon/>
                 <Link to='/map'>Map</Link>
               </div>
                <div className="searchPage_option">
                 <MoreVertIcon/>
                 <Link to='/more'>More</Link>
               </div> 
           </div>
           <div className="searchPage_optionRight">
           <div className="searchPage_option">
                 <Link to='/setting'>Settings</Link>
               </div> 
               <div className="searchPage_option">
                 <Link to='/tool'>Tools</Link>
               </div> 
           </div>
       </div>
      </div>
      </div>
      {term && (
         <div className="searchPage_result">
           <p className="searchPage_resultCount">
             About {data?.searchInformation.formattedTotalResults} result ({data?.searchInformation.formattedSearchTime} seconds ) for {term}
           </p>
           {data?.items.map(item=>(
             <div className="searchPage_resultLink">
               <a href={item.link} >
                 {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                   <img
                   className='searchPage_resultImage'
                   src={
                    
                     item.pagemap?.cse_image[0]?.src
                   }
                   alt=''
                   />
                 )}
               {item.displayLink} 

               </a>
               <a className='searchPage_resultTitle' href={item.link}>
           <h2>{item.title}</h2>
               </a>
           <p  className='searchPage_resultSnippet'>{item.snippet}</p>
             </div>
           ))}
         </div>
      )}
      
    </div>
  )
}

export default SearchPage
