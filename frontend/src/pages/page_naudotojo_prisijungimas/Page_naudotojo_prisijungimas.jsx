import React from "react"
import app_states from "../../app_states.mjs"
import Header from "../../components/Header.jsx"
import service_sign_in from "../../services/service_sign_in.mjs"

const Page_naudotojo_prisijungimas = function ()
{
    // refs

    const ref_input_naudotojo_vardas = React.useRef()
    const ref_input_slaptazodis = React.useRef()

    // states

    const [state_status_message, set_state_status_message] = React.useState()


    //
    return <>
        <Header></Header>

        <main
            style={
                {
                    width: "100%",
                    height: "auto",
                    padding: "0",
                    border: "0",
                    margin: "0",
                    display: "grid",

                    display: "grid",
                    gridTemplateColumns: " auto",
                    placeContent: "center center",
                    placeItems: "center center"

                }
            }>

            <h1>Page_naudotojo_prisijungimas</h1>

            <span>Naudotojo vardas:</span>
            <input
                ref={ref_input_naudotojo_vardas}
                type="text"
            ></input>

            <span>Slaptazodis:</span>
            <input
                ref={ref_input_slaptazodis}
                type="password"
            ></input>

            <button

                style={
                    {
                        margin: "1em 0 0 0"
                    }
                }
                onClick=
                {
                    async function ()
                    {
                        //

                        const naudotojo_vardas = ref_input_naudotojo_vardas.current.value
                        const slaptazodis = ref_input_slaptazodis.current.value

                        // result_of_service_sign_in


                        app_states.set_state_overlay_message("service_sign_in...")

                        const result_of_service_sign_in = await service_sign_in(naudotojo_vardas, slaptazodis)

                        app_states.set_state_overlay_message("")

                        // error: 

                        if (result_of_service_sign_in.status === "error")
                        {
                            const error_message = result_of_service_sign_in.message
                            set_state_status_message(error_message)
                            return
                        }

                        // success

                        app_states.set_state_username(naudotojo_vardas)

                        app_states.set_state_page("Page_skelbimo_ivedimas")
                    }
                }
            >Prisijunti</button>

            <br></br>

            <span>{state_status_message}</span>

        </main>

        <footer></footer>
    </>
}

export default Page_naudotojo_prisijungimas