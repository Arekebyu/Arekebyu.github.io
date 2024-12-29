import { useCallback, useEffect, useRef, useState } from "react"

export function TitleCard(){
    var canvasHeight = 0;
    var canvasWidth = 0;
    const canvasRef = useRef(null);
    const movingScaleFactor=5

    useEffect(() =>{
        // what I want do is a fluid simulation with a datamoshing effect
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');  
        let frame = 0;
        const rotatingBg = new Image();
        const moving = new Image();
        rotatingBg.src = "/image/cdbg05a.png"
        moving.src = "/image/cdbg05b.png"
        function drawRotation(){
            ctx.globalAlpha = Math.min(frame*0.001, 0.1);
            ctx.save();
            ctx.translate(canvasWidth/2, canvasHeight/2);
            ctx.rotate(frame*Math.PI/180/3);
            const dimensions = Math.max(canvasWidth, canvasHeight)*1.3;
            ctx.drawImage(rotatingBg, -dimensions/2,-dimensions/2 , dimensions, dimensions);
            ctx.restore()
            const dx = (-0.1*frame)%(dimensions/movingScaleFactor);
            const dy = (-2*frame)%(dimensions/movingScaleFactor);
            for(let x = -1 ; (x-1)*dimensions/movingScaleFactor <= canvasWidth; x++){
                for(let y = -1 ; (y-1)*dimensions/movingScaleFactor <= canvasWidth; y++){
                    ctx.drawImage(moving, x*dimensions/movingScaleFactor+dx, y*dimensions/movingScaleFactor+dy, dimensions/movingScaleFactor, dimensions/movingScaleFactor)
                }
            }
            frame++;
            window.requestAnimationFrame(drawRotation)
        }

        const handleResize = e => {
            canvas.style.width = '100%'
            canvas.style.height = '100%'
            ctx.canvas.height = canvas.offsetHeight;
            ctx.canvas.width = canvas.offsetWidth;
            canvasHeight = ctx.canvas.height;
            canvasWidth = ctx.canvas.width;
            ctx.fillStyle = "#1f1f1f";
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        }
        handleResize();

        ctx.fillStyle = "#1f1f1f";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
 
        window.requestAnimationFrame(drawRotation)
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, [])

    return(
        <canvas ref={canvasRef} className=""/>
    );
}

