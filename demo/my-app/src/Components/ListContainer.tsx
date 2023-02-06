import React from 'react';
import {useState} from 'react'
import ListItem, {Brewery} from './ListItem';
import BreweryDetails from './BreweryDetails';
import Header from './Header';

interface ListContainerProps {
    breweries: Array<Brewery>
  }

function ListContainer({breweries}: ListContainerProps) {
    const [selectedBrewery, setSelectedBrewery] = useState(0);
    const breweriesList = breweries.map((element, i)=>
        <ListItem {...element} key={i} index={i} selectedBrewery={selectedBrewery} setSelectedBrewery={setSelectedBrewery}/>
    )
    console.log('inside list',breweries)
    return(
        <div className='page-container'>
            <Header />
            <div className='list-details-container'>
                <div className="list-container" id="scrollable">
                    {breweriesList}
                </div>
                <BreweryDetails {...breweries[selectedBrewery]}/>

            </div>
        </div>
    )
}
export default ListContainer;
