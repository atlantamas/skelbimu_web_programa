import React from "react"
import app_states from "../app_states.mjs"
import Header_admin from "./Header_admin.jsx"
import Header_guest from "./Header_guest.jsx"
import Header_user from "./Header_user.jsx"

const Header = function ()
{
    const username = app_states.state_username

    //

    return <>
        {
            function ()
            {

                if (username === "") return <Header_guest></Header_guest>
                if (username === "admin") return <Header_admin></Header_admin>
                return <Header_user></Header_user>
            }()
        }
    </>
}

export default Header