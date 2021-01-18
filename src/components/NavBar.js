import React from 'react';
import {useAuth0} from '../../react-auth0-spa';

const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <div>
            //check if user is or is not Authenticated then displays button based on boolean value
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect}></button>
            )}

            {isAuthenticated && 
            <button onClick ={() => logout()}> Log Out </button>}
        </div>
    );
};

export default NavBar