import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export function TableGecikmisMasraflar(props) {
  const [gecikmisMasraflar, setGecikmisMasraflar] = useState(0);

  useEffect(() => {
    for (let index = 0; index < props.gecikmisMasraflar.length; index++) {
      setGecikmisMasraflar(gecikmisMasraflar + props.gecikmisMasraflar[index].tutar);
    }
  }, [props.gecikmisMasraflar]);

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
      <h5>Gecikmiş Masraflar - Toplam : {gecikmisMasraflar}</h5>
      <table className="table">
        <thead className="table-primary">
          <tr>
          <th scope="col">Ödeme Tarihi</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Toplam</th>
          </tr>
        </thead>
        <tbody>
          {props.gecikmisMasraflar.map((masraf) => (
            <tr>
              <td>{masraf.odemeTarihi}</td>
              <td>{masraf.aciklama}</td>
              <td>{masraf.toplam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
