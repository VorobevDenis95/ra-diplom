import { useAppDispatch, useAppSelector } from "../../redux/redux-hook";
import { switchCategory } from "../../redux/slice/catalogSlice";
import { PropsCategoryItem } from "../../types/CategoryInterface";


const Category = ({item}: PropsCategoryItem) => {
  const {idActiveCategory} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

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