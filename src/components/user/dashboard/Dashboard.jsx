import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {USER_TICKETS_ROUTE} from '../../../routes/routes';
import style from './Dashboard.module.scss';

import Topbar from '../../shared/Topbar/Topbar';
import Leftbar from '../../shared/Leftbar/Leftbar';
import MyTickets from './MyTickets/MyTickets';


const Dashboard = (props) => {
    if (!props.isAuth || props.role !== 'user') {
        return <Redirect to='/'/>
    }

    return (
        <div className="dashboardWrap">
            <Leftbar/>
            <div>
                <Topbar/>
                <div className={style.contentWrap}>
                    <Switch>
                        <Route exact path={USER_TICKETS_ROUTE} render={() => <MyTickets/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    role: state.user.role
});
export default compose(connect(mapStateToProps, {}), withRouter)(Dashboard);

