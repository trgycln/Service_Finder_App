
// ActionTypes
export const userDataActionTypes = {
	GET_USERDATA:"GET_USERDATA"
}

// UserData Actions

export const userDataAction = (payload)=>{
	return {
		type:userDataActionTypes.GET_USERDATA,
		payload
	}
}


// UserData Reducer
const initialState = {
	userData:{}
}

 const userDataReducer =(state=initialState,action)=>{
	
	switch (action.payload) {
		case userDataActionTypes.GET_USERDATA:
			return {
				userData:payload
			};
	
		default:
			return state;
	}
}

export default userDataReducer