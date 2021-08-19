const applicationState = {
    plumbers: [],
    requests: [],
    completions: []
}

const API = "http://localhost:8088"

// ********************* REQUESTS ******************** //

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
            )
        }

    export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
        
export const getRequests = () => {
        return applicationState.requests.map(request => ({...request}))
    }

    const mainContainer = document.querySelector("#container")

    export const deleteRequest = (id) => {
        return fetch(`${API}/requests/${id}`, { method: "DELETE" })
            .then(
                () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            )
    }

    // ********************* PLUMBERS ******************** //

    export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (servicePlumbers) => {
                // Store the external state in application state
                applicationState.plumbers = servicePlumbers
            }
            )
        }

    export const sendPlumber = (userServicePlumber) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServicePlumber)
    }
    return fetch(`${API}/plumbers`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
        
export const getPlumbers = () => {
        return applicationState.plumbers.map(plumber => ({...plumber}))
    }


    // ********************* COMPLETED TASKS ******************** //

export const saveCompletion = (completedRequest) => {
    const fetchCompletions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedRequest)
    }
    
        return fetch(`${API}/completions`, fetchCompletions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    

}



