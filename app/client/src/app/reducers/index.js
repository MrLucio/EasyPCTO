export default (state, action) => {
    switch (action.type){
        case "NUN_ZO":
            return state;
        default:
            return {
                ...state,
                "sis": "nos"
            };
    }
}