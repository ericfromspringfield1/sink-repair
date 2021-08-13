import { getRequests } from "./dataAccess.js"



export const Requests = () => {
    const requests = getRequests()
    let html = "<ul>"
        
        const listItems = requests.map((serviceRequest) => 
        (
            `<li>${[serviceRequest.description]}</li>`
            ))
        html += listItems.join("")       
        html += "</ul>"
        return html
    }



  

