document.addEventListener("DOMContentLoaded", function() {
    const header = `
    
    <div class="th-menu-wrapper onepage-nav">
        <div class="th-menu-area text-center">
            <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo">
                <a href="index.html"><img src="assets/my-img/logo.png" alt="Atek"></a>
            </div>
            <div class="th-mobile-menu">
                <ul>
                    <li class="mega-menu-wrap">
                        <a class="active" href="index.html">Home</a>
                    </li>
                    <li class="">
                        <a href="about.html">About Us</a>
                    </li>
                    <li class="">
                        <a href="about.html">what we Treat</a>
                        <!-- <ul class="sub-menu">
                            <li><a href="about.html">Neck Pain</a></li>
                            <li><a href="about2.html">Back Pain</a></li>
                            <li><a href="about2.html">Shoulder Dysfunction</a></li>
                            <li><a href="about2.html">Postural Imbalance</a></li>
                            <li><a href="about2.html">Sports Injuries</a></li>
                        </ul> -->
                    </li>
                    <li class="">
                                        <a href="#">Services</a>
                                        <!-- <ul class="sub-menu">
                                            <li><a href="about.html">Posture Assessment</a></li>
                                            <li><a href="about2.html">Breathing Retraining</a></li>
                                            <li><a href="about2.html">Shoulder Dysfunction</a></li>
                                            <li><a href="about2.html">Postural Imbalance</a></li>
                                            <li><a href="about2.html">Sports Injuries</a></li>
                                        </ul> -->
                                    </li>
                                    <li class="">
                                        <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li class="">
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li class="">
                                        <a href="blog.html">Blog</a>
                                    </li>
                    <li class="">
                        <a href="contact.html">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div><!--==============================
	Header Area
==============================-->
    <header class="th-header header-layout1">
        <div class="header-top">
            <div class="container th-container">
                <div class="row justify-content-center justify-content-xl-between align-items-center">
                    <div class="col-auto d-none d-md-block">
                        <div class="header-links">
                            <ul>
                                <li class="d-none d-xl-inline-block"><i class="fa-sharp fa-regular  fa-location-dot"></i>
                                    <span>Greater Kailash Enclave-2, New Delhi</span>
                                </li>
                                <li class="d-none d-xl-inline-block"><i class="fa-regular fa-clock"></i>
                                    <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="header-right style2">
                            <div class="header-links">
                                <div class="th-social header-th-social">
                                    <a href="https://www.facebook.com/vijay.k.sharma.3367" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <!-- <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a> -->
                                    <a href="https://www.instagram.com/vijaykumarsharma2665?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-wrapper">
            <!-- Main Menu Area -->
            <div class="menu-area">
                <div class="container th-container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="header-logo">
                                <a href="index.html">
                                    <img src="assets/my-img/logo.png" alt="Atek" style="height: 80px !important;">
                                </a>
                            </div>
                        </div>
                        <div class="col-auto me-xxl-auto">
                            <nav class="main-menu d-none d-xl-inline-block">
                                <ul>
                                    <li class=" mega-menu-wrap">
                                        <a class="active" href="index.html">Home</a>
                                    </li>
                                    <li class="">
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li class="">
                                        <a href="about.html">what we Treat</a>
                                        <!-- <ul class="sub-menu">
                                            <li><a href="about.html">Neck Pain</a></li>
                                            <li><a href="about2.html">Back Pain</a></li>
                                            <li><a href="about2.html">Shoulder Dysfunction</a></li>
                                            <li><a href="about2.html">Postural Imbalance</a></li>
                                            <li><a href="about2.html">Sports Injuries</a></li>
                                        </ul> -->
                                    </li>
                                    <li class="">
                                        <a href="#">Services</a>
                                        <!-- <ul class="sub-menu">
                                            <li><a href="about.html">Posture Assessment</a></li>
                                            <li><a href="about2.html">Breathing Retraining</a></li>
                                            <li><a href="about2.html">Shoulder Dysfunction</a></li>
                                            <li><a href="about2.html">Postural Imbalance</a></li>
                                            <li><a href="about2.html">Sports Injuries</a></li>
                                        </ul> -->
                                    </li>
                                    <li class="">
                                        <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li class="">
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li class="">
                                        <a href="blog.html">Blog</a>
                                    </li>
                                </ul>
                            </nav>
                            <button type="button" class="th-menu-toggle d-block d-xl-none"><i class="far fa-bars"></i></button>
                        </div>
                        <div class="col-auto d-none d-xl-block">
                            <div class="header-button">
                                <a href="contact.html" class="th-btn th-icon">Contact us <i class="fa-light fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logo-bg" data-mask-src="assets/img/logo_bg_mask.png"></div>
            </div>
        </div>
    </header>
    `;

    document.getElementById("header").innerHTML = header;
});