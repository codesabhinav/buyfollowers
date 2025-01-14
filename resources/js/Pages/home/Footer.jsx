import React from "react";

const Footer = () => {
    return (
        <div className="w-full relative px-2">
            <div
                className="absolute inset-0 opacity-35 z-10 object-contain"
                style={{
                    backgroundImage: "url('assets/images/footer_bgimage.png')",
                    backgroundSize: "auto",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="absolute inset-0 bg-custom-gradient opacity-95"></div>

            <div className="relative z-30 py-16 w-full md:w-[85%] mx-auto  text-center text-white flex flex-col gap-12">
                <div className="flex flex-wrap justify-between items-start gap-12">
                    <div className="flex flex-col items-start gap-8 w-full lg:w-[25%]">
                        <div className="">
                            <img
                                src="assets/images/footericon.svg"
                                alt="footericon"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4">
                            <span className="text-start">
                                We work with a passion of taking challenges and
                                creating new ones in advertising sector.
                            </span>

                            <div className="border-2 border-dashed p-2 rounded-lg relative w-full">
                                <div className="bg-[#D52E9C] rounded-lg p-2 text-start flex flex-col gap-2">
                                    <span className="text-base font-semibold">
                                        Have Any Question?
                                    </span>
                                    <span className="text-base font-semibold">
                                        Support@buyfollowers.com
                                    </span>
                                </div>
                                <div className="hidden md:block absolute top-5 -right-6 w-12 h-12 lg:w-14 lg:h-14">
                                    <img
                                        src="assets/images/footer_mail.png"
                                        alt="footer_mail"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-between flex-col min-[499px]:flex-row gap-20">
                        <div className="flex flex-col items-start gap-4">
                            <span className="text-base font-semibold">
                                Links:
                            </span>
                            <li className="flex flex-col items-start gap-4 text-base font-semibold">
                                <a href="#" className="text-nowrap">
                                    Home
                                </a>
                                <a href="#" className="text-nowrap">
                                    About
                                </a>
                                <a href="#" className="text-nowrap">
                                    All Products
                                </a>
                                <a href="#" className="text-nowrap">
                                    Free Trail
                                </a>
                                <a href="#" className="text-nowrap">
                                    Blog
                                </a>
                                <a href="#" className="text-nowrap">
                                    About us
                                </a>
                            </li>
                        </div>
                        <div className="flex flex-col items-start gap-8">
                            <span className="text-base font-semibold">
                                Office Info:
                            </span>
                            <li className="flex flex-col items-start gap-4">
                                <div className="flex flex-col items-start gap-4">
                                    <span className="flex items-center gap-2">
                                        <img
                                            src="assets/images/footer_location.svg"
                                            alt="footer_contact"
                                        />
                                        <span>
                                            8819 Xyz South Gate, CA 90280
                                        </span>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <img
                                            src="assets/images/footer_contact.svg"
                                            alt="footer_contact"
                                        />
                                        <span>+1 999-688-4585</span>
                                    </span>
                                </div>
                                <div className="flex flex-col items-start gap-8">
                                    <span className="text-base font-semibold">
                                        Open Hours:
                                    </span>
                                    <span className="flex flex-col gap-4 items-start">
                                        <span>Mon - Sat: 8 am - 5 pm,</span>
                                        <span>Sunday: CLOSED</span>
                                    </span>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <span>Free Products</span>

                        <div className="grid grid-cols-3 gap-2">
                            <img
                                src="/assets/images/footer_youtube.png"
                                alt="footer_youtube"
                            />
                            <img
                                src="/assets/images/footer_facebook.png"
                                alt="footer_facebook"
                            />
                            <img
                                src="/assets/images/footer_tiktok.png"
                                alt="footer_tiktok"
                            />
                            <img
                                src="/assets/images/footer_twitter.png"
                                alt="footer_twitter"
                            />
                            <img
                                src="/assets/images/footer_instagram.png"
                                alt="footer_instagram"
                            />
                            <img
                                src="/assets/images/footer_telegram.png"
                                alt="footer_telegram"
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <span>
                        Copyright © 2023 Buy Followers - All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
