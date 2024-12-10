import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export function TableVadesiGecenCekSenetler(props) {
  const [vadesiGecenSenetler, setVadesiGecenSenetler] = useState(0);

  useEffect(() => {
    for (let index = 0; index < props.vadesiGecenSenetler.length; index++) {
      setVadesiGecenSenetler(vadesiGecenSenetler + props.vadesiGecenSenetler[index].bakiye);
    }
  }, [props.vadesiGecenSenetler]);

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
    style={{height:props.height,width:props.width}}
      className="border border-2 rounded  bg-light"
      /*
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}*/
    >
      <h5>Vadesi Geçen Senetler - Kalan Toplam : {vadesiGecenSenetler}</h5>
      <table className="table">
        <thead className="table-primary">
          <tr>
          <th scope="col">Cinsi</th>
          <th scope="col">Vade Tarihi</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Tutar</th>
          <th scope="col">Ödenen</th>
          <th scope="col">Kalan</th>
          </tr>
        </thead>
        <tbody>
          {props.vadesiGecenSenetler.map((vadesiGecenSenet) => (
            <tr>
              <td>{vadesiGecenSenet.evrakCinsi}</td>
              <td>{vadesiGecenSenet.vadeTarihi}</td>
              <td>{vadesiGecenSenet.aciklama}</td>
              <td>{vadesiGecenSenet.tutar}</td>
              <td>{vadesiGecenSenet.odenen}</td>
              <td>{vadesiGecenSenet.kalanTutar}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
