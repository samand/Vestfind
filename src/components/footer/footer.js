import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';
import './footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer-component">
				<p>
					Copyright &copy; 2018 Vestfind
        		</p>
				<div id="footerLinks">
					<ul>
						<li><Link to={routes.LegalPage}>Legal</Link></li>
						<li><Link to={routes.AboutPage}>About</Link></li>
						<li><Link to={routes.ContactPage}>Contact</Link></li>												
					</ul>
				</div>
			</div>
		);
	}
}

export default Footer;
