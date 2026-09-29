console.log(" I am connected");

const userDiv = document.getElementById("div");
console.log(userDiv);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.forEach((post, index) => {
      console.log(post);
      userDiv.innerHTML += `
      <div class="post-card">
        <h3>${index + 1}. ${post.title}</h3>
        <p>${post.body}</p>
      </div>          
      `;
    });
  });