  import {DragDropContext, Draggable, DropResult} from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { ITodo, todoState } from "./atoms";
import Board from "./Components/Board";
import {motion} from "framer-motion";

const Wrapper=styled.div`
  display:flex;
  max-width:680px;
  width:100%;
  margin : 0 auto; 
  justify-content:conet;
  align-items:center;
  height:100vh;
`;
const Boards=styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  width:100%;
  gap:10px;
`;



function App() {
  const [todos,setTodos]=useRecoilState(todoState);
  const onDragEnd=(info:DropResult)=>{
    const {destination, draggableId, source}=info;
    if (!destination) return;
    if(destination?.droppableId===source.droppableId){
      setTodos(allBoards=>{
        const boardCopy=[...allBoards[source.droppableId]];
        const taskObj=boardCopy[source.index];
        console.log(boardCopy);
        boardCopy.splice(source.index, 1)
        boardCopy.splice(destination?.index, 0, taskObj);
        console.log(source.droppableId);
        return {
          ...allBoards,
          [source.droppableId]:boardCopy
        }
      })
    }
    if(destination?.droppableId!==source.droppableId){
      setTodos((allBoards)=>{
        const sourceBoard=[...allBoards[source.droppableId]];
        const taskObj=sourceBoard[source.index];
        const destinationBoard=[...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]:sourceBoard,
          [destination.droppableId]:destinationBoard
        }
      })
    }
  };
  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
        {Object.keys(todos).map(boardId=><Board boardId={boardId} key={boardId} todos={todos[boardId]} />)}
        <motion.div>df</motion.div>
      </Boards>
    </Wrapper>
  </DragDropContext>
}

export default App;
