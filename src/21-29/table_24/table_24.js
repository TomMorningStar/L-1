// Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.

// Требования:
// данные должны загружаться при загрузке страницы
// необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// необходимо реализовать клиентскую пагинацию (50 элементов на странице)

const tableBody = document.getElementById('table-body');
const pagination = document.getElementById('pagination');
let currentPage = 1;
const itemsPerPage = 50;
let data = [];

if (!data.length) {
  tableBody.innerHTML = 'Загрузка данных...'
}

async function fetchData() {
  try {
    const response = await fetch('http://www.filltext.com/?rows=1000&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true');

    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
    }

    const result = await response.json();
    data = result;
    displayData();
    updatePagination();
  } catch (error) {
    console.error(error);
    alert('Произошла ошибка при загрузке данных.');
  }
}

function displayData() {
  tableBody.innerHTML = '';
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex); // пагинация по индексам методом slice 0 50, 50 100, 100 150...

  currentData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${item.fname}</td>
          <td>${item.lname}</td>
          <td>${item.tel}</td>
          <td>${item.address}</td>
          <td>${item.city}</td>
          <td>${item.state}</td>
          <td>${item.zip}</td>
      `;
    tableBody.appendChild(row);
  });
}

function sortTable(column) {
  data.sort((a, b) => {
    if (a[column] < b[column]) return -1;
    if (a[column] > b[column]) return 1;
    return 0;
  });

  displayData();
}

function updatePagination() {
  const totalPages = Math.ceil(data.length / itemsPerPage); // всего страниц 
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      displayData();
      updatePagination();
    });
    pagination.appendChild(pageButton); // Создаем кнопки пагинации
  }
}

fetchData();
