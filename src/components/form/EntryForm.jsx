import React, { useState } from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import './EntryForm.css';

export default function EntryForm() {
  const { user, setUser } = useUser();
  const { setEntry } = useEntry();
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

  const changeName = (
    <label>
      <h4>Name:</h4>
      <input
        type="text"
        placeholder="your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
  const handleName = (e) => {
    e.preventDefault();
    setUser('');
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {user ? null : changeName}
        <label>
          <h4>Entry:</h4>
          <input
            type="text"
            placeholder="your entry"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          />
        </label>
        <button>submit entry</button>
        <button onClick={handleName}> switch name</button>
      </form>
    </div>
  );
}
