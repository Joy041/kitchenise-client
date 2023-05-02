import React from 'react';
import NavigationBar from '../../SharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Recipes = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Recipes;