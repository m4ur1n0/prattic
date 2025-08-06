
import { createContext, useContext, useState } from "react";

const AnimationContext = createContext({})

const AnimationProvider = ({children}) => {

    // const [homePageVisited, setHomePageVisited] = useState(false);

    const [homePageVisited, setHomePageVisited] = useState(() => {
        // Initialize based on sessionStorage
        if (typeof window !== "undefined") {
          return sessionStorage.getItem("hasSeenIntro") === "true";
        }
        return false;
    });

    
    const val = {
        homePageVisited,
        setHomePageVisited,
    }

    return (
        <AnimationContext.Provider value={val}>
            {children}
        </AnimationContext.Provider>
    )

}

export function useAnimationC() {
    return useContext(AnimationContext);
}

export default AnimationProvider;


