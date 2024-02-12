import { useDispatch, useSelector } from "react-redux";
import { switchCategory } from "../../redux/slice/catalogSlice";


export interface PropsCategory {
    item: {
        id: number,
        title: string,
        selected: boolean,
    }
}

const Category = ({item}: PropsCategory) => {
  const {idActiveCategory} = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  // const handleClick = (id: number) => {
  //   console.log(id)
  // }

  return (
    <li className="nav-item category">
      <a className={`nav-link ${item.id === idActiveCategory ? 'active' : ''}`} 
      onClick={() =>dispatch(switchCategory(item.id))} href="#">{item.title}</a>
    </li>
  )
}

export default Category;