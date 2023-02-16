const reducer = (state,action) => {
    
    switch(action.type){
        
        case 'TEST': {
            return {
                ...state,
                test:"OK"
            }
        }
        
        case 'LOGIN' :
            return {
                ...state,
                user : action.payload
            }
            
        default :
           return state
    }
}

export {reducer}