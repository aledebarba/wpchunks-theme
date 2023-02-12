import { _app } from '../wpchunk';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const menuItemClasses = "flex gap-x-1 justify-center items-center text-slate-100 hover:text-white transition-all duration-500 ease-in-out";

export const Navbar = () => (
	<div className="absolute z-10 left-0 top-0 w-screen h-10 bg-slate-500 flex justify-center items-center ">		
		<div className="flex gap-x-4">
			{ _app.primaryMenu().map( ( item ) => (
				<>
					{ item.object === 'page' && (
						<>
							{ item.slug === 'home' && (
								<Link to="/" className={menuItemClasses}>
									{ item.attr && <Icon icon={ item.attr } /> }
									{ item.title }
								</Link>
							) }
							{ item.slug !== 'home' && (
								<Link to={ `/${ item.slug }` } className={menuItemClasses}>
									{ item.attr && <Icon icon={ item.attr } /> }
									{ item.title }
								</Link>
							) }
						</>
					) }
					{ item.object === 'custom' && (
						<a href={ item.url } target={ item.target } className={menuItemClasses}>
							{ item.attr && <Icon icon={ item.attr } /> }
							{ item.title }
						</a>
					) }
				</>
			) ) }
		</div>
	</div>
);
