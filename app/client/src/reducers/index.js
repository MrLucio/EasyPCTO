export default (state, action) => {
    switch (action.type){
        case "FETCH_BUSINESSES_SUCCESS":
            return {
                ...state,
                businesses: action.payload
            }
        case "FETCH_COURSES_SUCCESS":
            return {
                ...state,
                courses: action.payload
            }
        case "FETCH_ATECOS_SUCCESS":
            return {
                ...state,
                atecos: action.payload
            }
        case "FETCH_TYPES_SUCCESS":
            return {
                ...state,
                types: action.payload
            }
        case "FETCH_LOCATIONS_SUCCESS":
            return {
                ...state,
                locations: action.payload
            }
        case "FETCH_PAGINATION_SUCCESS":
            return {
                ...state,
                pagination: action.payload
            }
        default:
            return {
                ...state,
            };
    }
}