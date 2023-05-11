import React from "react"
import app_states from "../app_states.mjs"
import service_sign_out from "../services/service_sign_out.mjs"

const Header_user = function ()
{
    const username = app_states.state_username

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
                    app_states.set_state_page("Page_skelbimo_ivedimas")
                }
            }
        >Skelbimo ivedimas</button>

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
                    app_states.set_state_page("Page_skelbimu_valdymas")
                }
            }
        >Skelbimu valdymas</button>

        <span
            style=
            {
                {
                    margin: "0 0.5em 0 0.5em",
                    fontWeight: "bold",
                    fontSize: "1em"
                }
            }
        >{username}</span>

        <button
            onClick=
            {
                async function ()
                {
                    app_states.set_state_overlay_message("service_sign_out...")

                    const result_of_service_sign_out = await service_sign_out()

                    app_states.set_state_overlay_message("")

                    // error:

                    if (result_of_service_sign_out.status === "error")
                    {
                        return
                    }

                    // success

                    app_states.set_state_username("")
                    app_states.set_state_page("Page_naudotojo_prisijungimas")
                }
            }
        >Atsijungti</button>
    </header >
}

export default Header_user