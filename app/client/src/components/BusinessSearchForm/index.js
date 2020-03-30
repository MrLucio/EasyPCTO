import React, { Component } from "react";

import { InputGroup, Input, Icon } from 'rsuite';

const styles = {
    width: 300,
    marginBottom: 10
};

class BusinessSearchForm extends Component{
    render(){
        return(
            <InputGroup style={styles}>
                <Input placeholder="Ricerca nome azienda" />
                <InputGroup.Button>
                    <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
        )
    }
}

export default BusinessSearchForm;