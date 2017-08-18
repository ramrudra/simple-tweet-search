import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';

// Styled Components
import NavSection from './styles/NavSection';
import HeaderWrapper from './styles/HeaderWrapper';

class Header extends Component{

  constructor(props) {
    super(props);

    this.state = {
      name: null
    };
  }

  googleSuccessResponse = (res) => {
    this.setState({ name: res.profileObj.name });
  };

  render() {
    return (
      <HeaderWrapper>
       <div className="top-section">
         <h1>Simple Tweet Search</h1>
         { this.state.name ?
           (`Welcome ${this.state.name} !`) :
           (<GoogleLogin
             clientId="710268443751-eajluelslbkbiig8omdl2cfbup3u8uia.apps.googleusercontent.com"
             buttonText="Sign with google"
             onSuccess={this.googleSuccessResponse}
             onFailure={(res) => console.log(res)}
           />)
         }
       </div>
        <NavSection>
          <li className={classNames({active: this.props.path === '/'})}>
            <Link to="/">Search #</Link>
          </li>
          <li className={classNames({active: this.props.path === '/favourites'})}>
            <Link to="/favourites">Favourite Tweets</Link>
          </li>
        </NavSection>
      </HeaderWrapper>
    );
  }
}

export default Header;
