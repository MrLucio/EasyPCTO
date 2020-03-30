import React from 'react';
import {
    InputGroup, Input, Icon
} from 'rsuite';

export const BusinessMailInput = (props) =>(   
    <InputGroup>
        <InputGroup.Addon>
            <Icon icon="envelope" />
        </InputGroup.Addon>
        <Input {...props} />
    </InputGroup>
)