import React, { useState } from 'react';

export const ModeSwitch = (props) => {
    const [mode, setMode] = useState(true);

    const modeChanger = () => {
        console.log("== modeChanger ==");
        if(localStorage.getItem("mode") === null){
            localStorage.setItem("mode", true);
        }
        if(localStorage.getItem("mode") == 'true'){
            localStorage.setItem("mode", false);
            setMode(!mode);
        }else{
            localStorage.setItem("mode", true);
            setMode(!mode);
        }
    }
    
    return(
        <>
        <div className="ModeSwitch" onClick={modeChanger}>
            <div className="ModeSwitch__check">
            </div>
        </div>
        <style jsx>{`
            .ModeSwitch{
                width: 30px;
                height: 15px;
                transition-delay: .25s;
                transition: .5s;
                background-color: ${mode ? '#fffc' : '#000c'};
                border-radius: 25px;
                cursor: pointer;
                position: relative;
                &__check{
                    transition: .5s;
                    position: absolute;
                    transform: translateY(-50%);
                    top: 50%;
                    left: ${mode ? '-5px' : '15px'};
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #728E27;
                }
            }
        `}</style>    
        </>
    );
}