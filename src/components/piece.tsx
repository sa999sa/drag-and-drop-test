import React from "react";
import { useState } from "react";

type Position={
    xRate:number;
    yRate:number;
};

export const Piece=()=>{
    const [currentPosition,setCurrentPosition]=useState<Position>({
        xRate:150,
        yRate:150
    });

    const onDrag=(e:DraggableEvent)
}