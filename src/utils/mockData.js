export function generateMockIssues(count) {
  const issues = [];
  const statuses = ["Open", "In Progress", "Closed"];
  const priorities = ["Low", "Medium", "High"];
  const users = ["User 1", "User 2", "User 3"];

  for (let i = 0; i < count; i++) {
    issues.push({
      id: i + 1,
      title: `Issue ${i + 1}`,
      description: `This is a description for Issue ${i + 1}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      assignedTo: users[Math.floor(Math.random() * users.length)],
      lastUpdated: new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      ).toISOString(),
    });
  }

  return issues;
}
