import React from "react";

export default function Home() {
	return (
		<>
			<h3>
				<a href="assets/other/ReekaMaharajResume.pdf" target="_blank">
					Link to resume
				</a>
			</h3>
			<a
				className="link"
				href="https://github.com/reekamaharaj"
				data-tippy-content="@reekamaharaj"
				target="_blank">
				<i className="fab fa-github"></i>
				<title>GitHub</title>
			</a>
			<a
				className="link"
				href="https://www.linkedin.com/in/reekamaharaj/"
				data-tippy-content="@reekamaharaj"
				target="_blank">
				<i className="fab fa-linkedin"></i>
				<title>Linkedin</title>
			</a>
			<a
				className="link"
				href="mailto: reekamaharaj@gmail.com"
				data-tippy-content="reekamaharaj@gmail.com"
				target="_blank">
				<i className="fas fa-envelop"></i>
				<title>Email</title>
			</a>
			<a
				className="link"
				href="https://doodlejutsu.com/"
				data-tippy-content="doodlejutsu"
				target="_blank">
				<i className="fas fa-globe"></i>
				<title>Website</title>
			</a>
		</>
	);
}
