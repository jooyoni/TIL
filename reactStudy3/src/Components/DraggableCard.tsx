import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const Card=styled.div<{isDragging:boolean}>`
padding:10px 10px;
border-radius:5px;
  background-color:${props=>props.isDragging?"#74b9ff" :props.theme.cardColor};
  margin-bottom:5px;
  transition:background-color:.3s ease-in-out;
  box-shadow:${props=>props.isDragging?"0px 2px 10px rgba(0, 0, 0, 0.05)":"none"}
`

interface IDragableCardProps{
    todoId:number;
    todoText:string;
    index:number;
}
function DraggableCard({todoId,todoText, index}:IDragableCardProps){
    
    return <Draggable key={todoId} draggableId={todoId+""} index={index}>
    {(magic, snapshot)=>(
      <Card ref={magic.innerRef} 
      isDragging={snapshot.isDragging}
      {...magic.draggableProps} 
      {...magic.dragHandleProps}>
        {todoText}
      </Card>
    )} 
  </Draggable>
}
export default DraggableCard;