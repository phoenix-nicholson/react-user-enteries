import React from 'react';
import { useEntry } from '../../context/EntryContext';
import './EntryList.css';

export default function EntryList() {
  const { entry } = useEntry();
  return (
    <div className="listCard">
      {entry.map(({ name, entry, id }) => (
        <div className="entryCard" key={id}>
          <h4>name: {name} </h4>
          <p>entry: {entry} </p>
        </div>
      ))}
    </div>
  );
}
