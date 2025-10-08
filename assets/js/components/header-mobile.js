class HeaderMobile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <header class="th-menu-wrapper">
        <div class="th-menu-area text-center">
            <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo">
                <a class="icon-masking" href="index.html"><span data-mask-src="/assets/img/JABNET-LOGO-BLACK-ORANGE-NEW.webp" width="158" height="158"
                        class="mask-icon"></span><img src="/assets/img/JABNET-LOGO-BLACK-ORANGE-NEW.webp" width="158" height="158" alt="Jabnet"></a>
            </div>

            <div class="th-mobile-menu">
                <ul>
                    <li class="">
                        <a href="index.html">Home</a>
                    </li>
                    <li><a href="pricing.html">Paket Internet</a></li>
                    <li class="menu-item-has-children">
                        <a href="#" disabled>Layanan</a>
                        <ul class="sub-menu">
                            <li><a href="/layanan">List Layanan</a></li>
                            <li><a href="/layanan/layanan-internet.html">Layanan Jasa Koneksi Internet</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#" disabled>Halaman</a>
                        <ul class="sub-menu">
                            <!-- <li class="menu-item-has-children">
                                <a href="#" disabled>Shop</a>
                                <ul class="sub-menu">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-details.html">Shop Details</a></li>
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                </ul>
                            </li> -->
                            <li><a href="team/team.html">Team</a></li>
                            <li><a href="/projects">Project</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="faq.html">Faq Page</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="/kontak.html">Kontak Kami</a>
                    </li>
                    <li><a href="about.html">Tentang Kami</a></li>
                </ul>
            </div>
        </div>
    </header>
    `;
  }
}

customElements.define("main-header-mobile", HeaderMobile);
