async function loadPosts(offset = 0, count = 10) {
  try {
    const response = await fetch(`http://localhost:3000/?owner_id=-1&offset=${offset}&count=${count}&access_token=f39a6f8ef39a6f8ef39a6f8e02f08f0c49ff39af39a6f8e9779d9e6ee978cfec8b753aa&v=5.131`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        return data.response.items;
      } else {
        console.error('Response is not JSON:', response);
        return [];
      }
    } else {
      console.error('Response status is not OK:', response);
      return [];
    }
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

// Функция для отображения постов
function displayPosts(posts) {
  const container = document.getElementById("widget-container");
  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.innerText = post.text;
    container.appendChild(postElement);
  });
}

// Функция для кэширования данных в localStorage
function cachePosts(posts) {
  const cachedData = JSON.parse(localStorage.getItem("cachedPosts")) || [];
  const newData = cachedData.concat(posts);
  if (newData.length > 100) {
    newData.splice(0, newData.length - 100); // Ограничиваем хранение последних 100 постов
  }
  localStorage.setItem("cachedPosts", JSON.stringify(newData));

  // Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage
  //  для предыдущей задачи. При изменении данных в localStorage в консоль должен
  //   выводиться объем занятой памяти / максимальный размер 	хранилища.

  const usedSpace = JSON.stringify(localStorage).length;
  const totalSpace = 4194302; // 5 MB

  document.querySelector('.info').textContent = `объем занятой памяти: ${JSON.stringify(localStorage).length} / максимальный размер хранилища: ${totalSpace}`
  console.log(`объем занятой памяти: ${usedSpace} / максимальный размер хранилища: ${totalSpace}`);
}

// Функция для инициализации виджета
export async function initWidget() {
  const container = document.getElementById("widget-container");
  container.style.display = "block";
  let offset = 0;
  const cachedData = JSON.parse(localStorage.getItem("cachedPosts")) || [];
  const posts = await loadPosts(offset);

  document.querySelector('.info').textContent = `объем занятой памяти: ${JSON.stringify(localStorage).length} / максимальный размер хранилища: ${4194302}`

  if (cachedData.length > 0) {
    displayPosts(cachedData);
  } else {
    displayPosts(posts);
  }

  // Обработчик прокрутки для подгрузки новых постов
  document.getElementById("widget-container").addEventListener("scroll", async function () {
    if (Math.floor(container.scrollHeight - container.scrollTop) === container.clientHeight ||
      Math.ceil(container.scrollHeight - container.scrollTop) === container.clientHeight) {
      offset += 10; // Загружаем следующие 10 постов
      const newPosts = await loadPosts(offset);
      if (newPosts.length > 0) {
        displayPosts(newPosts);
        cachePosts(newPosts);
      }
    }
  });
}

initWidget(); // Запуск модуля получения постов из ВКонтакте
