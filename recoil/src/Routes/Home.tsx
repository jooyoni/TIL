import { useRecoilState } from 'recoil';
import { list } from '../atom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface IDataProps{
    todo:string
  }
function Home(){
    const [todos, setTodos]=useRecoilState(list);
    const {register, handleSubmit, watch, setValue}=useForm<IDataProps>();
    const onValid:SubmitHandler<IDataProps>=(data)=>{
      setTodos(prev=>[...prev, {id:new Date().getTime(), todo:watch().todo}])
      setValue("todo", "");
    }
    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("todo")} />
            </form>
            <Link to="/list"><button>다음</button></Link>
        </div>
    );
}
export default Home;