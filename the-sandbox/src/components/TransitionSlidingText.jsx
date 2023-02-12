import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const TransitionSlidingText = ({ text = "Projetos" }) => {

	const main = useRef(null);
	const panel = useRef(null);
	const textOver = useRef(null);
	const textUnder = useRef(null);

	useLayoutEffect(() => {

		let tl = gsap.timeline({ paused: true });
		tl.to(main.current, {
			y: "-80%",
			scrollTrigger: {
				trigger: panel.current,
				start: "top 95%",
				end: "bottom top",
				scrub: true,
				pinSpacing: true,
			}
		}, 0)
			.to(textOver.current, {
				x: "-50%",
				scrollTrigger: {
					trigger: panel.current,
					start: "top 95%",
					end: "bottom 10%",
					scrub: true,
					markers: true
				}
			})
			.to(textUnder.current, {
				x: "-50%",
				scrollTrigger: {
					trigger: panel.current,
					start: "top 95%",
					end: "bottom 10%",
					scrub: true,
				}
			}, 0)
			.to(panel.current, {
				"clip-path": "polygon(0% 0%, 100% 0, 100% 0%, 0% 0%)",
				scrollTrigger: {
					trigger: panel.current,
					start: "top 75%",
					end: "top 20%",
					scrub: true,
					easing: "ease.out",
				}
			}, 0);

	}, []);

	return <div className="transition--parallax-text--projetos" ref={main}>

		<div className="under-panel">
			<div className="text" ref={textUnder}>
				<span>Projetos</span>
				<span>Projetos</span>
			</div>
		</div>

		<div className="over-panel" ref={panel}>
			<div className="text" ref={textOver}>
				<span>Projetos</span>
				<span>Projetos</span>
			</div>
		</div>

	</div>;
};
