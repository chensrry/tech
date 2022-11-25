import React from "react";

import _ form 'lodash';


const requireProps = (propsConditions) => (WrappComponents) => (props) =>{
    if(_.some(propsConditions, (conditon, propName) => {
        let pass = false;
        if(_.isFunction(conditon)){
            pass = !!conditon.call(null, props[propName], props);
            return !pass;
        }
    })) {
        return <div>placeholder</div>
    }
    return React.createElement(WrappComponents, props);
} 