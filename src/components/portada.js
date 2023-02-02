import React from 'react'
import disco from "../components/portadaDisco.jpg"
import estiloportada from "../components/portada.css"
function Portada() {
return (
    <div style={{"text-align": "center", height: '60vh'}}>
        <a href='https://warnermusicspain.lnk.to/RecycledJ_150CANCIONES' target="_blank">
            <img src={disco} style={{width: "80%"}} /></a>
</div>
)

}
export default Portada