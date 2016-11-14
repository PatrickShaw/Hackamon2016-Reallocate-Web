import React from 'react';
import EditText from '../components/EditText';
import Button from '../components/Button';
import Header from '../layout/Header';
const Page = (props) => (
    <html>
        <head>

        </head>
        <body>
            <Header/>
            <main>
                <div className="card">
                    <h1>Student Login</h1>
                    <EditText hint="Username" name="edit-username"/>
                    <EditText hint="Password" name="edit-password"/>
                    <Button text="Login" href={props.main_page_url}/>
                </div>
            </main>
        </body>
    </html>
);
export default Page;