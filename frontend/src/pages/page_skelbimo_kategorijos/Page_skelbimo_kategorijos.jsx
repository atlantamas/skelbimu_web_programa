import React from "react"
import Header from "../../components/Header.jsx"
import service_skelbimu_kategorijos from "../../services/service_skelbimu_kategorijos.mjs"

const Page_skelbimo_kategorijos = function ()
{

    // refs


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

            <h1>Page_skelbimo_kategorijos</h1>


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


                        //

                        // result_of_service_skelbimu_kategorijos

                        app_states.set_state_overlay_message("service_skelbimu_kategorijos...")

                        const result_of_service_skelbimu_kategorijos = await service_skelbimu_kategorijos(antraste, tekstas, miestas, tel_nr, kaina)

                        app_states.set_state_overlay_message("")

                        // error: 

                        if (result_of_service_skelbimu_kategorijos.status === "error")
                        {
                            const error_message = result_of_service_skelbimu_kategorijos.message
                            set_state_status_message(error_message)
                            return
                        }

                        // success

                        set_state_status_message("success")
                    }
                }>
                Pasirinkti
            </button>

            <br></br>

            <span>{state_status_message}</span>

        </main>

        <footer></footer>
    </>
}

export default Page_skelbimo_kategorijos