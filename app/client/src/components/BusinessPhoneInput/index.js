import React from 'react';
import {
    InputGroup, Input, Icon
} from 'rsuite';

export const BusinessPhoneInput = (props) =>(   
    <InputGroup>
        <InputGroup.Addon>
            <Icon icon="phone" />
        </InputGroup.Addon>
        <Input {...props} />
    </InputGroup>
)