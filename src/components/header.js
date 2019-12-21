import React from 'react';
import backImage from '../images/backImage.jpg';
import logo from '../images/dietataLogo.png'
function Header() {
  return (
    <div>
      <header>
        <nav>
        <div className="container">
        <div className="social clearfix">
        <ul>
					<li><a href="https://my.lazarangelov.diet/contacts">Contacts</a></li>
					</ul>
          <div className="mobileMenu">
							<i className="fa fa-bars" aria-hidden="true"></i>
						</div>
        </div>
        </div>
        </nav>
        <div className="imageHolder home step headerImage10" style={{height:340 ,backgroundImage: `url(${backImage})`}}>

        </div>
        <div className="headings">
        <a href="https://my.lazarangelov.diet/11">
            <div className="logo home">
                <img src={logo} alt="Lazar Angelov" title="Lazar Angelov Meal Plan" />
            </div>
        </a>
        <h1> A questionnaire to help us determine your <span>Personalized meal plan</span></h1>
        <nav className="mobileNav">
			<a href="https://my.lazarangelov.diet/contacts">Contacts</a>
		</nav>
        </div>
        
      </header>
    </div>
  );
}

export default Header;
