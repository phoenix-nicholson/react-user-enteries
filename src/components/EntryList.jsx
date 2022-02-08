import React from 'react';
import { useEntry } from '../context/EntryContext';

export default function EntryList() {
  const { entry } = useEntry();
  return (
    <div>
      {entry.map(({ name, entry, id }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>{entry}</p>
        </div>
      ))}
    </div>
  );
}
