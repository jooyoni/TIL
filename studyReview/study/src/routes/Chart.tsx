import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface ChartProps{
    coinId:string;
}
interface queryProps{
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart(){
    const {coinId}=useOutletContext<ChartProps>();
     const {isLoading, data}=useQuery<queryProps[]>(["ohlcv", coinId], ()=>fetchCoinHistory(coinId));
     
    return <div>
        {isLoading?"Loading chart...":<ApexChart type="line" 
        series={[
            {
                name:"price",
                data:data?.map(price=>price.close) as number[]
            }
        ]}
        options={{
            theme:{
                mode:"dark"
            },
            chart:{
                height:300,
                width:500,
                toolbar:{
                    show:false,
                },
                background:"transparent",
            },
            yaxis:{
                show:false,
            },
            xaxis:{
                axisTicks:{show:false},
                axisBorder:{show:false},
                labels:{
                    show:false
                },
                categories:data?.map((price)=>price.time_close),
            },
            grid:{show:false},
            stroke:{
                curve:"smooth",
                width:4,
            },
            fill:{
                type:"gradient",
                gradient:{gradientToColors:["#0be881"], stops:[0,100]},
            },
            colors:["red"],
            tooltip:{
                y:{
                    formatter:(value)=>`$ ${value.toFixed(2)}`
                }
            }
        }}
        />}
    </div>
}

export default Chart;