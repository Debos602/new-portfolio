import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  smooth?: boolean;
}

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls the window to the top whenever the pathname changes.
 * Should be placed inside BrowserRouter but outside Routes.
 * 
 * @param smooth - If true, uses smooth scroll behavior. Default: false (instant)
 * 
 * @example
 * <BrowserRouter>
 *   <ScrollToTop />
 *   <Routes>
 *     ...
 *   </Routes>
 * </BrowserRouter>
 */
export const ScrollToTop = ({ smooth = false }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [pathname, smooth]);

  return null;
};
