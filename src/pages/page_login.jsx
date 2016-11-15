import React from 'react';
import {EditText} from '../components/edit_text';
import {Button} from '../components/button';
import {ReAllocateHeader} from '../subsections/reallocate_header';
import {Card} from '../components/card';
import {MainLayout} from '../layouts/layout_main';
import {browserHistory} from 'react-router';
import {get_home_page_url} from '../urls/api_urls';
import './page_login.css';
class LoginPage extends React.Component {
    constructor() {
        super();
    }
    login() {
        browserHistory.push("/home");
    }
    render() {
        return <MainLayout>
            <ReAllocateHeader/>
            <main className="login-main-content">
                <div className="card-container">
                    <Card>
                        <h1>Student Login</h1>
                        <EditText hint="Username" name="edit-username"/>
                        <EditText hint="Password" name="edit-password" type="password"/>
                        <Button text="Login" onClick={this.login.bind(this)}/>
                    </Card>
                </div>
            </main>
        </MainLayout>;
    }
}
export default LoginPage;