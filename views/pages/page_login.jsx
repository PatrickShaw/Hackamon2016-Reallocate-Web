import React from 'react';
import {EditText} from '../components/edit_text';
import {Button} from '../components/button';
import {ReallocateHeader} from '../subsections/reallocate_header';
import {BasicLayout} from '../layouts/layout_basic';
const LoginPage = (props) => (
    <BasicLayout>
        <ReallocateHeader/>
        <main>
            <div className="card">
                <h1>Student Login</h1>
                <EditText hint="Username" name="edit-username"/>
                <EditText hint="Password" name="edit-password"/>
                <Button text="Login" href={`${props.base_url}?username=${""}&password=${""}`}/>
            </div>
        </main>
    </BasicLayout>
);
export default LoginPage;