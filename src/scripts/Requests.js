import { deleteRequest, getPlumbers, getRequests, saveCompletion } from "./dataAccess.js"



export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()

    let html = "<ul class='requests-container'>"
    const createListItems = (request) => {

       return `<div><li>Uh oh. ${request.description} at ${request.address}. They'd like it done by ${request.neededBy}</li></div>
       <div><select class="plumbers" id="plumbers">
       <div><option value="">Choose</option></div>
       ${
           plumbers.map(
               plumber => {
                   return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
               }
           ).join("")
       }
   </select>
   </div>
   
   <div>
   <button class="request__delete" id="request--${request.id}">Delete</button>
   </div> 
   `
       
         
    }

        
        html += requests.map(createListItems).join("") 
        html += "</ul>"


       
        
        
        return html 
    } 

    const mainContainer = document.querySelector("#container")
    mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("request--")) {
            const [,requestId] = click.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    })

    mainContainer.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "plumbers") {
                const [requestId, plumberId] = event.target.value.split("--")
                 const dateCreated = Date.now()
                /*
                    This object should have 3 properties
                       1. requestId
                       2. plumberId
                       3. date_created
                */
                const completion = {
                    requestId: parseInt(requestId),
                    plumberId: parseInt(plumberId),
                    date_created: dateCreated
                 }
    
                /*
                    Invoke the function that performs the POST request
                    to the `completions` resource for your API. Send the
                    completion object as a parameter.
                 */
                
                    saveCompletion(completion)
    
            }
        })

        

  

