// my hw7=======================================

import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox(){
    const dispatch = useDispatch();
    
    const filter = event => {
      dispatch(changeFilter(event.target.value));
    };
    return (
        <div className={css.searchBox}>
            <p className={css.searchTitle}>Find contacts by name</p>
            <input className={css.searchInput} type ="text" onChange={filter}></input>
        </div>
    )
}

// =============mr=================================
// import { changeFilter } from '../../redux/filters/slice';
// import { useDispatch } from 'react-redux';
// import { FaSearch } from 'react-icons/fa';
// import css from './SearchBox.module.scss';

// export default function SearchBox() {
//   const dispatch = useDispatch();
//   const handleFilterChange = event => {
//     dispatch(changeFilter(event.target.value));
//   };
//   return (
//     <div className={css.form}>
//       <div className={css.inputWrapper}>
//         <label htmlFor='search'>Find contacts by name or number</label>
//         <div className={css.inputIcon}>
//           <FaSearch className={css.icon} />
//           <input className={css.field} type='text' id='search' onChange={handleFilterChange} />
//         </div>
//       </div>
//     </div>
//   );
// }