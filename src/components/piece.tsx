
import { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
//import "./piece.scss";
type Position={
    xRate:number;
    yRate:number;
};

export const Piece=()=>{
    const [currentPosition,setCurrentPosition]=useState<Position>({
        xRate:50,
        yRate:50
    });

    const onDrag=(e:DraggableEvent,data:DraggableData)=>{
        setCurrentPosition({xRate:data.lastX,yRate:data.lastY});
    };
    return(
        <Draggable
        position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate
        }}
        onDrag={onDrag}
        >
            <div className="Piece">
                <span className="Piece-phrase">Piece</span>
            </div>
        </Draggable>
    );
};