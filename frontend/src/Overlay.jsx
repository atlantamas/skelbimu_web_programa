import React from "react"

const Overlay = function (props)
{

    // props

    const message = props.message

    //
    
    return <div
        style=
        {
            {
                position: "fixed",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",

                Width: "100%",
                Height: "100%",
                padding: "0",
                border: "0",
                margin: "0",

                display: "grid",
                gridTemplateColumns: "auto",
                placeContent: "center center",
                placeItems: "center center",


                backgroundColor: "rgba(80, 80, 80, 0.9)"
            }
        }
    >

        <span
            style=
            {
                {
                    fontSize: "1em",
                    fontWeight: "bold"
                }
            }
        >
            {message}</span>
    </div>
}

export default Overlay