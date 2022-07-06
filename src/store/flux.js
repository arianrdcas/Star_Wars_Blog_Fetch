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
            addFavorito: (nombre) =>{
            
                const store = getStore();  
    
                //const vari = [...store.favoritosList,nombre];
                setStore({favoritosList:[...store.favoritosList,nombre]})
                console.log(store.favoritosList)
                //setStore({favoritosList: vari});
    
            },
            eliminarFavorito:(i) =>{

                const store = getStore();
    
                const newList = store.favoritosList.filter((index)=>index !==i)
    
                setStore({favoritosList:newList});
                console.log(newList);
              },
        }

    }
}
export default getState;