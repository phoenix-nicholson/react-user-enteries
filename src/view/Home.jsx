import EntryForm from '../components/form/EntryForm';
import EntryList from '../components/list/EntryList';
import Header from '../components/Header';
import { EntryProvider } from '../context/EntryContext';

export default function Home() {
  return (
    <EntryProvider>
      <Header />
      <EntryForm />
      <EntryList />
    </EntryProvider>
  );
}
