import React from 'react';
import { EntryProvider } from '../../Context/EntryContext';
import GuestBook from '../../components/GuestBook/GuestBook';
import EntryList from '../../components/EntryList/EntryList';

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
