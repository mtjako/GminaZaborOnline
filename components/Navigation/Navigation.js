import Link from 'next/link';
import { ModeSwitch } from '../ModeSwitch/ModeSwitch';
import { Menu } from '../Menu/Menu';
import React, { useState, useEffect } from 'react';

export const Navigation = (props) => {
    const [close, setClose] = useState(false);
    return(
        <>
        <nav className="Navigation">
            <div className="Navigation__wrapper">
                <div className="Navigation__wrapper__logo">
                    <Link href="/">
                        <a>
                            <p className="Navigation__logo"><span>G</span>mina Zabór INFO</p>
                        </a>
                    </Link>
                    <ModeSwitch/>
                </div>
                <div className="HamburgerBtn Navigation__menu" onClick={()=>setClose(!close)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        <Menu close={close} setClose={setClose} />
        <style jsx>{`
            .HamburgerBtn{
                position: absolute;
                top: 0;
                left: 0;
            }
            .Navigation{
                position: sticky;
                top: 0;
                z-index: 10;
                background: #000000cc;
                backdrop-filter: saturate(180%) blur(20px);
                width: 100%;
                height: 50px;
                color: #fff;
                padding-left: 20px;
                &__wrapper{
                    max-width: 1000px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    &__logo{
                        display: flex;
                        align-items: center;
                        transition: .5s;
                        margin-left: 0px;
                        @media(max-width: 1080px){
                            margin-left: 40px;
                        }
                    }
                }
                &__logo{
                    line-height: 50px;
                    font-weight: 600;
                    margin-right: 20px;
                    span{
                        color: #728E27;
                    }
                }
                &__menu{
                    cursor: pointer;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    flex-direction: column;
                    padding: 16px ;
                    span{
                        width:18px;
                        height: 3px;
                        margin: 3px 0;
                        background-color: #eee;
                        display: block;
                        border-radius: 3px;
                    }
                }

            }
        `}</style>    
        </>
    );
}