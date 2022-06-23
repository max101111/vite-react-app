import { Layout } from 'antd';
// import { createBrowserHistory } from 'history';
import React from 'react';
// import { renderRoutes } from 'react-router-config';
import { Outlet, Link } from "react-router-dom"

// import MyHeader from '../components/Header';
// import MyMenu from '../components/Menu';

const { Content } = Layout;

const BasicLayout = ({ route }) => {
    //   const history = createBrowserHistory();

    //   if (!localStorage.getItem('vite-react-ts-antd-token')) {
    //     history.push('/user/login');
    //   }

    return (
        <Layout>
            {/* <MyMenu /> */}
            <Layout>
                <Link to="home">home</Link>
                {/* <MyHeader /> */}
                <Content style={{ height: 'calc(100vh - 60px)' }}>
                    {/* {renderRoutes(route.routes)} */}
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default BasicLayout;