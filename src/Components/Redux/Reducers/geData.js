const initialState = {
    listPicsum : [],
    isLoading : false,
    isRejected : false,
    isFullfilled: false
}

export const getData = (prevState = initialState, action)=> {
    switch (action.type) {
        case 'GET_DATA_PENDING':
            return {
                ...prevState,
                isLoading: true,
                isRejected: false,
                isFullfilled:false 
            }
            
        case 'GET_DATA_REJECTED':
            return{
                ...prevState,
                isLoading: false,
                isRejected:true

            }
        case "GET_DATA_FULFILLED":
            return{
                ...prevState,
                isLoading: false,
                isFullfilled:true,
                listPicsum : action.payload.data
            }
    
        default :return prevState
        }


}