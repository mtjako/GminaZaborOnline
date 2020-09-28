import { SectionHeader } from "../SectionHeader/SectionHeader";
import React, { useEffect, useState } from "react";
import TimeTable from "./TimeTable";

export const Bus = (props) => {
    const [hours,setHours] = useState('00');
    const [minutes,setMinutes] = useState('00');
    const [seconds,setSeconds] = useState('00');

    const MoFr = [
        {h:4,m:59,type: 0},
        {h:6,m:0,type: 3},
        {h:6,m:35,type: 1},
        {h:7,m:7,type: 0},
        {h:7,m:37,type: 0},
        {h:9,m:8,type: 0},
        {h:11,m:6,type: 1},
        {h:12,m:35,type: 1},
        {h:13,m:59,type: 3},
        {h:14,m:37,type: 0},
        {h:15,m:1,type: 2},
        {h:16,m:1,type: 2},
        {h:16,m:37,type: 0},
        {h:17,m:2,type: 2},
        {h:18,m:22,type: 2},
        {h:19,m:4,type: 2},
        {h:21,m:11,type: 0},
        {h:23,m:3,type: 4},
    ];

    useEffect(()=>{
        const nowDate = setTimeout(()=>{
            const now = new Date();
            const all = [];
            MoFr.forEach(e => {
                const date = new Date(now.getFullYear(),now.getMonth(),now.getDate(),e.h,e.m,0).getTime();
                if(date >= now.getTime()){
                    all.push(date - now.getTime())
                }
            });
            const distanceTime = Math.min(...all);
            const h = Math.floor((distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distanceTime % (1000 * 60)) / 1000);
            String(h).length == 2 ? setHours(h) : setHours('0' + h);
            String(m).length == 2 ? setMinutes(m) : setMinutes('0' + m);
            String(s).length == 2 ? setSeconds(s) : setSeconds('0' + s);
        }, 1000);
    })


    return(
        <>
        <div className="Bus">
            <SectionHeader title="Autobus"/>
            <div>
                <img className="bus" src="./bus.svg"/>
                <p>Odjazd za {hours}:{minutes}:{seconds}</p>
            </div>
            <TimeTable MoFr={MoFr}/>
        </div>
        <style jsx>{`
            @keyframes brum{
                0%{
                    bottom: 0;
                }
                20%{
                    bottom: 5px;
                }
                50%{
                    bottom: 10px;
                }
                80%{
                    bottom: 3px;
                }
                100%{
                    bottom: 0;
                }
            }
            .Bus{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 32px;
            @media(max-width: 627px){
            justify-content: center;
            text-align: center;
            }
            div{
                position: relative;
            }
            .bus{
                width: auto;
                height: 100px;
                position: absolute;
                animation: brum 1s infinite;
            }
            .rozklad{
                width: 50%;
            }
            p{
                font-weight: bold;
                font-size: 28px;
            }
            }
        `}</style>    
        </>
    );
}