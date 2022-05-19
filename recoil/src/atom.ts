import { atom } from "recoil";

export interface IListProps{
    id:number,
    todo:string
}
export const list=atom<IListProps[]>({
    key:"list",
    default:[]
})