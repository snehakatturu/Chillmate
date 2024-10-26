import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import JournalList from './journalList';
import AddJournalForm from './addjournalForm';


const JournalPage = () => {
    const [entries, setEntries] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    // Filtered entries based on search query
    const filteredEntries = entries.filter(entry =>
        entry.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to add a new journal entry
    const addJournalEntry = (title, date, content) => {
        const newEntry = { id: Date.now(), title, date, content };
        setEntries([...entries, newEntry]);
        setShowAddForm(false);  // Hide form after submission
    };

    return (
        <div className="journal">
            <Navbar />
            <div className="journal-page">
            <h2>Journal</h2>
                <input
                    type="text"
                    placeholder="Search journal..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="add-journal-button" onClick={() => setShowAddForm(true)}>+</button>

                <JournalList entries={filteredEntries} />
                {showAddForm && <AddJournalForm onAddEntry={addJournalEntry} onClose={() => setShowAddForm(false)} />}
            </div>
        </div>
    );
};

export default JournalPage;