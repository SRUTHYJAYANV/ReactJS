import React, { useState, useEffect } from 'react';
import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

function HomeComponent(): ReactElement {
    const history = useHistory();

    return (
        <div className="wrapper">
            <div className="Container">
                <div className="nav">
                    <div className="logo">
                        HOME
                    </div>
                </div>
                <div className="header">
                    <h1>User List</h1>
                    <button type="button" onClick={() => history.push('/list')}>Click to view the list</button>
                </div>
            </div>
        </div>
    );
}
export default HomeComponent;
