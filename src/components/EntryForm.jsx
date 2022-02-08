import React from 'react';

export default function EntryForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="your name" />
        <input type="text" placeholder="your entry" />
        <button>submit entry</button>
      </form>
    </div>
  );
}
