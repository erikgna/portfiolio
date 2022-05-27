import { useState } from "react";
import { Special, Static } from "./AnimatedLetter.styled";

export const AnimatedLetter: React.FC<{letter:string}> = ( {letter} ) => {
    const [animated, setAnimated] = useState<boolean>(false);

    return(
        animated?
    <Special
        onAnimationEnd={() => setAnimated(() => false)}>{letter}</Special> 
        :
    <Static
        onMouseEnter={() => setAnimated(() => true)}>{letter}</Static>
    )
}