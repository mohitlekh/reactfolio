import React from "react";

const Resume = () => {
	return (
		<div>
			<object
				aria-label="pdf-resume"
				data="/resume.pdf"
				style={{ width: "100%", height: "100vh" }}
			/>
		</div>
	);
};

export default Resume;
