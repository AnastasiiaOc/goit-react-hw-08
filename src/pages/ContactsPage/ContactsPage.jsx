import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectIsError,  selectIsLoading } from '../../redux/contacts/selectors';

import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';


  export default function ContactsPage() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

return (
    <div>
      <h2> Your phonebook</h2>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading</p>}
      {isError !== null && <p>Whoops, something goes wrong.</p>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}