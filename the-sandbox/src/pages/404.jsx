import { Icon } from '@iconify/react';

const NotFound = () => (
	<>
		<div className="page-not-found">
			<Icon icon="line-md:alert" height="56" />
			<h1>Page not found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<a href="/">Go Home</a>
		</div>
	</>
);

export default NotFound;
