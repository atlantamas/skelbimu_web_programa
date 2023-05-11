import React from "react"
import app_states from "../../app_states.mjs"
import Header from "../../components/Header.jsx"
import service_sign_up from "../../services/service_sign_up.mjs"


const Page_naudotojo_registracija = function ()
{

    // refs

    const ref_input_naudotojo_vardas = React.useRef()
    const ref_input_slaptazodis_1 = React.useRef()
    const ref_input_slaptazodis_2 = React.useRef()

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

            <h1>Page_naudotojo_registracija</h1>

            <span>Naudotojo vardas:</span>
            <input
                ref={ref_input_naudotojo_vardas}
                type="text"
            ></input>

            <span>Slaptazodis:</span>
            <input
                ref={ref_input_slaptazodis_1}
                type="password"
            ></input>

            <span>Slaptazodis pakartoti:</span>
            <input
                ref={ref_input_slaptazodis_2}
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
                        const slaptazodis_1 = ref_input_slaptazodis_1.current.value
                        const slaptazodis_2 = ref_input_slaptazodis_2.current.value

                        // error: nesutampa slaptazodziai

                        if (slaptazodis_1 !== slaptazodis_2)
                        {
                            set_state_status_message("error: nesutampa slaptazodziai")
                            return
                        }

                        // result_of_service_sign_up

                        app_states.set_state_overlay_message("service_sign_up...")

                        const result_of_service_sign_up = await service_sign_up(naudotojo_vardas, slaptazodis_1, slaptazodis_2)

                        app_states.set_state_overlay_message("")

                        // error: 

                        if (result_of_service_sign_up.status === "error")
                        {
                            const error_message = result_of_service_sign_up.message
                            set_state_status_message(error_message)
                            return
                        }

                        // success

                        set_state_status_message("success")
                    }
                }
            >Registruoti</button>

            <br></br>

            <span>{state_status_message}</span>


        </main>

        <footer></footer>
    </>
}

export default Page_naudotojo_registracija