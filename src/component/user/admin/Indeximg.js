import React from 'react';
import { List, Button } from 'antd';


class Indeximg extends React.Component {
    handleClick(a){
        console.log(a)
    }
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.props.indeximg}
                renderItem={item => (
                    <List.Item actions={[<Button type="danger" size="large" onClick={()=>this.handleClick(item)}>修改</Button>]}>
                        <List.Item.Meta
                            avatar={<img src={item.picture} alt='图片' width='400px' />}
                        />
                    </List.Item>
                )}
            />
        )
    }
}

export default Indeximg;