import React from 'react';
import { Form, Input, Button, Alert, Upload, Icon, Modal } from 'antd';
const FormItem = Form.Item;

class UserInfo extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: this.props.user.userphoto,
        }],
        userid: this.props.user.userid,
        username: this.props.user.username,
        displayname: this.props.user.displayname,
        password: '',
    }
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handleChange = ({ fileList }) => {
        this.props.RestartUser(this.props.user.userid);
        this.setState({ fileList })
    }
    ChangeValue(v, name) {
        this.setState({
            [name]: v.target.value
        })
    }
    handleSubmit = () => {
        this.props.ChangeUserInfo({ password: this.state.password, displayname: this.state.displayname, userid: this.state.userid })
    }
    render() {
        const { user } = this.props;
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Alert
                    message={`用户身份 : ` + this.props.user.type}
                    description={this.props.user.belong}
                    type="info"
                    showIcon
                />
                <br />
                <div className="clearfix">
                    <span style={{ fontSize: '14px', lineHeight: '40px', color: 'rgba(0, 0, 0, 0.85)' }}>修改头像：</span>
                    <Upload
                        action={"/api/user/photo?userid=" + user.userid}
                        listType="picture-card"
                        fileList={fileList}
                        accept='image/*'
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                        {fileList.length >= 2 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                <Form >
                    <FormItem
                        label="用户名"
                    >
                        <Input placeholder="请输入用户名" value={this.state.username} onChange={v => this.ChangeValue(v, 'username')} disabled />
                    </FormItem>
                    <FormItem
                        label="密码"
                    >
                        <Input placeholder="请输入新密码" value={this.state.password} onChange={v => this.ChangeValue(v, 'password')} />
                    </FormItem>
                    <FormItem
                        label="昵称"
                    >
                        <Input placeholder="请输入新昵称" value={this.state.displayname} onChange={v => this.ChangeValue(v, 'displayname')} />
                    </FormItem>
                    <FormItem >
                        <Button type="primary" onClick={this.handleSubmit}>修改个人信息</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default UserInfo;