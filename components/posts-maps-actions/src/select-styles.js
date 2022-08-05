export const selectStyles = {
        menu: (provided, state) => ({
          ...provided          
        }),      
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
                return { ...provided, opacity, transition };
        }
      }