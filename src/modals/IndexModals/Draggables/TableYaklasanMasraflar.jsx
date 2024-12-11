import React, { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export function TableYaklasanMasraflar(props) {
  const [yaklasanMasraflar, setYaklasanMasraflar] = useState(0);

  useEffect(() => {
    for (let index = 0; index < props.yaklasanMasraflar.length; index++) {
      setYaklasanMasraflar(yaklasanMasraflar + props.yaklasanMasraflar[index].toplam);
    }
  }, [props.yaklasanMasraflar]);

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
      <h5>Yaklaşan Masraflar - Toplam : {yaklasanMasraflar}</h5>
      <table className="table">
        <thead className="table-primary">
          <tr>
          <th scope="col">Ödeme Tarihi</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Toplam</th>
          </tr>
        </thead>
        <tbody>
          {props.yaklasanMasraflar.map((masraf) => (
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
