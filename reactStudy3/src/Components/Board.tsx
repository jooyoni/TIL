import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { useRef } from "react";
import {useForm} from "react-hook-form";
import { ITodo } from "../atoms";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

const Wrapper=styled.div`

padding-top:10px;
  background-color:${props=>props.theme.boardColor};
  border-radius:5px;
  min-height:300px;
  display:flex;
  flex-direction:column;
`

interface IAreaProps{
  isDraggingFromThis:boolean;
  isDraggingOver:boolean;
}


const Area=styled.div<IAreaProps>`
  background-color:${props=>props.isDraggingOver?"#dfe6e9":props.isDraggingFromThis?"#b2bec3":"transparent"};
  flex-grow:1;
  transition:background-color 0.3s ease-in-out; 
  padding:20px;
`;
const Title=styled.div`
    text-align:center;
    padding:10px 0;
    font-weight:bold;
`;

const Form=styled.form`
  width:100%;
  input{
     width:100%;
  }
`;
interface IBoardProps{
    todos:ITodo[];
    boardId:string;
}

interface IForm{
  todo:string;
}

function Board({todos, boardId}:IBoardProps){
  const setTodos=useSetRecoilState(todoState);
  const {register, setValue, handleSubmit}=useForm<IForm>();
  const onValid=({todo}:IForm)=>{
    const newTodo={
      id:Date.now(),
      text:todo,
    }
    setTodos(allBoards=>{
      return {
        ...allBoards,
        [boardId]:[...allBoards[boardId],newTodo]
      }
    })
    setValue("todo", "");
  }
    return (
        <Wrapper>
          <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
            <input {...register("todo", {required:true})} type="text" placeholder={`add task on ${boardId}`} />
            </Form>
          <Droppable droppableId={boardId}>
        {(magic, snapshot)=>{
          return <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
            {todos.map((todo, index)=>(
              <DraggableCard key={todo.id} index={index} todoId={todo.id} todoText={todo.text} />
            ))}
            {magic.placeholder}
          </Area>
        }}
      </Droppable>
        </Wrapper>
    )

}
export default Board;