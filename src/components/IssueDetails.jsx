import React, { useState } from 'react';

export default function IssueDetails({ issue, onUpdate, onDelete, onClose }) {
  const [editMode, setEditMode] = useState(false);
  const [editedIssue, setEditedIssue] = useState(issue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedIssue(prevIssue => ({
      ...prevIssue,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedIssue);
    setEditMode(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Issue Details
        </h3>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={editedIssue.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={editedIssue.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                Priority
              </label>
              <select
                name="priority"
                id="priority"
                value={editedIssue.priority}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                name="status"
                id="status"
                value={editedIssue.status}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assignedTo">
                Assigned To
              </label>
              <input
                type="text"
                name="assignedTo"
                id="assignedTo"
                value={editedIssue.assignedTo}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Issue
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="mb-4">
              <strong>Title:</strong> {issue.title}
            </div>
            <div className="mb-4">
              <strong>Description:</strong> {issue.description}
            </div>
            <div className="mb-4">
              <strong>Priority:</strong> {issue.priority}
            </div>
            <div className="mb-4">
              <strong>Status:</strong> {issue.status}
            </div>
            <div className="mb-4">
              <strong>Assigned To:</strong> {issue.assignedTo}
            </div>
            <div className="mb-4">
              <strong>Last Updated:</strong> {new Date(issue.lastUpdated).toLocaleString()}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setEditMode(true)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(issue.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
              <button
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

