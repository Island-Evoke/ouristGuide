
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BecomeExpert() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main className="main">
					<section className="box-section box-breadcrumb background-100">
						<div className="container">
							<ul className="breadcrumbs">
								<li> <Link href="/">Home</Link><span className="arrow-right">
									<svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></span></li>
								<li> <span className="text-breadcrumb">Contact</span></li>
							</ul>
						</div>
					</section>
					<section className="section-box box-become-video background-body">
						<div className="container">
							<div className="text-center">
								<div className="d-flex justify-content-center"><span className="btn btn-brand-secondary wow fadeInUp"> <img className="mr-10" src="/assets/imgs/page/homepage4/earth.svg" alt="Travile" />Work With Us</span></div>
								<h2 className="mt-15 mb-15 neutral-1000 wow fadeInUp">Become Local Expert</h2>
								<p className="text-xl-medium neutral-1000 mb-55 wow fadeInUp">Anywhere you choose, you have the potential to become a Local Expert in anything</p>
							</div>
							<div className="box-image-video mb-0"> <img className="bdrd-16" src="/assets/imgs/page/pages/banner2.png" alt="Travilla" />
								<VideoPopup vdocls="btn-play-video popup-youtube" />
							</div>
						</div>
					</section>
					<section className="box-section box-what-offer background-body">
						<div className="container">
							<h3>What we offer?</h3>
							<p className="text-xl-medium neutral-500">Just 4 easy and quick steps</p>
							<div className="box-list-offers mt-35 wow fadeInUp">
								<div className="row">
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/earth.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Attractions  Tours</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/tour.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Group Tours</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/custom.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Custom Trips</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/car.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Car Rentals</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/local.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Local Guides</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/themed.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Themed Tours</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/ride.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Ride hailing</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="card-why-travel card-business background-card wow fadeInUp">
											<div className="card-image"> <img src="/assets/imgs/page/pages/visas.png" alt="Travila" /></div>
											<div className="card-info"> <Link className="text-xl-bold card-title" href="#">Visas</Link>
												<p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
													<svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
													</svg></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-how-it-work-3 background-body">
						<div className="box-how-it-work-inner background-3">
							<div className="container">
								<h3 className="neutral-1000 wow fadeInUp">How It Work ?</h3>
								<p className="text-xl-medium neutral-500 mb-30 wow fadeInUp">Just 4 easy and quick steps</p>
								<div className="row">
									<div className="col-lg-10">
										<ul className="list-steps list-steps-2-col wow fadeInUp">
											<li>
												<div className="step-no">   <span>1</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Search for Flights</p>
													<p className="text-sm-medium neutral-500">Begin your journey by entering your departure city, destination, travel dates, and the number of passengers</p>
												</div>
											</li>
											<li>
												<div className="step-no">   <span>2</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Select Your Flight</p>
													<p className="text-sm-medium neutral-500">Review the search results and compare the details of each flight, including departure and arrival times, durations, and prices.</p>
												</div>
											</li>
											<li>
												<div className="step-no">   <span>3</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Provide Passenger Information</p>
													<p className="text-sm-medium neutral-500">Enter the required passenger information for all individuals traveling, including names, contact details, and any special requests</p>
												</div>
											</li>
											<li>
												<div className="step-no">   <span>4</span></div>
												<div className="step-info">
													<p className="text-xl-bold neutral-1000">Payment and Confirmation</p>
													<p className="text-sm-medium neutral-500">Review the booking summary, including the total cost, flight details, and passenger information</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-why-book-travila-3 background-body">
						<div className="container">
							<div className="text-center">
								<h2 className="neutral-1000"> <span>Why Should You </span>Choose Us?</h2>
								<p className="text-xl-medium neutral-500">Any questions? We would be happy to help you.</p>
							</div>
							<div className="row mt-65">
								<div className="col-lg-3 col-sm-6">
									<div className="card-why wow fadeInUp">
										<div className="card-image">
											<svg width={48} height={46} viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_403_10133)">
													<mask id="mask0_403_10133" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={46}>
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="white" />
													</mask>
													<g mask="url(#mask0_403_10133)">
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="#FFF0EC" />
													</g>
												</g>
												<g clipPath="url(#clip1_403_10133)">
													<path d="M36.7991 19.6497C37.6729 17.7727 38.3125 15.8059 38.3125 14.0681C38.3125 10.1707 35.1428 7 31.2468 7C28.502 7 26.1179 8.57373 24.9485 10.8665C24.5408 10.8313 24.1284 10.8125 23.7188 10.8125C15.9292 10.8125 9.625 17.116 9.625 24.9062C9.625 32.6958 15.9285 39 23.7188 39C31.5083 39 37.8125 32.6965 37.8125 24.9062C37.8125 23.1501 37.4973 21.3953 36.7991 19.6497ZM31.2468 8.875C34.1089 8.875 36.4375 11.2046 36.4375 14.0681C36.4375 17.7637 32.8066 23.0515 31.2166 25.1899C29.1726 22.4116 26.0562 17.511 26.0562 14.0681C26.0559 11.2046 28.3845 8.875 31.2468 8.875ZM14.7444 16.6235L21.0342 19.7683L20.3132 23.3728L17.8237 25.0325C17.563 25.2063 17.4062 25.499 17.4062 25.8125V29.8315L13.2817 31.2539C12.1519 29.4026 11.5 27.2292 11.5 24.9062C11.5 21.7131 12.7319 18.8025 14.7444 16.6235ZM14.4338 32.8398L18.6494 31.3862C19.0276 31.2559 19.2812 30.8999 19.2812 30.5V26.3142L21.6763 24.7175C21.8831 24.5796 22.0269 24.3652 22.0754 24.1213L23.0129 19.4338C23.0959 19.0193 22.8911 18.6006 22.5129 18.4116L16.2207 15.2654C18.5173 13.4751 21.3608 12.5608 24.314 12.7024C23.7209 15.7197 25.3665 19.3184 26.8965 22.0059L24.3076 24.1533C23.9229 24.4727 23.8562 25.0376 24.1562 25.4375L25.8438 27.6875H22.0938C21.5759 27.6875 21.1562 28.1072 21.1562 28.625V34.25C21.1562 34.7678 21.5759 35.1875 22.0938 35.1875H26.3855L27.2642 36.5999C22.7056 37.9846 17.655 36.604 14.4338 32.8398ZM29.0398 35.9043L27.7021 33.7546C27.531 33.4797 27.2302 33.3125 26.9062 33.3125H23.0312V29.5625H27.7188C28.4895 29.5625 28.9319 28.6799 28.4688 28.0625L26.1919 25.0266L27.8745 23.6309C29.1873 25.7019 30.3716 27.1838 30.4824 27.3213C30.8562 27.7852 31.563 27.7871 31.9392 27.3252C32.0793 27.1533 33.918 24.8787 35.5845 21.9771C35.8188 22.9292 35.9375 23.9092 35.9375 24.9062C35.9375 29.7375 33.1189 33.9226 29.0398 35.9043Z" fill="black" />
													<path d="M31.2483 17.3633C33.0615 17.3633 34.5366 15.8877 34.5366 14.0742C34.5366 12.2605 33.0613 10.7849 31.2483 10.7849C29.4351 10.7849 27.96 12.2605 27.96 14.0742C27.96 15.8877 29.4351 17.3633 31.2483 17.3633ZM31.2483 12.6599C32.0276 12.6599 32.6616 13.2944 32.6616 14.0742C32.6616 14.8538 32.0276 15.4883 31.2483 15.4883C30.469 15.4883 29.835 14.8538 29.835 14.0742C29.835 13.2944 30.469 12.6599 31.2483 12.6599Z" fill="black" />
												</g>
												<defs>
													<clipPath id="clip0_403_10133">
														<rect width={48} height="45.2958" fill="white" />
													</clipPath>
													<clipPath id="clip1_403_10133">
														<rect width={32} height={32} fill="white" transform="translate(8 7)" />
													</clipPath>
												</defs>
											</svg>
										</div>
										<div className="card-info">
											<h6 className="text-xl-bold neutral-1000">300,000+ Experiences</h6>
											<p className="text-lg-medium neutral-500">Make memories around the world.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-sm-6">
									<div className="card-why wow fadeInUp">
										<div className="card-image">
											<svg width={48} height={46} viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_21_10174)">
													<mask id="mask0_21_10174" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={46}>
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="white" />
													</mask>
													<g mask="url(#mask0_21_10174)">
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="#E4F9F9" />
													</g>
												</g>
												<path d="M35.5625 21.75V7.9375C35.5625 7.41975 35.1428 7 34.625 7H13.375C12.8572 7 12.4375 7.41975 12.4375 7.9375V21.75C12.4375 21.9986 12.5363 22.2371 12.7121 22.4129L13.2992 23L12.7121 23.5871C12.5363 23.7629 12.4375 24.0014 12.4375 24.25V38.0625C12.4375 38.5803 12.8572 39 13.375 39H34.625C35.1428 39 35.5625 38.5803 35.5625 38.0625V24.25C35.5625 24.0014 35.4637 23.7629 35.2879 23.5871L34.7008 23L35.2879 22.4129C35.4637 22.2371 35.5625 21.9986 35.5625 21.75ZM33.6875 21.3617L32.7121 22.3371C32.346 22.7032 32.346 23.2968 32.7121 23.6629L33.6875 24.6383V37.125H14.3125V24.6383L15.2879 23.6629C15.654 23.2967 15.654 22.7032 15.2879 22.3371L14.3125 21.3617V8.875H33.6875V21.3617Z" fill="black" />
												<path d="M17.7672 17.1101L19.2459 18.4214C19.5478 18.6891 19.9872 18.7336 20.3367 18.5318L24.7735 15.9702L24.5962 18.7197C24.5629 19.2364 24.9548 19.6822 25.4715 19.7156C25.9882 19.749 26.434 19.3571 26.4674 18.8404L26.7252 14.8435L30.0795 12.9069C30.5279 12.648 30.6815 12.0746 30.4226 11.6262C30.1637 11.1778 29.5903 11.0242 29.142 11.2831L25.7877 13.2197L22.1973 11.4446C21.7332 11.2151 21.171 11.4053 20.9414 11.8694C20.7119 12.3336 20.9022 12.8959 21.3663 13.1254L23.836 14.3466L19.9843 16.5703L19.0112 15.7073C18.6238 15.3639 18.0313 15.3994 17.6877 15.7867C17.3442 16.1741 17.3798 16.7666 17.7672 17.1101Z" fill="black" />
												<path d="M17.125 27.75H30.875C31.3928 27.75 31.8125 27.3303 31.8125 26.8125C31.8125 26.2947 31.3928 25.875 30.875 25.875H17.125C16.6072 25.875 16.1875 26.2947 16.1875 26.8125C16.1875 27.3303 16.6072 27.75 17.125 27.75Z" fill="black" />
												<path d="M17.125 31.5H24C24.5178 31.5 24.9375 31.0803 24.9375 30.5625C24.9375 30.0447 24.5178 29.625 24 29.625H17.125C16.6072 29.625 16.1875 30.0447 16.1875 30.5625C16.1875 31.0803 16.6072 31.5 17.125 31.5Z" fill="black" />
												<path d="M17.125 35.25H24C24.5178 35.25 24.9375 34.8303 24.9375 34.3125C24.9375 33.7947 24.5178 33.375 24 33.375H17.125C16.6072 33.375 16.1875 33.7947 16.1875 34.3125C16.1875 34.8303 16.6072 35.25 17.125 35.25Z" fill="black" />
												<path d="M18.375 23.9375H19.625C20.1428 23.9375 20.5625 23.5178 20.5625 23C20.5625 22.4822 20.1428 22.0625 19.625 22.0625H18.375C17.8572 22.0625 17.4375 22.4822 17.4375 23C17.4375 23.5178 17.8572 23.9375 18.375 23.9375Z" fill="black" />
												<path d="M24.625 22.0625H23.375C22.8572 22.0625 22.4375 22.4822 22.4375 23C22.4375 23.5178 22.8572 23.9375 23.375 23.9375H24.625C25.1428 23.9375 25.5625 23.5178 25.5625 23C25.5625 22.4822 25.1428 22.0625 24.625 22.0625Z" fill="black" />
												<path d="M29.625 22.0625H28.375C27.8572 22.0625 27.4375 22.4822 27.4375 23C27.4375 23.5178 27.8572 23.9375 28.375 23.9375H29.625C30.1428 23.9375 30.5625 23.5178 30.5625 23C30.5625 22.4822 30.1428 22.0625 29.625 22.0625Z" fill="black" />
												<path d="M29 29.625C27.4492 29.625 26.1875 30.8867 26.1875 32.4375C26.1875 33.9883 27.4492 35.25 29 35.25C30.5508 35.25 31.8125 33.9883 31.8125 32.4375C31.8125 30.8867 30.5508 29.625 29 29.625ZM29 33.375C28.4831 33.375 28.0625 32.9544 28.0625 32.4375C28.0625 31.9206 28.4831 31.5 29 31.5C29.5169 31.5 29.9375 31.9206 29.9375 32.4375C29.9375 32.9544 29.5169 33.375 29 33.375Z" fill="black" />
												<defs>
													<clipPath id="clip0_21_10174">
														<rect width={48} height="45.2958" fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
										<div className="card-info">
											<h6 className="text-xl-bold neutral-1000">Reserve now, Pay later</h6>
											<p className="text-lg-medium neutral-500">Book your spot first, pay later.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-sm-6">
									<div className="card-why wow fadeInUp">
										<div className="card-image">
											<svg width={48} height={46} viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_21_16353)">
													<mask id="mask0_21_16353" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={46}>
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="white" />
													</mask>
													<g mask="url(#mask0_21_16353)">
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="#E3F0FF" />
													</g>
												</g>
												<path d="M29.6484 14.5312H26.8203V8.875H27.7656C28.2834 8.875 28.7031 8.45525 28.7031 7.9375C28.7031 7.41975 28.2834 7 27.7656 7H20.2344C19.7166 7 19.2969 7.41975 19.2969 7.9375C19.2969 8.45525 19.7166 8.875 20.2344 8.875H21.1797V14.5312H18.3516C16.7964 14.5312 15.5312 15.7964 15.5312 17.3516V32.4141C15.5312 33.7144 16.4161 34.8114 17.615 35.1362C17.4859 35.4592 17.4141 35.8111 17.4141 36.1797C17.4141 37.7348 18.6793 39 20.2344 39C21.7895 39 23.0547 37.7348 23.0547 36.1797C23.0547 35.8482 22.9968 35.5301 22.8912 35.2344H25.1087C25.0032 35.5301 24.9452 35.8482 24.9452 36.1797C24.9452 37.7348 26.2104 39 27.7656 39C29.3207 39 30.5859 37.7348 30.5859 36.1797C30.5859 35.8111 30.5141 35.4592 30.3849 35.1362C31.5839 34.8114 32.4687 33.7144 32.4687 32.4141V17.3516C32.4687 15.7964 31.2036 14.5312 29.6484 14.5312ZM23.0547 8.875H24.9453V14.5312H23.0547V8.875ZM21.1797 36.1797C21.1797 36.7009 20.7556 37.125 20.2344 37.125C19.7131 37.125 19.2891 36.7009 19.2891 36.1797C19.2891 35.6584 19.7131 35.2344 20.2344 35.2344C20.7556 35.2344 21.1797 35.6584 21.1797 36.1797ZM27.7656 37.125C27.2444 37.125 26.8203 36.7009 26.8203 36.1797C26.8203 35.6584 27.2444 35.2344 27.7656 35.2344C28.2869 35.2344 28.7109 35.6584 28.7109 36.1797C28.7109 36.7009 28.2869 37.125 27.7656 37.125ZM30.5938 32.4141C30.5938 32.9353 30.1697 33.3594 29.6484 33.3594H18.3516C17.8303 33.3594 17.4062 32.9353 17.4062 32.4141V17.3516C17.4062 16.8303 17.8303 16.4062 18.3516 16.4062H29.6484C30.1697 16.4062 30.5938 16.8303 30.5938 17.3516V32.4141Z" fill="black" />
												<path d="M20.2344 18.2969C19.7166 18.2969 19.2969 18.7166 19.2969 19.2344V30.5312C19.2969 31.049 19.7166 31.4688 20.2344 31.4688C20.7521 31.4688 21.1719 31.049 21.1719 30.5312V19.2344C21.1719 18.7166 20.7521 18.2969 20.2344 18.2969Z" fill="black" />
												<path d="M24 18.2969C23.4822 18.2969 23.0625 18.7166 23.0625 19.2344V30.5312C23.0625 31.049 23.4822 31.4688 24 31.4688C24.5178 31.4688 24.9375 31.049 24.9375 30.5312V19.2344C24.9375 18.7166 24.5178 18.2969 24 18.2969Z" fill="black" />
												<path d="M27.7656 18.2969C27.2479 18.2969 26.8281 18.7166 26.8281 19.2344V30.5312C26.8281 31.049 27.2479 31.4688 27.7656 31.4688C28.2834 31.4688 28.7031 31.049 28.7031 30.5312V19.2344C28.7031 18.7166 28.2834 18.2969 27.7656 18.2969Z" fill="black" />
												<defs>
													<clipPath id="clip0_21_16353">
														<rect width={48} height="45.2958" fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
										<div className="card-info">
											<h6 className="text-xl-bold neutral-1000">Trusted Reviews</h6>
											<p className="text-lg-medium neutral-500">4.8 stars from 160,000+ Trustpilot reviews.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-sm-6">
									<div className="card-why wow fadeInUp">
										<div className="card-image">
											<svg width={48} height={46} viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_21_15576)">
													<mask id="mask0_21_15576" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={48} height={46}>
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="white" />
													</mask>
													<g mask="url(#mask0_21_15576)">
														<path d="M44.819 32.7853C42.7514 37.691 38.9274 41.3068 33.347 43.6326C27.7666 45.9585 22.5864 45.6066 17.8064 42.5772C13.0264 39.5478 8.40207 35.932 3.93332 31.7298C-0.535422 27.5277 -0.980074 22.9347 2.59937 17.9507C6.17881 12.9668 10.8032 8.35425 16.4725 4.11303C22.1418 -0.128193 28.8227 -1.01748 36.5151 1.44516C44.2076 3.90781 48.0316 8.52038 47.9871 15.2829C47.9427 22.0454 46.8866 27.8795 44.819 32.7853Z" fill="#F6F3FC" />
													</g>
												</g>
												<g clipPath="url(#clip1_21_15576)">
													<path d="M23.9999 7C17.3643 7 11.9658 12.3984 11.9658 19.034V26.966C11.9658 33.6015 17.3643 38.9999 23.9999 38.9999C30.6354 38.9999 36.0339 33.6015 36.0339 26.966V19.034C36.0339 12.3984 30.6354 7 23.9999 7ZM34.1581 26.966C34.1581 32.5672 29.6011 37.1242 23.9999 37.1242C18.3986 37.1242 13.8416 32.5672 13.8416 26.966V19.034C13.8416 13.4328 18.3986 8.87578 23.9999 8.87578C29.6011 8.87578 34.1581 13.4328 34.1581 19.034V26.966Z" fill="black" />
													<path d="M32.2822 19.034C32.2822 14.4671 28.5667 10.7516 23.9997 10.7516C19.4328 10.7516 15.7173 14.4671 15.7173 19.034V26.966C15.7173 31.5329 19.4328 35.2484 23.9997 35.2484C27.358 35.2484 30.2558 33.2392 31.5545 30.3598C31.5552 30.3582 31.5558 30.3567 31.5566 30.3551C32.0226 29.32 32.2823 28.1728 32.2823 26.966V24.712C32.2823 24.7067 32.2823 24.7015 32.2823 24.6962V19.034H32.2822ZM24.1923 25.9264C24.1973 24.9977 24.9545 24.2436 25.8843 24.2436C26.7104 24.2436 27.429 24.8577 27.5559 25.6719C27.6144 26.0474 27.8936 26.3504 28.2631 26.4394C28.6322 26.5283 29.0191 26.3856 29.242 26.0779C29.5172 25.6981 29.9405 25.4781 30.4064 25.4706V26.9661C30.4064 27.6968 30.2831 28.3992 30.0567 29.054H23.1368C22.5445 29.054 22.0626 28.5721 22.0626 27.9798C22.0626 27.3875 22.5445 26.9056 23.1368 26.9056H23.2552C23.5058 26.9056 23.746 26.8053 23.9222 26.6271C24.0983 26.4489 24.1959 26.2076 24.193 25.957C24.1929 25.9473 24.1926 25.9374 24.1923 25.9264ZM23.9997 12.6274C27.4052 12.6274 30.1982 15.2982 30.3949 18.6552H17.6046C17.8013 15.2982 20.5943 12.6274 23.9997 12.6274ZM23.9997 33.3727C20.4671 33.3727 17.5931 30.4987 17.5931 26.9661V20.531H30.4064V23.5949C29.865 23.5989 29.3385 23.735 28.8701 23.9827C28.6891 23.7063 28.4694 23.4541 28.2157 23.2349C27.5684 22.6758 26.7405 22.3679 25.8843 22.3679C24.1975 22.3679 22.7802 23.5446 22.4105 25.1203C21.134 25.4448 20.1868 26.6038 20.1868 27.9799C20.1868 29.6065 21.5102 30.9298 23.1368 30.9298H29.0295C27.8553 32.4166 26.0371 33.3727 23.9997 33.3727Z" fill="black" />
													<path d="M22.935 16.7794H25.0647C25.5826 16.7794 26.0026 16.3595 26.0026 15.8415C26.0026 15.3236 25.5826 14.9036 25.0647 14.9036H22.935C22.417 14.9036 21.9971 15.3236 21.9971 15.8415C21.9971 16.3595 22.417 16.7794 22.935 16.7794Z" fill="black" />
												</g>
												<defs>
													<clipPath id="clip0_21_15576">
														<rect width={48} height="45.2958" fill="white" />
													</clipPath>
													<clipPath id="clip1_21_15576">
														<rect width={32} height={32} fill="white" transform="translate(8 7)" />
													</clipPath>
												</defs>
											</svg>
										</div>
										<div className="card-info">
											<h6 className="text-xl-bold neutral-1000">Security Assurance</h6>
											<p className="text-lg-medium neutral-500">Data security through encryption </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-install-app background-body">
						<div className="container">
							<div className="block-install-apps">
								<div className="row align-items-center">
									<div className="col-lg-6 mb-40 wow fadeInLeft"><span className="btn btn-tag">Install APP   Get  discount code</span>
										<h2 className="title-why neutral-1000">Discover Seamless Travel with Cylonian inn</h2>
										<p className="text-xl-medium neutral-500">Embark on a journey like never before with Cylonian inn – your ultimate travel companion.</p>
										<div className="download-apps"> <Link href="#"><img src="/assets/imgs/template/googleplay.png" alt="Travila" /></Link><Link href="#"><img src="/assets/imgs/template/appstore.png" alt="Travila" /></Link></div>
									</div>
									<div className="col-lg-6 mb-40 text-end wow fadeInRight">
										<div className="box-images-apps"> <img className="img-phone" src="/assets/imgs/page/homepage4/phone.png" alt="Travila" /><img className="img-laptop" src="/assets/imgs/page/homepage4/laptop.png" alt="Travila" />
											<div className="shape"> <img className="ml-40 mb-10" src="/assets/imgs/page/homepage4/arrow-big.png" alt="Travila" /><img src="/assets/imgs/page/homepage4/arrow-sm.png" alt="Travila" /></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-media background-body">
						<div className="container-media wow fadeInUp"> <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /></div>
					</section>
				</main>

			</Layout>
		</>
	)
}