import React from 'react';
import {
    InputGroup, Input, Icon
} from 'rsuite';

export const BusinessWebsiteInput = (props) =>(   
    <InputGroup>
        <InputGroup.Addon>
            <Icon icon="globe" />
        </InputGroup.Addon>
        <Input {...props} />
    </InputGroup>
)