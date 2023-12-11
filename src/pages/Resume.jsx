import React from "react";
import PdfViewerComponent from "../components/PdfViewerComponent";

const Resume = () => {
	return (
		<div className="App">
			<div className="PDF-viewer">
				<PdfViewerComponent document={"/resume.pdf"} />
			</div>
		</div>
	);
};

export default Resume;
