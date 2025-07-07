class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <footer class="footer-wrapper footer-layout1">
        <div class="footer-top">
            <div class="logo-bg"></div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-3">
                        <div class="footer-logo">
                            <a class="icon-masking" href="index.html"><img src="assets/img/jabnet-logo-dark.webp"
                                    height="194" width="194" alt="Jabnet"></a>
                        </div>
                    </div>
                    <div class="col-xl-9">
                        <div class="footer-contact-wrap gap-3">
                            <div class="footer-contact">
                                <div class="footer-contact_icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="media-body">
                                    <span class="footer-contact_text">Quick Call Us:</span>
                                    <a href="https://wa.me/6282180009030" class="footer-contact_link">0821-8000-9030</a>
                                </div>
                            </div>
                            <div class="footer-contact">
                                <div class="footer-contact_icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="media-body">
                                    <span class="footer-contact_text">Mail Us On:</span>
                                    <a href="mailto:info@jabnet.id" class="footer-contact_link">info@jabnet.id
                                </div>
                            </div>
                            <div class="footer-contact">
                                <div class="footer-contact_icon">
                                    <i class="fas fa-location-dot"></i>
                                </div>
                                <div class="media-body">
                                    <a href="https://maps.app.goo.gl/8NQ2r9ZrdgLdbJWY8" target="_blank"
                                        class="footer-contact_link">Jl. Patriot No.35, Sukagalih, Kec. Tarogong
                                        Kidul</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="widget-area">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6 col-xxl-3 col-xl-4">
                        <div class="widget footer-widget">
                            <h3 class="widget_title">Tentang Perusahaan</h3>
                            <div class="th-widget-about">
                                <p class="about-text">JABNET menghadirkan solusi internet terbaik dengan kecepatan
                                    tinggi dan koneksi stabil untuk mendukung kebutuhan digital anda.</p>
                                <div class="th-social">
                                    <a href="https://www.facebook.com/jabnet.id/" target="_blank"><i
                                            class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.twitter.com/" target="_blank"><i
                                            class="fab fa-twitter"></i></a>
                                    <!-- <a href="https://www.instagram.com/jabnet.id/" target="_blank"><i class="fab fa-linkedin-in"></i></a> -->
                                    <a href="https://www.instagram.com/jabnet.id/" target="_blank"><i
                                            class="fab fa-instagram"></i></a>
                                    <a href="https://wa.me/6282180009030" target="_blank"><i
                                            class="fab fa-whatsapp"></i></a>
                                    <!-- <a href="https://www.youtube.com/" target="_blank"><i
                                            class="fab fa-youtube"></i></a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">Quick Links</h3>
                            <div class="menu-all-pages-container">
                                <ul class=" ">
                                    <li><a href="about.html" target="_blank">About Us</a></li>
                                    <li><a href="team.html" target="_blank">Meet Our Team</a></li>
                                    <li><a href="project.html" target="_blank">Our Projects</a></li>
                                    <li><a href="faq.html" target="_blank">Help & FAQs</a></li>
                                    <li><a href="contact.html" target="_blank">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">IT SERVICES</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">
                                    <li><a href="service-details.html">Internet & Manage Service</a></li>
                                    <li><a href="service-details.html">Cloud Manage</a></li>
                                    <li><a href="service-details.html">Jabnet Academy</a></li>
                                    <li><a href="service-details.html">Data Center</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <h3 class="widget_title">Recent Posts</h3>
                            <div class="recent-post-wrap">
                                <div class="recent-post">
                                    <div class="media-img">
                                        <a href="blog-krisna-beach-hotel.html" target="_blank"><img loading="lazy" src="assets/img/blog/1x1/blog-krisna-1x0.8.webp"
                                                alt="Blog Image"></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="post-title"><a class="text-inherit"
                                                href="blog-krisna-beach-hotel.html" target="_blank">Pemasangan Internet untuk Krisna Beach Hotel</a>
                                        </h4>
                                        <div class="recent-post-meta">
                                            <a href="blog-krisna-beach-hotel.html" target="_blank"><i class="fal fa-calendar-days"></i>21 June, 2025</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="recent-post">
                                    <div class="media-img">
                                        <a href="blog-pelatihan-mtcna.html" target="_blank"><img loading="lazy" src="assets/img/blog/1x1/blog-mtcna.webp"
                                                alt="Blog Image"></a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="post-title"><a class="text-inherit" href="blog-pelatihan-mtcna.html" target="_blank">Pelatihan MTCNA</a></h4>
                                        <div class="recent-post-meta">
                                            <a href="blog-pelatihan-mtcna.html" target="_blank"><i class="fal fa-calendar-days"></i>22 June, 2025</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-wrap bg-title">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                        <p class="copyright-text">Copyright <i class="fal fa-copyright"></i> 2025 <a
                                href="#">Jabnet</a>. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 text-end d-none d-lg-block">
                        <div class="footer-links">
                            <ul>
                                <li><a href="about.html">Terms & Condition</a></li>
                                <li><a href="about.html">Careers</a></li>
                                <li><a href="about.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-left">
            <img src="assets/img/shape/footer_shape_2.svg" alt="shape">
        </div>
        <div class="shape-right">
            <div class="particle-1" id="particle-5"></div>
        </div>
    </footer>
    `;
  }
}

customElements.define("main-footer", Footer);
