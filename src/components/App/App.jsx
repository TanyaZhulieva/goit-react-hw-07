import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "modern-normalize";
import css from "./App.module.css";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import LoadingMessage from '../LoadingMessage/LoadingMessage'
import ErrorMessage from "../ErrorMessage/EroorMessage.jsx";
import { fetchContacts } from "../../redux/contactsOps.js";


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  const isLoading= useSelector((state)=>{state.contacts.loading})
  const isError= useSelector((state)=>{state.contacts.error})

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      {isLoading && <LoadingMessage/>}
      {isError && <ErrorMessage/>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
