import { Layout } from 'antd';
import React from 'react';
import HeaderComponent from './Header/HeaderComponent';
import FooterComponent from './Footer/FooterComponent';

const LayoutComponents = ({ children }) => {
    const { Content } = Layout
    return (
        <div>
            <Layout
                style={{ 
                    background: '#181818'
                 }}
            >
                {/* Header */}
                <HeaderComponent/>

                {/* Content */}
                <Content
                    className='site-layout'
                >
                    <div
                    style={{ 
                        minHeight: '380',
                     }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default LayoutComponents;
