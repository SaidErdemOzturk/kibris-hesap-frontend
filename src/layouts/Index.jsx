import React, { useEffect, useState } from "react";
import MusteriTedarikciService from "../services/musteriTedarikciService";
import CariIslemlerService from "../services/cariIslemlerService";
import NakitKrediKartiBanka from "../modals/CariIslemler/CariHareketKaydiModals/NakitKrediKartiBanka";
import CariHareketUpdate from "../modals/CariIslemler/CariHareketKaydiModals/CariHareketUpdate";
import BrushIcon from '@mui/icons-material/Brush';
import { DndContext } from "@dnd-kit/core";
import { FirstDroppable } from "../modals/IndexModals/Droppables/FirstDroppable";
import { TableVarliklar } from "../modals/IndexModals/Draggables/TableVarliklar";
import MenuService from "../services/menuService";

export default function Index() {
    const [isDropped, setIsDropped] = useState(false);
    const [varlik, setVarlik] = useState([])
    const draggableMarkup = (
        <TableVarliklar varlik={varlik} >Drag me</TableVarliklar>
    );
    useEffect(() => {
        const menuService = new MenuService()
        menuService.dashboard().then((result)=>{
            setVarlik(result.data.varlikDtoList)
            console.log(result)
        })
    }, [])
    

    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(!isDropped);
        }
    }
    return (

        <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup :<FirstDroppable/>}
        {!isDropped ?<FirstDroppable/>: draggableMarkup}
      </DndContext>
    );
}
