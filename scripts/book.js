async function fetchBook() {
    const query = document.getElementById("book").value;
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
    const data = await res.json();
  
    const resultsDiv = document.getElementById("bookresult");
    resultsDiv.innerHTML = "";
  
    const books = data.items?.slice(0, 1);
    if (!books || books.length === 0) {
      resultsDiv.textContent = "No books found.";
      return;
    }
  
    books.forEach(book => {
      const info = book.volumeInfo;
      const bookHTML = `
        <div style="margin-bottom: 1rem; background: #fff; color: #000; padding: 1rem; border-radius: 10px;">
          <img src="${info.imageLinks?.thumbnail || ''}" alt="${info.title}" style="height: 100px;"><br/>
          <strong>${info.title}</strong><br/>
          <em>${info.authors?.join(", ") || "Unknown author"}</em><br/>
          <a href="${info.previewLink}" target="_blank">Preview Book</a>
        </div>
      `;
      resultsDiv.innerHTML += bookHTML;
    });
  }
  