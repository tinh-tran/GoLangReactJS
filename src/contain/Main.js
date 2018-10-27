import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContain from './HomeContain';
import ClassContain from './ClassContain';
import DataContain from './DataContain';
import CourseContain from './CourseContain';
import UserContain from './UserContain';
import SearchContain from './SearchContain';
import NotFoundContain from './NotFoundContain';


class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={HomeContain} />
                    <Route path='/class' exact component={ClassContain} />
                    <Route path='/class/:id' component={CourseContain} />
                    <Route path='/bigdata' exact component={DataContain} />
                    <Route path='/user' exact component={UserContain} />
                    <Route path='/search' exact component={SearchContain} />
                    <Route component={NotFoundContain} />
                </Switch>
            </div>
        )
    }
}

export default Main;

