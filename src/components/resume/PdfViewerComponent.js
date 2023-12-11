import React from "react";
import "./resumeStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDownload,
	faShare,
	faStreetView,
} from "@fortawesome/free-solid-svg-icons";

const PdfViewerComponent = () => {
	return (
		<div className="resume-cointainer">
			<div className="resume-section">
				<img
					alt="resume"
					className="resume-image"
					src="/Mohit_Lekhrajani_page-01.jpg"
				/>
			</div>
			<a href="/resume.pdf" download>
				<FontAwesomeIcon
					icon={faDownload}
					className="homepage-social-icon"
				></FontAwesomeIcon>
			</a>
			<FontAwesomeIcon
				icon={faShare}
				className="homepage-social-icon"
				onClick={() => {
					navigator.clipboard.writeText(
						"https://softwaredevelopermohit.netlify.app/resume.pdf"
					);
					alert("Link Copied");
				}}
			/>
			<FontAwesomeIcon
				icon={faStreetView}
				className="homepage-social-icon"
				onClick={() => {
					window.open(
						"https://softwaredevelopermohit.netlify.app/resume.pdf",
						"_self"
					);
				}}
			/>
		</div>
	);
};

export default PdfViewerComponent;
