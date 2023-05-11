import React from "react"
import app_states from "../app_states.mjs"

const Header_guest = function ()
{
    return <header
        style=
        {
            {
                width: "100%",
                minHeight: "4em",
                padding: "0",
                border: "0",
                margin: "0",

                textAlign: "right",

                lineHeight: "4em",

                boxShadow: "rgb(80, 80, 80) 0 0 0.5em 0"
            }
        }
    >

        <button
            onClick=
            {
                function ()
                {
                    app_states.set_state_page("Pages_skelbimai")
                }
            }
        >Skelbimai</button>

        <button
            onClick=
            {
                function ()
                {
                    app_states.set_state_page("Page_naudotojo_prisijungimas")
                }
            }
        >Prisijungimas</button>

        <button
            onClick=
            {
                function ()
                {
                    app_states.set_state_page("Page_naudotojo_registracija")
                }
            }
        >Registracija</button>
    </header >
}

export default Header_guest