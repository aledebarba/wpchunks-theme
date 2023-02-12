import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ReactComponent as Logo } from './logo-hysteria-branco.svg';
import { TransitionSlidingText } from '../components/TransitionSlidingText';

const lenis = new Lenis({
	duration: 1.2,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
 
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
  }
  
requestAnimationFrame(raf);


const Index = () => { 	

	gsap.registerPlugin(ScrollTrigger);
	
	return(
	<>
		<section className="header">
			<div className="header--background"></div>
			
			<div className="video-left">
				<video  
					src="https://hysteria.ws42.cc/media-server/movies/zoodiaca.webm" 
					autoPlay
					loop
					muted
					playsInline
				/>
			</div>
			<div className="video-right">
				<video  
					src="https://hysteria.ws42.cc/media-server/movies/zoodiaca.webm" 
					autoPlay
					loop
					muted
					playsInline
				/>
			</div>
			
			<div className="header--center-circle">
				<video  
					src="https://hysteria.ws42.cc/media-server/movies/zoodiaca.webm" 
					autoPlay
					loop
					muted
					playsInline					
				/>
				<div className="logo">
					<Logo/>
				</div>
				<div className="text">
					<div className="top">mulheres com</div>
					<div className="center">histórias</div>
					<div className="bottom">pra contar</div>
				</div>
			</div>
			<div className="circle" style={{ "--top": "65vh"}}></div>
			<div className="circle" style={{ "--top": "-45vh", "--left": "60vw"}}></div>
		</section>

		<TransitionSlidingText />

		<section className="projects">
			<div className="horizontal--container">
				{ [
					{ title: 'Desnude', channel: 'HBO+', type: 'Série', image: '01.jpg' },
					{ title: 'Tapa na Cara', channel: 'Youtube', type: 'Webserie', image: '02.png' },
					{ title: 'Um titulo longo', channel: 'GloboPlay', type: 'Mini-série', image: '03.jpeg' },
				].map( item => (
					<div className="project--item">
						<div className="project--background-image">
							<img src={require( './assets/'+item.image )} />
						</div>
						<div className="project--text-container">
							<div className="project--channel">{item.channel}</div>
							<div className="project--type">{item.type}</div>
							<div className="project--title">{item.title}</div>
							<div className="project--button-view-project">
								<div className="label">Assistir</div>
								<div className="icon">[o]</div>
							</div>
						</div>
					</div> )
				)}
			</div>
		</section>
			

		<div className="transition--parallax-circles">
			<div className="red-circle"></div>
			<div className="white-circle"></div>
			<div className="animated-svg-grid-lines"></div>			
		</div>

		<section className="about">
			<div className="title-top">Quem é</div>
			<div className="title-bottom">Histeria?</div>
			<div className="text-about">
				<div className="text"></div>
			</div>
		</section>
		
		<div className="transition--brand-lab">
			<div className="background-red"></div>
			<div className="text--left">Brand</div>
			<div className="text--right">Lab</div>
		</div>

		<section className="brandlab">
			<div className="card--text-bottom">
				<div className="card--image">
					<div className="image-mask">
						<div className="image">
							<img src="" alt="" />
						</div>
					</div>
				</div>
				<div className="card--text">
					<div className="title"></div>
					<div className="text"></div>
				</div>
			</div>
			<div className="card--text-top">
				<div className="card--text">
					<div className="title"></div>
					<div className="text"></div>
				</div>
				<div className="card--image">
					<div className="image-mask">
						<div className="image">
							<img src="" alt="" />
						</div>
					</div>
				</div>
			</div>			
		</section>
		<div className="megamenu">
			<div className="megamenu--container">
				<div className="logo"></div>
				<ul className="options">
					<li className="option"><a href=""><span className="number">1</span><span className="text">Projetos</span></a></li>
					<li className="option"><a href=""><span className="number">2</span><span className="text">Quem é Hysteria?</span></a></li>
					<li className="option"><a href=""><span className="number">3</span><span className="text">Hysteria Brand Lab</span></a></li>
					<li className="option"><a href=""><span className="number">4</span><span className="text">Colaboradoras</span></a></li>
					<li className="option"><a href=""><span className="number">5</span><span className="text">Contato</span></a></li>
				</ul>
				<div className="narrow-column">
					<div className="close">Fechar</div>
					<ul className="social-media">
						<li><a href="https://instagram.com" target="_blank" noreferrer><span className="icon"></span></a></li>
						<li><a href="mailto:contato@hysteria.etc" target="_blank" noreferrer><span className="icon"></span></a></li>
						<li><a href="https://conspiracao.com.br" target="_blank" noreferrer><span className="icon"></span></a></li>
					</ul>
				</div>
			</div>
		</div>
	</>
	)
};

export default Index;