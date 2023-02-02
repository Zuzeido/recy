import React from 'react'
import disco from "../components/portadaDisco.jpg"
import estiloportada from "../components/portada.css"
function Portada() {
return (
    <div style={{"text-align": "center"}}>
        <img src={disco} style={{width: "80%"}}/>
</div>
)

}
export default Portada