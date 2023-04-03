import React,{Fragment} from 'react';

import '../../asset/css/custom.css'

import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import { AiOutlineMenuUnfold,AiOutlineEdit } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";




const SideNavigation = (props) => 
{

    var jubo = ()=>
    {
        var sideNav = document.querySelector('.side-nav');
        var myContent = document.querySelector('.my-content');
        var navLogo = document.querySelector('.nav-logo');
        
        console.log(sideNav)

        if(sideNav.classList.contains('side-nav-open'))
        {
            
            sideNav.classList.add('side-nav-close');
            sideNav.classList.remove('side-nav-open')

            myContent.classList.add('content-expand')
            myContent.classList.remove('content')

            navLogo.classList.add('nav-logo-close')
            navLogo.classList.remove('nav-logo-open')

        }
        else
        {
            sideNav.classList.remove('side-nav-close');
            sideNav.classList.add('side-nav-open')

            myContent.classList.add('content')
            myContent.classList.remove('content-expand')

            navLogo.classList.add('nav-logo-open')
            navLogo.classList.remove('nav-logo-close')


        }
    }

    return (
        <Fragment>
            <Navbar className='navigation-bg' fixed='top' collapseOnSelect expand="lg"  variant="dark">
                    <Container>
                            <Navbar.Brand className='navigation-brand' >
                                <span  className='nav-logo nav-logo-open' onClick={jubo} ><AiOutlineMenuUnfold/></span> <span className='navigation-brand-text'>Post Management</span> 
                            </Navbar.Brand>
                    </Container>
            </Navbar>


            <div className='side-nav-open side-nav'>
                <div className='side-nav-image-div'>
                    <h2><span>Invento</span></h2>
                </div>
                
                <NavLink to='/' className={(p1) => p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item" }>
                    <span className='side-nav-icon'><RiDashboardLine/></span>  <span className='side-nav-text'>Post List</span>
                </NavLink>
                <NavLink to='/postUpdate' className={(p1) => p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item" }>
                    <span className='side-nav-icon'><AiOutlineEdit/></span>  <span className='side-nav-text'>Create Post</span>
                </NavLink>
               
            </div>

            <div className='content my-content'>
                {props.children}
            </div>

        </Fragment>
    );
};

export default SideNavigation;