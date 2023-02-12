import { Icon } from "@wordpress/components";

export const ActionButtonTrash = ({ handleRemoveImage }) => <>
    <div className={`
        absolute 
        z-10 
        top-2 
        right-2 
        bg-slate-50/80 
        hover:bg-slate-50 
        w-9 
        h-9 
        rounded-md 
        grid 
        place-content-center 
        transition-all 
        transition-duration-300 
        hover:scale-125
        `}>
		<Icon icon="trash" onClick={ handleRemoveImage } />
	</div>
</>