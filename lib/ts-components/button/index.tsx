/**
 * Created by lude on 31/03/2017.
 */
var styles = require('./index.scss');

import * as React from 'react';

export interface IComponentProps {
    /** prop description */
    handler:any;
    /** prop description */
    children?:any;
    /** prop description */
    value?:string;
    /** prop description */
    type?:string;
}


export class Button extends React.Component<IComponentProps, {}> {

    constructor(props : IComponentProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e:any){
        if(e && typeof e.preventDefault === 'function') e.preventDefault();
        this.props.handler();
    }

    render() {
        const {value, children, type} = this.props;
        return (
            <button className='btn' onClick={this.clickHandler} type={type}>
                {value ? value : children ? children : 'Submit'}
            </button>
        );
    }
}

export default Button;