import React, { useState } from 'react';

export default function IssueList({ issues, onSelectIssue }) {
  const [filters, setFilters] = useState({
    status: 'All',
    priority: 'All',
    assignedTo: 'All'
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = issues.filter(issue => {
    return (
      (filters.status === 'All' || issue.status === filters.status) &&
      (filters.priority === 'All' || issue.priority === filters.priority) &&
      (filters.assignedTo === 'All' || issue.assignedTo === filters.assignedTo) &&
      (issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       issue.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Issue List</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search issues..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex mb-4 space-x-4">
        <select
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={filters.status}
          onChange={(e) => setFilters({...filters, status: e.target.value})}
        >
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
        <select
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={filters.priority}
          onChange={(e) => setFilters({...filters, priority: e.target.value})}
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={filters.assignedTo}
          onChange={(e) => setFilters({...filters, assignedTo: e.target.value})}
        >
          <option value="All">All Users</option>
          <option value="User 1">User 1</option>
          <option value="User 2">User 2</option>
          <option value="User 3">User 3</option>
        </select>
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Assigned To</th>
            <th className="px-4 py-2">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map(issue => (
            <tr key={issue.id} onClick={() => onSelectIssue(issue)} className="cursor-pointer hover:bg-gray-100">
              <td className="border px-4 py-2">{issue.title}</td>
              <td className="border px-4 py-2">{issue.priority}</td>
              <td className="border px-4 py-2">{issue.status}</td>
              <td className="border px-4 py-2">{issue.assignedTo}</td>
              <td className="border px-4 py-2">{new Date(issue.lastUpdated).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

