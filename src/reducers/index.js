import { combineReducers } from 'redux';
import user from './user.redux';
import classlist from './classlist.redux';
import header from './header.redux';
import classnum from './classnum.redux';
import search from './search.redux';
import course from './course.redux';
import init from './init.redux';
import indeximg from './indeximg.redux';
import myclass from './myclass.redux';

export default combineReducers({
    indeximg,
    course,
    myclass,
    search,
    classnum,
    classlist,
    user,
    header,
    init
});