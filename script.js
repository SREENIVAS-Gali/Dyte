const logs = [
  {
    "level": "error",
    "message": "Failed to connect to DB",
    "resourceId": "server-1234",
    "timestamp": "2023-09-15T08:00:00Z",
    "traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
      "parentResourceId": "server-0987"
    }
  },
  {
    "level": "info",
    "message": "User logged in",
    "resourceId": "client-5678",
    "timestamp": "2023-09-16T12:30:00Z",
    "traceId": "def-uvw-456",
    "spanId": "span-789",
    "commit": "8a912bf",
    "metadata": {
      "parentResourceId": "client-1234"
    }
  },
  // Add more log objects...
];
function searchLogs() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = ''; // Clear previous results

  const filteredLogs = logs.filter(log =>
      log.level.toLowerCase().includes(query) ||
      log.message.toLowerCase().includes(query) ||
      log.resourceId.toLowerCase().includes(query) ||
      log.timestamp.toLowerCase().includes(query) ||
      log.traceId.toLowerCase().includes(query) ||
      log.spanId.toLowerCase().includes(query) ||
      log.commit.toLowerCase().includes(query) ||
      (log.metadata && log.metadata.parentResourceId.toLowerCase().includes(query))
  );

  if (filteredLogs.length === 0) {
      resultsContainer.innerHTML = "<p>No matching logs found.</p>";
      return;
  }

  filteredLogs.forEach(log => {
      const logDiv = document.createElement('div');
      logDiv.classList.add('log-item');
      logDiv.innerHTML = `<p>Level: ${log.level}, Message: ${log.message}, Timestamp: ${log.timestamp}</p>`; // Display log data, modify as needed
      resultsContainer.appendChild(logDiv);
  });
}
