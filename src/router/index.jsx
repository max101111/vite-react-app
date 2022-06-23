// router/index.js
import React from 'react'
import BasicLayout from '@/layouts/BasicLayout';
import Redirect from '@/container/Redirect';
const Index = React.lazy(() => import('@/container/Index'))
const About = React.lazy(() => import('@/container/About'))

const layouts = [
    {
        path: '/',
        element: <Redirect />,
    },
    {
        path: 'sys',
        element: <BasicLayout />,
        children: [
            {
                path: 'home',
                element: <Index />
            },
            {
                path: 'about',
                element: <About />
            },
        ],
    },


];


export default layouts