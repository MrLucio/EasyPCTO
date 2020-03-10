import React from 'react';
import { connect } from 'react-redux';
import { Business } from "actions/Business";
import { Button, Sidenav, Nav, Icon, Dropdown } from 'rsuite';

class Homepage extends React.Component{

    componentDidMount(){
        this.props.Business();
        console.log('beh dai')
    }

    render(){
        
        const headerStyles = {
            padding: 20,
            fontSize: 16,
            background: '#34c3ff',
            color: ' #fff'
        };

        return (
            <div>Mah non so</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.ciaone };
};

export default connect(mapStateToProps, { Business })(Homepage);