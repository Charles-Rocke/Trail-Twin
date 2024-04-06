const intialStateUser = {
    name: "",
    id: '',
    bio: '',
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'user/createUser': 
            return {...state,
                name: action.payload.name, 
                id: action.paylod.id, 
                bio: action.payload.bio 
            }
        case 'user/updatebio': 
            return {...state,
                bio: action.payload
            }
        default: return state;
    }
}

export function createUser(name, id, bio) {
    return { type: 'user/createUser', payloud: { 
        name, id, bio
    }}
}

export function updateBio(bio) {
    return {type: 'user/updateBio', payload: bio }
}