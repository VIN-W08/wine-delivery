import React, { useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import WineGrid from './WineGrid';
import "../styles/wineList.css"

export default function WineList(){
    const [wines , setWines] = useState([])
    const [page, setPage] = useState(1)

    const wineListEndpoint = "https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list"
    function getWines(){
        fetch(`${wineListEndpoint}?page=${page}`)
        .then((response) => {
            response.json()
            .then((json) => {
                setWines([...wines, ...json.value.products])
            }).catch((err) => {
                throw(err)
            })
        }).catch((err) => {
            throw(err)
        })
    }
  
    useEffect(() => {
        getWines()
    }, [page])

    return (
        <InfiniteScroll
            dataLength={wines.length}
            next={() => setPage(page+1)}
            hasMore={true}
            className="container-wine-list">
        {
            wines.map((wine) => {
                const image = wine.image
                const vintageYear = wine.vintageYear!=0 ? wine.vintageYear:""
                const name = `${wine.name} ${vintageYear}`
            
                return (
                    <WineGrid
                        key={wine.id}
                        id={wine.id}
                        image={image} 
                        name={name}
                        varietes={wine.grapeVarietes}
                        region={wine.region}
                        country={wine.country}
                        price={wine.price}
                        qty={wine.qty}/>
                )
            })
        }
        </InfiniteScroll>
    )
}