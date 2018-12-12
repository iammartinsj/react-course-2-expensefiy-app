import React from 'react';
import { connect } from 'react-redux';
import { 
  startLogin, 
  startLoginWithFacebook, 
  startLoginWithGithub,
  startLoginWithTwitter
} from '../actions/auth';

export const LoginPage = ({ 
  startLogin, 
  startLoginWithFacebook, 
  startLoginWithGithub,
  startLoginWithTwitter 
}) =>  (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <a className="button button--signin" onClick={startLogin}>
        <img alt="Google" src="./images/google_icon.png" className="button--signin__img" />
        <span className="button--signin__text">Login with Google</span>
      </a>
      <a className="button button--signin" onClick={startLoginWithFacebook}>
        <img alt="Twitter" src="./images/584ac2d03ac3a570f94a666d.png" className="button--signin__img" />
        <span className="button--signin__text">Login with Facebook</span>
      </a>
      <a className="button button--signin" onClick={startLoginWithTwitter}>
        <img alt="Twitter" src="./images/twitter_icon.png" className="button--signin__img" />
        <span className="button--signin__text">Login with Twitter</span>
      </a>
      <a className="button button--signin" onClick={startLoginWithGithub}>
        <img alt="Twitter" src="./images/github_icon.png" className="button--signin__img" />
        <span className="button--signin__text">Login with GitHub</span>
      </a>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
  startLoginWithGithub: () => dispatch(startLoginWithGithub()),
  startLoginWithTwitter: () => dispatch(startLoginWithTwitter())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);