import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function TableVarliklar(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  
  return (
    <div className='w-25 h-25 border border-5' ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <h5>Varlıklar</h5>
      {console.log("dasdsldlssllslsll",props.varlik)}
      <table className="table ">
            <thead className="table-primary">
              <tr>
                <th scope="col">Açıklama (Borç Bakiye)</th>
                <th scope="col">Bakiye</th>
              </tr>
            </thead>
            <tbody>
              {props.varlik.map((varlik) => (
                <tr>
                  <td scope="col">
                    {
                      varlik.hesapAdi
                    }
                  </td>
                  <td scope="col">{varlik.bakiye}</td>
                </tr>
              ))}
            </tbody>
          </table>
      Deneme
    </div>
  );
}