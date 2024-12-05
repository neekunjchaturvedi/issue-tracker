import React from 'react';

export default function Dashboard({ issues, onCreateIssue }) {
  const totalIssues = issues.length;
  const openIssues = issues.filter(issue => issue.status === 'Open').length;
  const assignedToUser = issues.filter(issue => issue.assignedTo === 'Current User').length;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="font-bold">Total Issues</h3>
          <p className="text-2xl">{totalIssues}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h3 className="font-bold">Open Issues</h3>
          <p className="text-2xl">{openIssues}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h3 className="font-bold">Assigned to You</h3>
          <p className="text-2xl">{assignedToUser}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <button 
          onClick={onCreateIssue}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Issue
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          View Assigned Issues
        </button>
      </div>
    </div>
  );
}

