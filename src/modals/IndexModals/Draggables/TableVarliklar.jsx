import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export function TableVarliklar(props) {
  const [varliklarToplam, setVarliklarToplam] = useState(0);


  useEffect(() => {
    for (let index = 0; index < props.varlik.length; index++) {
      setVarliklarToplam(varliklarToplam + props.varlik[index].bakiye);
    }
  }, [props.varlik]);

  
  /*
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

*/


  return (
    <div
    style={{width:props.width,height:props.height}}
      className=" border border-2 rounded  bg-light p-2"
     /* ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}*/
    >
      <h5>Varlıklar - {varliklarToplam}</h5>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">Açıklama (Borç Bakiye)</th>
            <th scope="col">Bakiye</th>
          </tr>
        </thead>
        <tbody>
          {props.varlik.map((varlik) => (
            <tr>
              <td scope="col">{varlik.hesapAdi}</td>
              <td scope="col">{varlik.bakiye}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
