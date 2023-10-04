import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ge.png"
								alt="geb"
								className="work-image"
							/>
							<div className="work-title">Global EBrand</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./accenture.png"
								alt="accenture"
								className="work-image"
							/>
							<div className="work-title">Accenture</div>
							<div className="work-subtitle">
								Associate Software Engineer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
