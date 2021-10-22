import React, { useRef, useEffect } from 'react';
import MyCanvas from './utils/canvas';
import { Canvas } from '@react-three/fiber';

function SolarSystem() {

    const canvasRef = useRef(null);
    const mc= useRef(null);

    

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        mc.current= new MyCanvas(canvas, context);

        let frameCount = 0
        let animationFrameId

        mc.current.init();
        mc.current.animate();
        
    }, [])

    return (
        <div className="h-screen w-screen my-canvas">
            <canvas ref={canvasRef}  />
        </div>
    )
}
export default SolarSystem;