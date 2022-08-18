import styled, {css} from "styled-components";

import { Home, Schedule, UserCircle } from '../../icons'

export const BottomMenuSection = styled.div` 
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    height: 3.4rem;

    padding: 8px min(46px, mx(10vw, 10px));

    background: var(--orange-500);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(min-width: 500px) {
        display: none;
    }
`

const iconCSS = css`
    width: 31px;
    height: 31px;

    cursor: pointer;

    fill: var(--shape);
    
`

export const HomeIcon = styled(Home)`
    ${iconCSS}    
`
export const ScheduleIcon = styled(Schedule)`
    ${iconCSS}
`
export const ProfileIcon = styled(UserCircle)`
    ${iconCSS}
`