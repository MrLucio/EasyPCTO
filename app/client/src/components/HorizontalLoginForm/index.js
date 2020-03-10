import React from "react";

class HorizontalLoginForm extends React.Component{
    
    handleSubmit = e => {
        console.log(e)
    }

    render(){
        return (
            <div>hm k</div>
        )
    }

}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;