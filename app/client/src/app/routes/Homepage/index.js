import React from 'react';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import { Store } from "../../store";

class Homepage extends React.Component{
    render(){
        return (
            <div>
                Sono homepage {Store.getState().ciaone}
            </div>
        )
    }
}

export default Homepage;