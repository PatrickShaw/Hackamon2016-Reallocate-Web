import React from 'react';
import {BasicLayout} from '../layouts/layout_basic';
import {Link} from 'react-router';
import {LoginHeader} from '../subsections/login_header';
import {MonashHeader} from '../subsections/monash_header';
import './page_login.css';
class LoginPage extends React.Component {
    render() {
        return <BasicLayout>
                <MonashHeader/>
                <LoginHeader/>
                <main className="login-main-content">
                    <div className="raised">
                        <h1>Student Login</h1>
                        <div className="form-group">
                            <label htmlFor="input-username">Enter your username (E.g. psha67)</label>
                            <input id="input-username" className="form-control" placeholder="Username" name="edit-username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-password">Enter your password</label>
                            <input id="input-password" className="form-control" placeholder="Password" name="edit-password" type="password"/>
                        </div>
                        <Link to="/">
                            <div className="button-login-container">
                                <div className="raised-interactive button colored colored-interactive">
                                    <p className="txt-primary-light">Login</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </main>
            </BasicLayout>
        }
}
export default LoginPage;