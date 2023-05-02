import React from 'react';
import NavigationBar from '../../SharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Recipes = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Recipes;