import React from "react";

export default function Home() {
	return (
		<>
			<h2>About Me</h2>
			<p>
				{" "}
				<i className="fas fa-briefcase"></i>Texas based web developer
			</p>
			<p>
				{" "}
				<i className="fas fa-map-marker"></i> Location - Texas
			</p>
			<p>
				I had a short career in Civil Engineering before I decided to
				take a step back to reevaluate my life goals. I took some time
				to volunteer with nonprofits, substitute for my public school
				district, become a support group leader and start a small art
				business. Through each option, there was a connecting factor.
				The importance of software development. I saw gaps that could be
				filled with the right software application. I got tired of
				saying, "if only someone would build..." Why wait for someone
				else to build it? I could do that, I just needed to learn how.
				So I started learning on my own but soon realized that I needed
				some guidance. With so much out there, I didn't know what I
				should concentrate on. I enrolled and completed the UT Austin
				Full Stack Web Development program and am ready to start my
				journey as a junior web developer. Other things about me. I
				enjoy to draw and have a small art business{" "}
				<a
					href="http://www.doodlejutsu.com"
					target="_blank"
					id="weblink"
					class="font-bold underline">
					Doodlejutsu
				</a>
				. Along with my mental health advocacy I run a blog called{" "}
				<a
					href="http://www.illgetthere.com"
					target="_blank"
					id="weblink"
					class="font-bold underline">
					I'll Get There
				</a>{" "}
				where I write honestly about living with mental illness.
			</p>
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
