import EntryForm from '../components/EntryForm';
import EntryList from '../components/EntryList';
import { EntryProvider } from '../context/EntryContext';

export default function Home() {
  return (
    <EntryProvider>
      <EntryForm />
      <EntryList />
    </EntryProvider>
  );
}
