import React from 'react';
import Home from './../component/home/Home';
import { connect } from 'react-redux'
import { ChangeHeader, Login, LoadHotClass, SearchItem, LoadPicture } from '../action';

const HomeContain = props => (<Home {...props} />)

const mapStateToProps = state => ({
    indeximg: state.indeximg,
    init: state.init,
    header: state.header,
    user: state.user
})

export default connect(mapStateToProps, { ChangeHeader, Login, LoadHotClass, SearchItem, LoadPicture })(HomeContain);