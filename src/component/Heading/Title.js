import React from 'react';
import './Title.css';

function Title({name,title})  {
    
        return (
            <div className="row">
                <div className="col-12 main-heading">
                    <h1>{name}<span className="title">{title}</span></h1>
                </div>
            </div>
        );
    }


export default Title;