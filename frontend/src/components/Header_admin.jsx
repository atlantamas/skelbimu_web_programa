import React from "react"
import app_states from "../app_states.mjs"
import service_sign_out from "../services/service_sign_out.mjs"

const Header_admin = function ()
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
                async function ()
                {
                    app_states.set_state_overlay_message("service_sign_out...")

                    const result_of_service_sign_out = await service_sign_out()

                    service_sign_out(result_of_service_sign_out)

                    app_states.set_state_overlay_message("")
                }
            }
        >Page_administratoriaus_sasaja</button>

    </header >
}

export default Header_admin