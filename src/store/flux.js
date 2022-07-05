const getState =({getStore, getActions, setStore})=>{
    return{
        store:{
            
            personajes: [],
            planetas:[],
            naves:[],
            favoritosList:[], 
        },

        actions: {
            //"https://www.swapi.tech/api/people/"
            fetchPersonajes: () => {
                fetch("https://swapi.dev/api/people", {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                })
                    .then((resp) => resp.json())
                    .then((response) => setStore({ personajes: response.results }));
            },

            fetchPlanetas: () => {
                fetch("https://swapi.dev/api/planets", {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                })
                    .then((resp) => resp.json())
                    .then((response) => setStore({ planetas: response.results }));
            },
            fetchNaves: () => {
                fetch("https://swapi.dev/api/vehicles", {
                    method: "GET",
                    headers: { "Content-type": "application/json" },
                })
                    .then((resp) => resp.json())
                    .then((response) => setStore({ naves: response.results }));
            },
        }

    }
}
export default getState;