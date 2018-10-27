import axios from 'axios';
import { message } from 'antd';

export const GET_MYCLASS = (userid) => {
    return dispatch => {
        axios.post('/api/teacher/class', userid).then(
            res => {
                dispatch({ type: 'GET_MYCLASS', myclass: res.data })
            }
        )
    }
}

export const LoadPicture = () => {
    return dispatch => {
        axios.get('/api/indeximg').then(
            res => {
                dispatch({ type: 'LOAD_IMG', img: res.data })
            }
        )
    }
}

export const LoadCourse = (classid) => {
    return dispatch => {
        axios.post('/api/course', { classid }).then(
            res => {
                dispatch({ type: 'LOAD_COURSE', classinfo: res.data })
            }
        )
    }
}

export const ChangeUserInfo = (userInfo) => {
    return dispatch => {
        axios.post('/api/user/changeinfo', userInfo).then(
            res => {
                if (res.data.code === 0) {
                    message.error('请输入正确的新密码或用户名！', 0.5);
                } else {
                    message.success('修改成功', 0.5);
                    dispatch({ type: 'LOAD_DISPLAYNAME', displayname: res.data.displayname })
                }
            }
        )
    }
}

export const SelectCourse = (classid, userid) => {
    return dispatch => {
        axios.post('/api/course/selectclass', { classid, userid }).then(
            res => {
                if (res.data.code === 0) {
                    message.error('选课失败', 1);
                } else {
                    message.success('选课成功', 1);
                    dispatch({ type: 'SELECT_COURSE', isSelect: true });
                }
            }
        )
    }
}

export const LoadSection = (classid) => {
    return dispatch => {
        axios.post('/api/course/section', { classid }).then(
            res => {
                dispatch({ type: 'LOAD_SECTION', classsection: res.data })
            }
        )
    }
}

export const LoadChapter = (classid) => {
    return dispatch => {
        axios.post('/api/course/chapter', { classid }).then(
            res => {
                dispatch({ type: 'LOAD_CHAPTER', classchapter: res.data })
            }
        )
    }
}


export const IsSelect = (userid, classid) => {
    return dispatch => {
        axios.post('/api/course/isselect', { userid, classid }).then(
            res => {
                if (res.data.code === 0) {
                    dispatch({ type: 'IS_SELECT', userid: userid, classid: classid, isSelect: false })
                } else {
                    dispatch({ type: 'IS_SELECT', userid: userid, classid: classid, isSelect: true })
                }
            }
        )
    }
}

export const LoadHotClass = () => {
    return dispatch => {
        axios.get('/api/hotclass').then(
            res => {
                dispatch({ type: "LOAD_HOTCLASS", hotclass: res.data })
            }

        )
    }
}

export const SearchItem = (item) => {
    return dispatch => {
        axios.post('/api/search', { item }).then(
            res => {
                dispatch({ type: 'SEARCH_ITEM', item: item, answer: res.data })
            }
        )
    }
}

export const GetClassNum = (classtype) => {
    return dispatch => {
        axios.post('/api/class/number', { classtype }).then(
            res => {
                let obj = res.data[0];
                return dispatch({ type: 'LOAD_CLASSNUM', classnum: obj['count(*)'], classtype: classtype })
            }
        )
    }
}

export const LoadClass = (info) => {
    return dispatch => {
        axios.post('/api/class', { ...info }).then(
            res => {
                dispatch({ type: 'LOAD_CLASS', classdata: res.data, page: info.page })
            }
        )
    }
}

export const LoadClassType = () => {
    return dispatch => {
        axios.get('/api/classtype').then(
            res => {
                dispatch({ type: 'LOAD_CLASSTYPE', classtype: res.data })
            }
        )
    }
}

export const RestartUser = (userid) => {
    return dispatch => {
        axios.post('/api/user/info/id', { userid }).then(
            res => {
                dispatch({ type: 'RESTART_USER', userphoto: res.data })
            }
        )
    }
}

export const Login = (userInfo) => {
    return dispatch => {
        axios.post('/api/user/login', { ...userInfo }).then(
            res => {
                if (res.data.code === 0) {
                    dispatch({ type: 'LOGIN_FAILD' })
                } else {
                    dispatch({ type: 'INITIAL_USER', info: res.data })
                }
            }
        )
    }
}


export const ChangeHeader = (clicked) => {
    return { type: "CHANGE_HEADER", currect: clicked }
}