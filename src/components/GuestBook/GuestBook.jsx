import React from 'react';
import { useState } from 'react';
import { useEntries } from '../../Context/EntryContext';
import { useUser } from '../../Context/UserContext';
import { getAnimals } from '../../services/animals';
import './GuestBook.css';

export default function GuestBook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  async function updateGuest() {
    if (!guestEntry) return;
    // setUser(name);
    const animalPic = await getAnimals();
    setEntries([...entries, { image: animalPic.image_link, name, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuest();
  };

  // const guestNameInput = (
  //   <div>
  //     <label>
  //       Guest Name
  //       <input
  //         id="guestName"
  //         type="text"
  //         placeholder="Guest Name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </label>
  //   </div>
  // );

  return (
    <div className="guestbookdiv">
      <div className="guestinnerdiv">
        <h1>Guest Entries</h1>
        {!user && (
          <form onSubmit={handleSubmit}>
            {/*  */}
            <label>
              Guest Entry
              <input
                type="text"
                id="guestEntry"
                value={guestEntry}
                placeholder="Your Entry Here!"
                onChange={(e) => setGuestEntry(e.target.value)}
              />
            </label>
            <div className="buttondiv">
              <button type="submit">Sign</button>
              <button
                onClick={() => {
                  setGuestEntry('');
                  setUser(null);
                  setName('');
                }}
              >
                Not {user} ?
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
