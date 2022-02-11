import React from 'react';
import { useState } from 'react';
import { useEntries } from '../../Context/EntryContext';
import { useUser } from '../../Context/UserContext';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  function updateGuest() {
    if (!guestEntry) return;
    setUser(name);
    setEntries([...entries, { name, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  const guestNameInput = (
    <div>
      <label>Guest Name</label>
      <input
        id="guestName"
        type="text"
        placeholder="Guest Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );

  const displayMessage = user ? `Thanks for Signing ${user}!` : 'Please Sign the Guestbook!';

  return (
    <div>
      <h1>Guest Entries</h1>
      {!user && guestNameInput}
      <form onSubmit={handleSubmit}>
        {/*  */}
        <label>Guest Entry</label>
        <input
          type="text"
          id="guestEntry"
          value={guestEntry}
          placeholder="Your Entry Here!"
          onChange={(e) => setGuestEntry(e.target.value)}
        />
        <button type="submit">Sign</button>
        <button
          onClick={() => {
            setGuestEntry('');
            setUser('');
            setName('');
          }}
        >
          Not {user} ?
        </button>
      </form>
    </div>
  );
}


