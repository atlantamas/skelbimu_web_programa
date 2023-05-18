import React from "react"
import Skelbimas_list_view from "./Skelbimas_list_view.jsx"

const Skelbimai_list = function (props)
{
    // props

    const arr_skelbimai = props.arr_skelbimai

    //

    return <div>

        {
            function ()
            {
                const arr_skelbimai_list_views = []

                for (var i = 0; arr_skelbimai.length; i++)
                {
                    const skelbimas = arr_skelbimai[i]

                    arr_skelbimai_list_views.push(
                        <Skelbimas_list_view
                            antraste={skelbimas.antraste}
                            tekstas={skelbimas.tekstas}
                            miestas={skelbimas.miestas}
                            kaina={skelbimas.kaina}
                        ></Skelbimas_list_view>
                    )
                }

                return arr_skelbimai_list_views

            }()
        }

    </div>
}

export default Skelbimai_list