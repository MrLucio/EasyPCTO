import React from 'react';
import {
    InputGroup, Input, Icon
} from 'rsuite';

export const BusinessNameInput = (props) =>(   
    <InputGroup>
        <InputGroup.Addon>
            <Icon icon="building" />
        </InputGroup.Addon>
        <Input {...props} />
    </InputGroup>
)