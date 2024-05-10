import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { getFilters } from "../../redux/filtersSlice.js";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(getFilters);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <>
      <ul>
        {filterContacts.map((contact) => (
          <li key={contact.id} className={css.contact}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}