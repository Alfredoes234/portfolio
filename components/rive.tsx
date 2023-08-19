"use client"
import { useRive } from '@rive-app/react-canvas';

export default function Rive() {
    const { rive, RiveComponent} = useRive({
        src: '/ball.riv',
        autoplay: true,
    });
    return(
        <RiveComponent
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}