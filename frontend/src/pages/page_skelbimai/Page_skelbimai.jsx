import React from "react"
import app_states from "../../app_states.mjs"
import Header from "../../components/Header.jsx"
import service_skelbimai_find from "../../services/service_skelbimai_find.mjs"
import Skelbimas_list_view from "./Skelbimas_list_view.jsx"

const Page_skelbimai = function ()
{
    // refs

    const ref_input_paieskos_tekstas = React.useRef()


    // state 

    const [state_arr_skelbimai, set_state_arr_skelbimai] = React.useState({})

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
            }
        >
            <span>Paieskos tekstas</span>
            <input
                ref={ref_input_paieskos_tekstas}
                type="text"
            ></input>

            <button
                onClick=
                {
                    async function ()
                    {
                        //

                        const paieskos_tekstas = ref_input_paieskos_tekstas.current.value

                        //

                        app_states.set_state_overlay_message("service_skelbimai_find...")

                        const result_of_service_skelbimai_find = await service_skelbimai_find(paieskos_tekstas)

                        app_states.set_state_overlay_message("")

                        // error:

                        if (result_of_service_skelbimai_find.status === "error")
                        {
                            const error_message = result_of_service_skelbimai_find.message
                            set_state_status_message(error_message)
                            return
                        }

                        const arr_skelbimai = result_of_service_skelbimai_find.arr_skelbimai

                        // success

                        set_state_arr_skelbimai(arr_skelbimai)
                        set_state_status_message("success")
                    }

                }>Ieskoti</button>

            <Skelbimas_list_view
            
                arr_skelbimai={state_arr_skelbimai}>

            </Skelbimas_list_view>
        </main>
    </>
}

export default Page_skelbimai