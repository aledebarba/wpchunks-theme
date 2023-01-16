import styled from 'styled-components';
import { Icon } from '@iconify/react';


const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    display: grid;
    place-items: center;
    z-index: 1000;
    font-size: 4rem;
    color: white;
`

export default function Loading() {
    return (
        <LoadingContainer>
            <Icon icon="mdi:loading-loop" />
        </LoadingContainer>
    );
}
