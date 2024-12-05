import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import IssueList from './components/IssueList';
import IssueForm from './components/IssueForm';
import IssueDetails from './components/IssueDetails';
import { generateMockIssues } from './utils/mockData';

export default function App() {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    // Load mock data on initial render
    setIssues(generateMockIssues(10));
  }, []);

  const handleCreateIssue = (newIssue) => {
    setIssues([...issues, { ...newIssue, id: Date.now(), status: 'Open', lastUpdated: new Date() }]);
    setIsFormOpen(false);
  };

  const handleUpdateIssue = (updatedIssue) => {
    setIssues(issues.map(issue => issue.id === updatedIssue.id ? { ...updatedIssue, lastUpdated: new Date() } : issue));
    setIsDetailsOpen(false);
    setSelectedIssue(null);
  };

  const handleDeleteIssue = (id) => {
    setIssues(issues.filter(issue => issue.id !== id));
    setIsDetailsOpen(false);
    setSelectedIssue(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Issue Tracker</h1>
      <Dashboard issues={issues} onCreateIssue={() => setIsFormOpen(true)} />
      <IssueList 
        issues={issues} 
        onSelectIssue={(issue) => {
          setSelectedIssue(issue);
          setIsDetailsOpen(true);
        }}
      />
      {isFormOpen && (
        <IssueForm onSubmit={handleCreateIssue} onClose={() => setIsFormOpen(false)} />
      )}
      {isDetailsOpen && selectedIssue && (
        <IssueDetails 
          issue={selectedIssue} 
          onUpdate={handleUpdateIssue} 
          onDelete={handleDeleteIssue}
          onClose={() => {
            setIsDetailsOpen(false);
            setSelectedIssue(null);
          }}
        />
      )}
    </div>
  );
}


