const initState = {
    users:[
        {id: 1, name: 'Tung'},
        {id: 2, name: 'Tung2'},
        {id: 3, name: 'Tung3'},

    ],
    post:[]
}
const rootReducer = (state = initState, actions) =>{
    switch(actions.type) {
        case 'DELETE_USER':
          console.log('check delete user redux ', actions);
          let users = state.users
          users = users.filter(item => item.id !== actions.payload.id)

          return {
            ...state, users
        }
          
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = {id: id, name: `ramdom - ${id}`}
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state        
    }
}

export default rootReducer