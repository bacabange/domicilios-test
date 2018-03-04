export const getData = () => {
	return{
		type : 'GET_DATA'
	};
};

export const getDataSuccess = (response) => {
	return{
		type : 'GET_DATA_SUCCESS',
		response
	};
};

export const getDataFailure = (error) => {
	return{
		type : 'GET_DATA_FAILURE',
		error
	};
};

// Firebase auth
export var getFetch = () => {

	return(dispatch) => {
		// execute actions
        dispatch(getData());
        fetch('http://www.mocky.io/v2/5a663e0d2e0000002b323e0e')
			.then(response => response.json())
            .then(results => {
                dispatch(getDataSuccess(results));
            })
            .catch(error => {
                dispatch(getDataFailure(error));
            });
	};
};