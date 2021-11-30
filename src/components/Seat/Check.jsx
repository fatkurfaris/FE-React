// import Overlay from "@restart/ui/esm/Overlay";
import React from "react";
import { useState,useRef } from "react";
import {Button,Popover,Overlay} from 'react-bootstrap'
import style from './Seat.Module.css'

export default function Check({kursi}) {
    const [show, setShow] = useState(false);
    
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    //   console.log("inikursi2");
    //   console.log({kursi});
    };
  
    return (
      <div ref={ref}>
        <Button className={style.undone} onClick={handleClick}>{kursi} </Button>
        
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Chose Your Seat</Popover.Header>
            <Popover.Body>
             Are You Sure for Pick This Seat? <strong>{kursi}</strong> 
             <Button className={style.space4}>Yes</Button>
             <Button className={style.space5}>No</Button>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    );
  }
  
