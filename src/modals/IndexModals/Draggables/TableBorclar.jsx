import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export function TableBorclar(props) {
  const [borclarToplam, setBorclarToplam] = useState(0);

  useEffect(() => {
    for (let index = 0; index < props.borclar.length; index++) {
      setBorclarToplam(borclarToplam + props.borclar[index].bakiye);
    }
  }, [props.borclar]);

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
      className=" border border-2 rounded bg-light"
      /*
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}*/
    >
      <h5>Borçlar - {borclarToplam}</h5>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">Açıklama (Borç Bakiye)</th>
            <th scope="col">Bakiye</th>
          </tr>
        </thead>
        <tbody>
          {props.borclar.map((varlik) => (
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
