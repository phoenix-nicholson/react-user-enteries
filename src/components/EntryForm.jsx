import React, { useState } from 'react';
import { useEntry } from '../context/EntryContext';
import { useUser } from '../context/UserContext';

export default function EntryForm() {
  const { user, setUser } = useUser();
  const { entry, setEntry } = useEntry();
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');

  function updateEntryList() {
    setUser(name);
    setEntry((prevState) => [
      ...prevState,
      { name: name, entry: newEntry, id: Math.floor(Math.random() * 100) },
    ]);
    setNewEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntryList();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="your entry"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button>submit entry</button>
      </form>
    </div>
  );
}
