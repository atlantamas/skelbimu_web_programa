import React from "react"
import app_states from "./app_states.mjs"
import Overlay from "./Overlay.jsx"
import Page_administratoriaus_sasaja from "./pages/page_administratoriaus_sasaja/Page_administratoriaus_sasaja.jsx"
import Page_naudotojo_prisijungimas from "./pages/page_naudotojo_prisijungimas/Page_naudotojo_prisijungimas.jsx"
import Page_naudotojo_registracija from "./pages/page_naudotojo_registarcija/Page_naudotojo_registracija.jsx"
import Page_skelbimai from "./pages/page_skelbimai/Page_skelbimai.jsx"
import Page_skelbimo_ivedimas from "./pages/page_skelbimo_ivedimas/Page_skelbimo_ivedimas.jsx"
import Page_skelbimo_kategorijos from "./pages/page_skelbimo_kategorijos/Page_skelbimo_kategorijos.jsx"
import Page_skelbimu_valdymas from "./pages/page_skelbimu_valdymas/Page_skelbimu_valdymas.jsx"


const App = function ()
{
    const [state_page, set_state_page] = React.useState("Page_naudotojo_prisijungimas")
    app_states.set_state_page = set_state_page

    const [state_overlay_message, set_state_overlay_message] = React.useState("")
    app_states.set_state_overlay_message = set_state_overlay_message

    const [state_username, set_state_username] = React.useState("")
    app_states.state_username = state_username
    app_states.set_state_username = set_state_username


    return <>
        {
            function ()
            {
                if (state_page === "Page_naudotojo_registracija") return <Page_naudotojo_registracija></Page_naudotojo_registracija>
                if (state_page === "Page_naudotojo_prisijungimas") return <Page_naudotojo_prisijungimas></Page_naudotojo_prisijungimas>
                if (state_page === "Page_skelbimo_ivedimas") return <Page_skelbimo_ivedimas></Page_skelbimo_ivedimas>
                if (state_page === "Page_skelbimu_valdymas") return <Page_skelbimu_valdymas></Page_skelbimu_valdymas>
                if (state_page === "Page_administratoriaus_sasaja") return <Page_administratoriaus_sasaja></Page_administratoriaus_sasaja>
                if (state_page === "Page_skelbimai") return <Page_skelbimai></Page_skelbimai>
                if (state_page === "Page_skelbimo_kategorijos") return <Page_skelbimo_kategorijos></Page_skelbimo_kategorijos>
            }()
        }
        {
            function ()
            {
                if (state_overlay_message !== "") return <Overlay message={state_overlay_message}></Overlay>
            }()
        }
    </>
}

export default App