import React from 'react';

export default function Home() {
  return (
    <div>
      <EntryProvider>
        <GuestBook />
        <EntryList />
      </EntryProvider>
    </div>
  );
}
