import React from 'react';

export interface Brewery {
    name :string;
    brewery_type:string;
    city:string;
    state:string;
    street:string;
    postal_code:string;
    website_url:string;
    latitude:string;
    longitude:string;
    selectedBrewery: number;
    setSelectedBrewery: Function;
    index: number;
}

function ListItem(
    {name, index, brewery_type, city, state, street, postal_code, website_url,selectedBrewery, setSelectedBrewery }:Brewery) {
     return(
        <div style={index==selectedBrewery ? {backgroundColor:"#cfebdf7b"}:{}} onClick={()=>{setSelectedBrewery(index)}} className='list-item-container'>
            <div className='li-title'>
                {website_url?<a target="_blank" href={website_url}>{name}</a>: name}
            </div >
            <div className='li-type'>
                Type: {brewery_type}
            </div>
            <div className='li-address'>
                {`${street} ${city}, ${state} ${postal_code}  `}
            </div>
        </div>
     )
}

export default ListItem;