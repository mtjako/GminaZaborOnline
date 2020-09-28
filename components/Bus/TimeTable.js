import { SectionHeader } from "../SectionHeader/SectionHeader";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';



const Wrapper = styled.div`
    width: 50%;
    min-height: 200px;
`;

const Schedule = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`;

const ScheduleItem = styled.li`
    font-size: 20px;
    width: 90px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    &:nth-child(even){
        background-color: #0002;
    }
`;

const Header = styled.p`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 16px;
`;

const TimeTable = ({MoFr}) => (
    <Wrapper>
        <Header>Rozkład jazdy na dzisiaj</Header>
        <Schedule>
            {MoFr.map((item,index)=>
                <ScheduleItem key={index}>{String(item.h).length == 2 ? item.h : '0'+item.h}:{String(item.m).length == 2 ? item.m : '0'+item.m}</ScheduleItem>
            )}
        </Schedule>
    </Wrapper>
);

export default TimeTable;