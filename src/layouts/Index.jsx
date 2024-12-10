import React, { useEffect, useState } from "react";
import MusteriTedarikciService from "../services/musteriTedarikciService";
import CariIslemlerService from "../services/cariIslemlerService";
import NakitKrediKartiBanka from "../modals/CariIslemler/CariHareketKaydiModals/NakitKrediKartiBanka";
import CariHareketUpdate from "../modals/CariIslemler/CariHareketKaydiModals/CariHareketUpdate";
import BrushIcon from "@mui/icons-material/Brush";
import { DndContext } from "@dnd-kit/core";
import { FirstDroppable } from "../modals/IndexModals/Droppables/FirstDroppable";
import { TableVarliklar } from "../modals/IndexModals/Draggables/TableVarliklar";
import MenuService from "../services/menuService";
import { TableBorclar } from "../modals/IndexModals/Draggables/TableBorclar";
import { TableGecikmisMasraflar } from "../modals/IndexModals/Draggables/TableGecikmisMasraflar";
import { TableVadesiGecenCekSenetler } from "../modals/IndexModals/Draggables/TableVadesiGecenCekSenetler";
import { TableYaklasanMasraflar } from "../modals/IndexModals/Draggables/TableYaklasanMasraflar";
import { TableVadesiYaklasanCekSenetler } from "../modals/IndexModals/Draggables/TableVadesiYaklasanCekSenetler";

export default function Index() {
  const [isDropped, setIsDropped] = useState(false);
  const [varlik, setVarlik] = useState([]);
  const [borclar, setBorclar] = useState([]);
  const [gecikmisMasraflar, setGecikmisMasraflar] = useState([]);
  const [vadesiGecenSenetler, setVadesiGecenSenetler] = useState([]);
  const [yaklasanMasraflar, setYaklasanMasraflar] = useState([]);
  const [vadesiYaklasanSenetler, setVadesiYaklasanSenetler] = useState([]);

  useEffect(() => {
    const menuService = new MenuService();
    menuService.dashboard().then((result) => {
      setVarlik(result.data.varlikDtoList);
      setBorclar(result.data.borcDtoList);
      setGecikmisMasraflar(result.data.gecikmisMasrafDtoList);
      setVadesiGecenSenetler(result.data.vadesiGecenCSEvrakDtoList);
      setYaklasanMasraflar(result.data.yaklasanMasrafDtoList);
      console.log(result);
    });
  }, []);

  /*
    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(!isDropped);
        }
    }*/
  return (
    <div className="d-flex flex-wrap">
      <div className="m-2">
      <TableVarliklar 
        width={600} 
        height={250} 
        varlik={varlik} />
      </div>

      <div className="m-2">

        <TableBorclar width={600} height={250} borclar={borclar} />
      </div>

      <div className="m-2">

        <TableGecikmisMasraflar
          width={600}
          height={250}
          gecikmisMasraflar={gecikmisMasraflar}
        />
      </div>
      <div className="m-2">

        <TableVadesiGecenCekSenetler
          width={800}
          height={250}
          vadesiGecenSenetler={vadesiGecenSenetler}
        />
      </div>
      <div className="m-2">

        <TableYaklasanMasraflar
          width={600}
          height={250}
          yaklasanMasraflar={yaklasanMasraflar}
        />
      </div>
      <div className="m-2">
      
        <TableVadesiYaklasanCekSenetler
          width={800}
          height={250}
          vadesiYaklasanSenetler={vadesiYaklasanSenetler}
        />
      </div>

      {/* 
     <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? varliklarTable :borclarTable}
        {!isDropped ? borclarTable: varliklarTable}
      </DndContext>*/}
    </div>
  );
}
