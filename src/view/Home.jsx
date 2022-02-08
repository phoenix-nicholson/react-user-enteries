import { useEffect, useState } from 'react';
import EntryForm from '../components/EntryForm';
import { EntryProvider } from '../context/EntryContext';

export default function Home() {
  return (
    <EntryProvider>
      <EntryForm />
    </EntryProvider>
  );
}
