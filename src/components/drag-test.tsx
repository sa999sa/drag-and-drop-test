import { useState } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";

type Position={
    x:number;
    y:number;
};

export const Drag=()=>{
    const [currentPosition,setCurrentPosition]=useState<Position>({
        x:50,
        y:50
    });
    const onDrag=(e:DraggableEvent,data:DraggableData)=>{
        setCurrentPosition({x:data.lastX,y:data.lastY});
        //console.log()
    };
    return(
        <Draggable
  defaultPosition={{x: 0, y: 0}}
  onDrag={onDrag}
  >
  <div style={{ position: 'absolute' }}>
    <p>ドラッグで移動したい要素</p>
        <div>{currentPosition.x+","+currentPosition.y}</div>
       
  </div>
</Draggable>

    )
};