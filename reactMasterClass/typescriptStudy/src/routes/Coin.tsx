import { useEffect, useState } from "react";
import {useParams, useLocation} from "react-router";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";
interface Params{
    coinId : string;
}
const Title=styled.h1`
    color:${props=>props.theme.accentColor}
`;

const Loader=styled.span`
    display:block;
    text-align:center;
`;
const Container=styled.div`
    padding:0px 10px;
    max-width:480px;
    margin:0 auto;
`;
const Header=styled.header`
height:10vh;
display:flex;
justify-content:center;
align-items:center`;
interface RouteState {
    state:{
        name:string;
    }
}
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;


interface IInfoData{
    id:string;
    name:string;
    symbol:string;
    rank:number;
    is_new:boolean;
    is_active:boolean;
    type:string;
    description:string;
    message:string;
    open_source:boolean;
    started_at:string;
    development_status:string;
    hardware_wallet:boolean;
    proof_type:string;
    org_structure:string;
    hash_algorithm:string;
    first_data_at:string;
    last_data_at:string;
}

interface IPriceData{
    id:string;
    name:string;
    symbol:string;
    rank:number;
    circulating_supply:number;
    total_supply:number;
    max_supply:number;
    beta_value:number;
    first_data_at:string;
    last_updated:string;
    quotes:{
        USD:{
            ath_date: string;
            ath_price:number;
            market_cap:number; 
            market_cap_change_24h:number;
            percent_change_1h:number; 
            percent_change_1y:number;
            percent_change_6h:number; 
            percent_change_7d:number; 
            percent_change_12h:number; 
            percent_change_15m:number;
            percent_change_24h:number;
            percent_change_30d:number; 
            percent_change_30m:number;
            percent_from_price_ath:number;
            price:number;
            volume_24h:number;
            volume_24h_change_24h:number;
        }
    };
}
function Coin(){
    const {coinId}=useParams();
    const [loading, setLoading]=useState(true);
    const {state} = useLocation() as RouteState;
    const [info, setInfo]=useState<IInfoData>();
    const [priceInfo, setPriceInfo]=useState<IPriceData>();
    useEffect(()=>{
        (async()=>{
            const infoData=await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData=await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            setInfo(infoData);
            setPriceInfo(priceData);
            setLoading(false);
        })()
    },[coinId])

    return <Container>
    <Header>
        <Title>{state?.name || "Loading..."}</Title>
    </Header>
    <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Outlet />
        </>
    </Container>
}

export default Coin;