import React, { useState } from 'react';
import { Plus, Search, MoreVertical } from 'lucide-react';

const Home = () => {
  // Sample notes data - replace with your actual data
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Welcome Note',
      content: 'Welcome to your new notes app! Start creating notes by clicking the + button.',
      date: '2024-01-07',
      color: 'bg-yellow-100'
    },
    {
      id: 2,
      title: 'Meeting Notes',
      content: 'Discuss project timeline and deliverables. Follow up with team members.',
      date: '2024-01-07',
      color: 'bg-blue-100'
    },
    {
      id: 3,
      title: 'Ideas',
      content: 'New feature ideas for the upcoming sprint. Research needed.',
      date: '2024-01-07',
      color: 'bg-green-100'
    }
  ]);

  // Note Card Component
  const NoteCard = ({ note }) => (
    <div className={`${note.color} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-lg text-gray-800">{note.title}</h3>
        <button className="p-1 hover:bg-gray-200 rounded-full">
          <MoreVertical className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
      <div className="text-sm text-gray-500">{note.date}</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Quick Actions */}
      <div className="mb-8 flex flex-wrap gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          New Note
        </button>
        
        {/* Mobile Search - visible only on mobile */}
        <div className="relative w-full md:hidden">
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>

      {/* Empty State */}
      {notes.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No notes yet</h3>
          <p className="text-gray-500 mb-4">Create your first note to get started!</p>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto">
            <Plus className="h-5 w-5" />
            Create Note
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;