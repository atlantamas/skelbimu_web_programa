import React from "react"
import app_states from "../../app_states.mjs"
import Header from "../../components/Header.jsx"
import services_skelbimai_create from "../../services/services_skelbimai_create.mjs"

const Page_skelbimo_ivedimas = function ()
{

    // refs

    const ref_input_antraste = React.useRef()
    const ref_input_tekstas = React.useRef()
    const ref_input_miestas = React.useRef()
    const ref_input_tel_nr = React.useRef()
    const ref_input_kaina = React.useRef()

    // states

    const [state_status_message, set_state_status_message] = React.useState()

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
            }
        >

            <h1>Page_skelbimo_ivedimas</h1>

            <span>Antraštė:</span>
            <input
                ref={ref_input_antraste}
                type="text"></input>

            <span>Tekstas:</span>
            <textarea
                ref={ref_input_tekstas}
                type="text"></textarea>

            <span>Miestas:</span>
            <input
                ref={ref_input_miestas}
                type="text"></input>

            <span>Tel nr:</span>
            <input
                ref={ref_input_tel_nr}
                type="text"></input>

            <span>Kaina:</span>
            <input
                ref={ref_input_kaina}
                type="text"></input>

            <button

                style={
                    {
                        margin: "1em 0 0 0"
                    }
                }

                onClick={
                    async function ()
                    {
                        //

                        const antraste = ref_input_antraste.current.value
                        const tekstas = ref_input_tekstas.current.value
                        const miestas = ref_input_miestas.current.value
                        const tel_nr = ref_input_tel_nr.current.value
                        const kaina = ref_input_kaina.current.value

                        //

                        // result_of_services_skelbimai_create

                        app_states.set_state_overlay_message("services_skelbimai_create...")

                        const result_of_services_skelbimai_create = await services_skelbimai_create(antraste, tekstas, miestas, tel_nr, kaina)

                        app_states.set_state_overlay_message("")

                        // error: 

                        if (result_of_services_skelbimai_create.status === "error")
                        {
                            const error_message = result_of_services_skelbimai_create.message
                            set_state_status_message(error_message)
                            return
                        }

                        // success

                        set_state_status_message("success")
                    }
                }>
                Pridėti
            </button>

            <br></br>

            <span>{state_status_message}</span>

        </main>

        <footer></footer>
    </>
}

export default Page_skelbimo_ivedimas