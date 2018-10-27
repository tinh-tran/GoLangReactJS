import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

class CommonFooter extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Intell Learn ©2018 Created By Heikunan
            </Footer>
        )
    }
}

export default CommonFooter;