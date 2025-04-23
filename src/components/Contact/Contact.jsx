
// my wh 7====================


import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "../Contact/Contact.module.css";

import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';


    export default function Contact({id, name, number}){

        const dispatch = useDispatch();
        const handleDeleteContact = () => {
            dispatch(deleteContact(id));
          };
    return(
        <div className={css.contact}>
            <div className={css.cardText}>
            <p><IoPerson className={css.icon} size="20" />{name}</p>
            <p><FaPhone className={css.icon} size="20" />{number}</p>
            </div>
        
            <button type="button" className={css.contactBtn} onClick={handleDeleteContact}>Delete</button>
        </div>
    )

}



// =============mr=================================
// import { deleteContact } from '../../redux/contacts/operations';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import { FaUser, FaPhone } from 'react-icons/fa';
// import css from './Contact.module.scss';

// export default function Contact({ contact }) {
//   const dispatch = useDispatch();
//   const handleDeleteContact = () => {
//     dispatch(deleteContact(contact.id)).unwrap().then(toast('Contact successfully deleted!'));
//   };
//   return (
//     <div className={css.wrapper}>
//       <ul className={css.list}>
//         <li className={css.li}>
//           <FaUser className={css.icon} />
//           {contact.name}
//         </li>
//         <li className={css.li}>
//           <FaPhone className={css.icon} />
//           {contact.number}
//         </li>
//       </ul>
//       <button className={css.btn} onClick={handleDeleteContact}>
//         Delete
//       </button>
//     </div>
//   );
// }