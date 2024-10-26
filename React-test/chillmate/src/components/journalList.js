// JournalList.js
import React from 'react';
import JournalEntry from './journalEntry';

const JournalList = ({ entries }) => (
  <div className="journal-list">
    {entries.map(entry => (
      <JournalEntry key={entry.id} entry={entry} />
    ))}
  </div>
);

export default JournalList;
