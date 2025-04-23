// my wh 7====================

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import {selectFilteredContacts} from '../../redux/contactsSlice'

export default function ContactList() {
const users = useSelector(selectFilteredContacts);
   
 return (
        <ul className={css.contactListCard}>
          {users.map(user => (
            <li className={css.contactList} key={user.id}>
              <Contact  key={user.id}
                  id={user.id}
                  name={user.name}
                  number={user.number}  />
            </li>
          ))}
        </ul>
      );
    }
   

// =============mr=================================