import React from "react"

const Skelbimas_list_view = function (props)
{
    // props

    const antraste = props.antraste
    const tekstas = props.tekstas
    const miestas = props.miestas
    const kaina = props.kaina

    return <div>
        
            <span>{antraste}</span>
            <span>{tekstas}</span>
            <span>{miestas}</span>
            <span>{kaina}</span>

    </div>
}

export default Skelbimas_list_view