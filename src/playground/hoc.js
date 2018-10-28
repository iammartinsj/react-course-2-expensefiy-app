//HOC -> Higher Order Component
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This is the info {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.. Please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requiredAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? 
      (<WrappedComponent {...props} />) : 
      (<p>Please Login to view the info</p>)
      }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Is about HOC" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));