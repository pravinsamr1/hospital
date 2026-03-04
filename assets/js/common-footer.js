document.addEventListener("DOMContentLoaded", function() {
    const footer = `
    
    <footer class="footer-wrapper footer-layout1 space-top padding-space footer-backgroundd">
        <div class="widget-area padding-footer">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6 col-xl-4">
                        <div class="widget footer-widget">
                            <div class="th-widget-about">
                                <div class="about-logo">
                                    <a href="index.html"><img src="assets/my-img/logo-white.png" alt="Atek"></a>
                                </div>
                                <p class="about-text">Dr. V.K. Sharma developed breathing-based biomechanics training preventing lifestyle-related musculoskeletal disorders.</p>
                                <div class="th-social">
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <!-- <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a> -->
                                    <a href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-2">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">Useful Link</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="certificates.html">Certificates</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="blog.html">Blogs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-3">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">What We Treat</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">

                                    <li><a href="index.html">Musculoskeletal</a></li>
                                    <li><a href="about.html">Physiological Imbalances</a></li>
                                    <li><a href="service.html">Our Service</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6 col-xl-3">
                        <div class="widget footer-widget ">
                            <h3 class="widget_title">Get In Touch</h3>
                            <div class="th-widget-contact footer-contact">
                                <div class="info-box_text">
                                    <div class="icon">
                                        <img src="assets/img/icon/phone.svg" alt="img">
                                    </div>
                                    <div class="details">
                                        <p><a href="tel:+918178591348" class="info-box_link">+91 8178591348</a></p>
                                        <!-- <p><a href="tel:+09876543210" class="info-box_link">+09 876 543 210</a></p> -->
                                    </div>
                                </div>
                                <div class="info-box_text">
                                    <div class="icon">
                                        <img src="assets/img/icon/envelope.svg" alt="img">
                                    </div>
                                    <div class="details">
                                        <p><a href="mailto:vksgoal@gmail.com" class="info-box_link">vksgoal@gmail.com</a></p>
                                    </div>
                                </div>
                                <div class="info-box_text">
                                    <div class="icon"><img src="assets/img/icon/location-dot.svg" alt="img"></div>
                                    <div class="details">
                                        <p><a href="https://maps.app.goo.gl/QyH2fFoJ9fii93mt7" target="_blank">Greater Kailash Enclave-2, New Delhi, India.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row justify-content-lg-between align-items-center">
                    
                    <div class="">
                        <div class="footer-links footer-last-details">
                            <p class="copyright-text" style="font-size: 16px;">Copyright © 2026 <a href="index.html">popaEyaam</a>. All Rights Reserved</p>
                            <div class="dis-none" style="width: 2px; height: 20px;background: #fff;border-radius: 50px;"></div>
                            <p class="copyright-text"><a style="color: #fff;font-size: 16px;" href="https://www.impinfo.in/" target="_blank">Designed By Imperial Info Systems</a></p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        
                    </div>
                </div>

            </div>
        </div>

    </footer>
    `;

    document.getElementById("footer").innerHTML = footer;

});