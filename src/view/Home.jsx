import EntryForm from '../components/EntryForm';
import EntryList from '../components/EntryList';
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
