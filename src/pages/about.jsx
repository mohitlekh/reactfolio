import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAws,
	faReact,
	faJsSquare,
	faEnvira,
	faNode,
	faShopify,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
// import { Link } from "react-router-dom";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7546015116695522"
					crossorigin="anonymous"
				></script>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="subtitle about-subtitle">
									<h4>Skils</h4>
									<FontAwesomeIcon
										icon={faAws}
										className="homepage-social-icon"
									/>
									<FontAwesomeIcon
										icon={faReact}
										className="homepage-social-icon"
									/>
									<FontAwesomeIcon
										icon={faJsSquare}
										className="homepage-social-icon"
									/>
									<FontAwesomeIcon
										icon={faNode}
										className="homepage-social-icon"
									/>
									<FontAwesomeIcon
										icon={faEnvira}
										className="homepage-social-icon"
									/>
									<FontAwesomeIcon
										icon={faShopify}
										className="homepage-social-icon"
									/>
								</div>
								{/* <Link to={"/resume/bw"}>Resume</Link> */}
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
