"use client"
import { useRive } from '@rive-app/react-canvas';

export default function Rive() {
    const { rive, RiveComponent} = useRive({
        src: '/rive_101.riv',
        autoplay: false,
    });
    return(
        <RiveComponent
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}