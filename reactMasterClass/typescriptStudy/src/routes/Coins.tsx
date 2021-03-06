import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const CoinsList=styled.ul``;
const Coin=styled.li`
    background-color:white;
    color:${props=>props.theme.bgColor};
    margin-bottom:10px;
    padding:20px;
    border-radius:15px;
    cursor:pointer;
    a{
        transition :color .15s ease-in;
        display:flex;
        align-items:center;
    }
    &:hover{
        a{
            color:${props=>props.theme.accentColor};
        }
    }
`;
const Title=styled.h1`
    color:${props=>props.theme.accentColor}
`;

const Loader=styled.span`
    display:block;
    text-align:center;
`;
const Img=styled.img`
    width:35px;
    height:35px;
    margin-right:10px;
`

interface CoinInterface{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

interface RouterState {
    name: string;
    };
function Coins(){
    const [coins, setCoins]=useState<CoinInterface[]>([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        (async()=>{
            const response=await fetch("https://api.coinpaprika.com/v1/coins");
            const json=await response.json();
            setCoins(json.slice(0,100));
            setLoading(false);
        })();
    },[])
    console.log(coins);
    return <Container>
        <Header>
            <Title>코인</Title>
        </Header>
        {loading?<Loader>Loading...</Loader>:<CoinsList>
            {coins.map((coin)=><Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={{name:coin.name}}>
                    <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                    {coin.name}&rarr;
                </Link>
            </Coin>)}
        </CoinsList>}
    </Container>
}

export default Coins;