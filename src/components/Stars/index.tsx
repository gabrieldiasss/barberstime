import { IconContext } from 'react-icons'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

import { StarsSection } from './styles'

interface StarsProps {
    stars: number;
}

export function StarsComponent({stars}: StarsProps){

    let starsLogic = [0, 0, 0, 0, 0]
    let floor = Math.floor(stars)
    let left = stars - floor

    for(var i=0;i<floor;i++) {
        starsLogic[i] = 2
    }

    if(left > 0) {
        starsLogic[i] = 1
    }

    return (
        
        <StarsSection>
            <IconContext.Provider value={{size: "1.2rem", color: "#FFD706"}} >
                {starsLogic.map((star, key) => (

                    <div key={key} >
                        {star === 0 && <BsStar/>}
                        {star === 1 && <BsStarHalf/>}
                        {star === 2 && <BsStarFill/>}
                    </div>
                     
                ))}
            </IconContext.Provider>
            
            <span>{stars}</span>
        </StarsSection>
       
    )
}