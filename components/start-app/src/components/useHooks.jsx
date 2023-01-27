import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}


export function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export function usePageHeight(height, overflowy ) {
  document.documentElement.style.setProperty('--dynamic-page-height', height);
  document.documentElement.style.setProperty('--dynamic-overflow-y', overflowy);
}

export function useWordpress() {
  return ({
    url: {
      admin: set_app[1].url.admin,
      theme: set_app[1].url.theme,
    }
  })
}

export function usePageScroll() {
  const [ pageScroll, setPageScroll] = useState( {x: 0, y: 0} );

  useEffect(() => {
      const onScroll = () => {
          setPageScroll( {x: window.pageXOffset, y: window.pageYOffset} );
      };
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return pageScroll
}

export const useSettings = start_app[1].params[0].settings;
export const useWPFiles = start_app[1].params[0].files;