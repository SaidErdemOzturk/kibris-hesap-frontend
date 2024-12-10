import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function FirstDroppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });
    const style = {
        backgroundColor: isOver ? 'blue' : undefined,
        transition: 'all 0.5s ease', // Düzeltildi
    };
    
    


    return (
        <div className='border border-2 w-25 h-25 ' ref={setNodeRef} style={style}>


            <div >
                {props.children}
            </div>
        </div>
    );
}