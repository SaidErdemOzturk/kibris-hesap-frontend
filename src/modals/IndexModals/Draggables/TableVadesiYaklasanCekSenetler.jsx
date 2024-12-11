import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export function TableVadesiYaklasanCekSenetler(props) {
  const [vadesiYaklasanSenetler, setVadesiYaklasanSenetler] = useState(0);

  useEffect(() => {
    for (let index = 0; index < props.vadesiYaklasanSenetler.length; index++) {
      setVadesiYaklasanSenetler(vadesiYaklasanSenetler + props.vadesiYaklasanSenetler[index].bakiye);
    }
  }, [props.vadesiYaklasanSenetler]);

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
      className="border border-2 rounded  bg-light p-2"
      /*
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}*/
    >
      <h5>Vadesi Yaklaşan Senetler - Kalan Toplam : {vadesiYaklasanSenetler}</h5>
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
          {props.vadesiYaklasanSenetler.map((vadesiYaklasanSenet) => (
            <tr>
              <td>{vadesiYaklasanSenet.evrakCinsi}</td>
              <td>{vadesiYaklasanSenet.vadeTarihi}</td>
              <td>{vadesiYaklasanSenet.aciklama}</td>
              <td>{vadesiYaklasanSenet.tutar}</td>
              <td>{vadesiYaklasanSenet.odenen}</td>
              <td>{vadesiYaklasanSenet.kalanTutar}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
