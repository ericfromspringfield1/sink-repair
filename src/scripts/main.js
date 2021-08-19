import { fetchPlumbers, fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

const mainContainer = document.querySelector("#container")


const render = () => {
    fetchPlumbers()
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}



render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
