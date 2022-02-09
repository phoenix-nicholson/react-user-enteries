import EntryForm from '../components/form/EntryForm';
import EntryList from '../components/list/EntryList';
import Header from '../components/Header/Header';
import { EntryProvider } from '../context/EntryContext';
import '../view/Home.css';

export default function Home() {
  return (
    <EntryProvider>
      <Header />
      <EntryForm />
      <EntryList />
    </EntryProvider>
  );
}
