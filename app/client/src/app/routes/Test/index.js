import React from 'react';
import { connect } from 'react-redux';
import { Location as LocationAction } from 'actions/Location';
import { MultiCascader } from 'rsuite';

class Test extends React.Component{

    componentDidMount(){
        this.props.LocationAction();
    }

    render(){
        const { locations } = this.props;
        console.log(locations);
        return (
            <MultiCascader 
                childrenKey='city'
                labelKey='name'
                valueKey='id'
                menuHeight={400}
                menuWidth={368}
                data={locations}            
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    };
};

export default connect(mapStateToProps, { LocationAction })(Test);