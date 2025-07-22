let userajaxfile = (str) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let tblbody = document.getElementById("tblbody");
            tblbody.innerHTML = ""; // Clear previous rows

            let jsonobj = JSON.parse(this.responseText);

            if (jsonobj.length === 0) {
                tblbody.innerHTML = `<tr><td colspan="17" class="text-center text-muted">No movies found.</td></tr>`;
                return;
            }

            jsonobj.forEach((item, index) => {
                let row = document.createElement("tr");
                row.className = "text-center align-middle";

                let cols = [
                    index + 1,
                    item.title,
                    item.description,
                    item.release_date,
                    item.genre,
                    item.director,
                    item.language,
                    item.country,
                    `$${item.budget}`,
                    `$${item.revenue}`,
                    `${item.runtime} min`
                ];

                cols.forEach(val => {
                    let col = document.createElement("td");
                    col.innerHTML = val;
                    row.appendChild(col);
                });

                // Poster
                let col = document.createElement("td");
                col.innerHTML = `<img src="${item.poster_url}" class="rounded shadow-sm" style="width: 40px; height: 60px; object-fit: cover;" />`;
                row.appendChild(col);

                // Trailer
                col = document.createElement("td");
                col.innerHTML = `<a href="${item.trailer_url}" target="_blank" class="btn btn-sm btn-success">
                                    <i class="bi bi-play-circle"></i>
                                 </a>`;
                row.appendChild(col);

                // Movie
                col = document.createElement("td");
                col.innerHTML = `<a href="${item.movie_url}" target="_blank" class="btn btn-sm btn-danger">
                                    <i class="bi bi-film"></i>
                                 </a>`;
                row.appendChild(col);

                // Watchlist
                col = document.createElement("td");
                col.innerHTML = `<a href="/watchlist?mid=${item.mid}" class="btn btn-sm btn-warning">
                                    <i class="bi bi-plus-circle"></i>
                                 </a>`;
                row.appendChild(col);

                // Rating
                col = document.createElement("td");
                col.innerHTML = `<a href="/ratinguser?mid=${item.mid}" class="btn btn-sm btn-warning">
                                    <i class="bi bi-plus-circle"></i>
                                 </a>`;
                row.appendChild(col);

                // Recommended
                col = document.createElement("td");
                col.innerHTML = `<a href="/recommended?mid=${item.mid}" class="btn btn-sm btn-warning">
                                    <i class="bi bi-plus-circle"></i>
                                 </a>`;
                row.appendChild(col);

                tblbody.appendChild(row);
            });
        }
    };
    xhttp.open("GET", "/moviesearch?sm=" + str, true);
    xhttp.send();
}
