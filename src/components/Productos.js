/* import { useFetch } from "./useFetch"

function Productos() {

    const {data, loading, error } = useFetch(
        "https://recycledj.com/wp-json/wc/v3/products/?per_page=50&consumer_key=ck_00b2f37c17aa393706939ecb185e4c88d0c16773&consumer_secret=cs_f7c56d656d32ebcd3cf787492189eae8f44a3f91"
        )
  return (
    <div className='App'>   
        <div>
            <ul style={{color: "white"}}>
                {error && <li>Error: {error}</li>}
                {loading && <li>Cargando...</li>}
                {data?.map((product) => (
                    <li key={product.id}> {product.name}{product.price}</li>
                   
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Productos */




import React, { useEffect, useState } from 'react'
import "./products.css"
const Index = () => {

    const [users, setUsers] = useState([]);



    const getProducts = async () => {
        const response = await fetch("https://recycledj.com/wp-json/wc/v3/products/?per_page=50&consumer_key=ck_00b2f37c17aa393706939ecb185e4c88d0c16773&consumer_secret=cs_f7c56d656d32ebcd3cf787492189eae8f44a3f91&stock_status=instock&status=publish");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getProducts();
    }, [])


    return (
      
            <div className="container">
               
                {
                    users.map((curElem) => {
                        return (

                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                                    <div className="userName">{curElem.name}</div>
                                    <div className="userUrl">{curElem.id}</div>
                                    <div className="price">{curElem.price}€</div>
                                    <button className="seeMore">Ver mas</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>              

    )
}

export default Index;