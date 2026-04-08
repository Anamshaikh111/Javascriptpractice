// Store all projects data
let projects = [];

// Pagination variables
let currentPage = 1;
const rowsPerPage = 10;


// Function to show loading spinner
function showSpinner() {
  document.getElementById("spinner").style.display = "block";
}


// Function to hide loading spinner
function hideSpinner() {
  document.getElementById("spinner").style.display = "none";
}


// Function to fetch data from API
async function fetchProjects() {
  showSpinner();
  try {
    const res = await fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects");
    const data = await res.json();

    projects = data; // store data
    hideSpinner();

    applyFilters(); // render data
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}


// Function to create priority badge
function getPriorityBadge(priority) {
  if (priority === "high") return `<span class="badge high">High</span>`;
  if (priority === "medium") return `<span class="badge medium">Medium</span>`;
  return `<span class="badge low">Low</span>`;
}


// Function to create status style
function getStatusClass(status) {
  if (status === "Completed") return "green";
  return "red";
}


// Function to render table data
function renderTable(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach((p, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${(currentPage - 1) * rowsPerPage + index + 1}</td>
        <td>
          ${p.name || "N/A"}
          <span class="desc">Project details</span>
        </td>
        <td>${p.department || "IT"}</td>
        <td>${getPriorityBadge(p.priority)}</td>
        <td class="${getStatusClass(p.status)}">${p.status}</td>
        <td>${p.startDate || "N/A"}</td>
        <td>${p.endDate || "N/A"}</td>
      </tr>
    `;
  });
}

function paginateData(data) {
  const start = (currentPage - 1) * rowsPerPage;
  return data.slice(start, start + rowsPerPage);
}

function renderPagination(totalItems) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalItems / rowsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button onclick="goToPage(${i})">${i}</button>
    `;
  }
}

function goToPage(page) {
  currentPage = page;
  applyFilters();
}

function applyFilters() {
  let filtered = [...projects];

  const search = document.getElementById("search").value.toLowerCase();
  const status = document.getElementById("statusFilter").value;

  filtered = filtered.filter(p =>
    (p.name || "").toLowerCase().includes(search)
  );

  if (status) {
    filtered = filtered.filter(p => p.status === status);
  }

  const paginatedData = paginateData(filtered);

  renderTable(paginatedData);
  renderPagination(filtered.length);
}

document.getElementById("search").addEventListener("input", () => {
  currentPage = 1;
  applyFilters();
});

document.getElementById("statusFilter").addEventListener("change", () => {
  currentPage = 1;
  applyFilters();
});

fetchProjects();