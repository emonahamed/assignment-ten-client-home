import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <div>
                    <h4>what is cors? </h4>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?

                    </h4>
                    <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment. I am using this to create a userfriendly secure website.</p>
                    <p>Firebase alternatives are Back4App,Parse,Backendless etc</p>
                </div>
                <div>
                    <h4>How does the private route work? </h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div>
                    <h4>What is Node? How does Node work?</h4>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;