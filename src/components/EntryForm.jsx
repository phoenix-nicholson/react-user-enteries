import React, { useState } from 'react';
import { useEntry } from '../context/EntryContext';
import { useUser } from '../context/UserContext';

export default function EntryForm() {
  const { user, setUser } = useUser();
  const { entry, setEntry } = useEntry();
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');

  function updateEntryList() {
    if (!newEntry) return setUser(name);
    setEntry([...entry, { name: name, entry: newEntry }]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntryList();
  };
  console.log('entry', entry);
  console.log('user', user);
  return (
    <div>
      <form>
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
        <button onClick={handleSubmit}>submit entry</button>
      </form>
    </div>
  );
}
