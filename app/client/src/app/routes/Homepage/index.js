import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Business } from "../../actions/Business"; 

class Homepage extends React.Component{

    componentDidMount(){
        this.props.Business();
        console.log('beh dai')
    }

    render(){
        return (
            <div>
                Sono homepage {this.props.items}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.ciaone };
};

export default connect(mapStateToProps, { Business })(Homepage);