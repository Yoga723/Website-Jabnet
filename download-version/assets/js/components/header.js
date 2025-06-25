class Header extends HTMLElement {
     connectedCallback() {
    this.innerHTML = `
      <header class="th-header header-layout1">
        <div class="header-top">
            <div class="container">
                <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
                    <div class="col-auto d-none d-lg-block">
                        <div class="header-links">
                            <ul>
                                <li><i class="fas fa-map-location"></i><a href="https://maps.app.goo.gl/8NQ2r9ZrdgLdbJWY8" target="_blank">Jl. Patriot No.35, Sukagalih, Kec. Tarogong Kidul</a></li>
                                <li><i class="fas fa-phone"></i><a href="https://wa.me/6282180009030" target="_blank">082180009030</a></li>
                                <li><i class="fas fa-envelope"></i><a href="mailto:info@jabnet.id">info@jabnet.id</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="header-social">
                            <span class="social-title">Follow Us On : </span>
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/jabnet.id" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-wrapper">
            <!-- Main Menu Area -->
            <div class="menu-area">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="header-logo">
                                <a class="icon-masking" href="index.html"><img src="assets/img/Jabnet-Logo.png" width="144" height="144" alt="Jabnet"></a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <nav class="main-menu d-none d-lg-inline-block">
                                <ul>
                                    <li>
                                        <a href="/index.html">Home</a>
                                        <!-- <ul class="mega-menu">
                                            <li><a href="#">Multipage</a>
                                                <ul>
                                                    <li><a href="index.html">IT compnany</a></li>
                                                    <li><a href="home-ai.html">AI Home</a></li>
                                                    <li><a href="home-data-analysis.html">Data Analysis</a></li>
                                                    <li><a href="home-digital-product-landing.html">digital product landing page</a></li>
                                                    <li><a href="home-crypto-currency.html">Crypto Currency</a></li>
                                                    <li><a href="home-payment-gateway.html">home Payment Gateway</a></li>
                                                    <li><a href="home-smart.html">home Smart</a></li>
                                                    <li><a href="home-digital-agency.html">Digital Agency</a></li>
                                                    <li><a href="home-web-development.html">Web Development</a></li>
                                                    <li><a href="home-software-company.html">Software Company</a></li>
                                                    <li><a href="home-software-company-2.html">Software Company Style 2</a></li>
                                                    <li><a href="home-startup-company.html">Startup Company</a></li>
                                                    <li><a href="home-it-solution.html">IT Solution</a></li>
                                                    <li><a href="home-web-agency.html">Web Agency</a></li>
                                                    <li><a href="home-startup.html">Home Startup </a></li>

                                                </ul>
                                            </li>
                                            <li><a href="#">Multipage</a>
                                                <ul>
                                                    <li><a href="home-game-solution.html"> Game Solution</a></li>
                                                    <li><a href="home-sass-landing-2.html">Sass Landing Style 2</a></li>
                                                    <li><a href="home-app-landing.html">App Landing</a></li>
                                                    <li><a href="home-ai-technology.html">AI Technology</a></li>
                                                    <li><a href="home-cyber-security.html">Cyber Security</a></li>
                                                    <li><a href="home-cyber-security-2.html">Cyber Security Style 2 </a></li>
                                                    <li><a href="home-it-company.html">IT Company</a></li>
                                                    <li><a href="home-digital-marking.html">Digital Marking</a></li>
                                                    <li><a href="home-it-agency.html">IT Agency</a></li>
                                                    <li><a href="home-crm.html">Home CRM</a></li>
                                                    <li><a href="home-it-consulting.html">IT Consulting</a></li>
                                                    <li><a href="home-help-desk.html">Home Help Desk</a></li>
                                                    <li><a href="home-help-desk-2.html">Home Help Desk style 2</a></li>
                                                    <li><a href="home-sass-marketing.html">Sass Marketing</a></li>
                                                    <li><a href="home-sass-landing.html">Sass Landing</a></li>

                                                </ul>
                                            </li>
                                            <li><a href="#">Onepage</a>
                                                <ul>
                                                    <li><a href="index-op.html">IT compnany Onepage</a></li>
                                                    <li><a href="home-ai-op.html">AI Home Onepage</a></li>
                                                    <li><a href="home-crypto-currency-op.html">Crypto Currency</a></li>
                                                    <li><a href="home-smart-op.html">home Smart</a></li>
                                                    <li><a href="home-digital-agency-op.html">Digital Agency Onepage</a></li>
                                                    <li><a href="home-web-development-op.html">Web Development Onepage</a></li>
                                                    <li><a href="home-software-company-op.html">Software Company Onepage</a></li>
                                                    <li><a href="home-software-company-2-op.html">Software Company Style 2 Onepage</a></li>
                                                    <li><a href="home-startup-company-op.html">Startup Company Onepage</a></li>
                                                    <li><a href="home-it-solution-op.html">IT Solution Onepage</a></li>
                                                    <li><a href="home-web-agency-op.html">Web Agency Onepage</a></li>
                                                    <li><a href="home-sass-landing-2-op.html">Sass Landing Style 2 Onepage</a></li>
                                                    <li><a href="home-app-landing-op.html">App Landing Onepage</a></li>


                                                </ul>
                                            </li>
                                            <li><a href="#">Onepage</a>
                                                <ul>
                                                    <li><a href="home-cyber-security-2-op.html">Cyber Security Style 2 Onepage</a></li>
                                                    <li><a href="home-it-company-op.html">IT Company Onepage</a></li>
                                                    <li><a href="home-digital-marking-op.html"> Digital Marking Onepage</a></li>
                                                    <li><a href="home-it-agency-op.html">IT Agency Onepage</a></li>
                                                    <li><a href="home-crm-op.html">Home CRM Onepage</a></li>
                                                    <li><a href="home-it-consulting-op.html">IT Consulting Onepage</a></li>
                                                    <li><a href="home-help-desk-op.html">Home Help Desk</a></li>
                                                    <li><a href="home-game-solution-op.html"> Game Solution Onepage</a></li>
                                                    <li><a href="home-sass-marketing-op.html">Sass Marketing Onepage</a></li>
                                                    <li><a href="home-sass-landing-op.html">Sass Landing Onepage</a></li>
                                                    <li><a href="home-startup-op.html">Home Startup Onepage </a></li>
                                                    <li><a href="home-ai-technology-op.html">AI Technology Onepage</a></li>
                                                    <li><a href="home-cyber-security-op.html">Cyber Security Onepage</a></li>
                                                </ul>
                                            </li>
                                        </ul> -->
                                    </li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Services</a>
                                        <ul class="sub-menu">
                                            <li><a href="service.html">Services</a></li>
                                            <li><a href="service-details.html">Services Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children">
                                                <a href="#">Shop</a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-details.html">Team Details</a></li>
                                            <li><a href="project.html">Project</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="error.html">Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">Blog</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="header-button">
                                <button type="button" class="th-menu-toggle d-inline-block d-lg-none"><i class="far fa-bars"></i></button>
                            </div>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <div class="header-button">
                                <a href="contact.html" class="th-btn style3 shadow-none">Make Appointment<i class="fas fa-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logo-bg"></div>
            </div>
        </div>
    </header>
    `;
  }
}

customElements.define('main-header', Header);