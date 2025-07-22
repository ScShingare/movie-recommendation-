let ajaxfile = (str) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let tblbody = document.getElementById("tblbody");
            tblbody.innerHTML = ""; // Clear previous rows

            let responseData = this.responseText;
            let jsonobj = JSON.parse(responseData);

            jsonobj.forEach((item, index) => {
                let row = document.createElement("tr");

                let col = document.createElement("td");
                col.innerHTML = "" + (index + 1);
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.title;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.description;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.release_date;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.genre;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.director;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.language;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.country;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.budget;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.revenue;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = "" + item.runtime;
                row.appendChild(col);
      
                col = document.createElement("td");
                col.innerHTML = `<img src="${item.poster_url}" alt="Poster" width="40" height="60" target="_blank"></=>`;
                row.appendChild(col);
                
                col = document.createElement("td");
                col.innerHTML = `<a href="${item.trailer_url}" target="_blank" class="btn btn-sm  btn-outline-success">Watch</a>`;
                row.appendChild(col);

                col = document.createElement("td");
                col.innerHTML = `<a href="${item.movie_url}" target="_blank" class="btn btn-sm btn-outline-danger">Play</a>`;
                row.appendChild(col);

                col = document.createElement("td");
                col.className = "text-center";
                col.innerHTML = `<a href="/deletemovie?mid=${item.mid}" class="btn btn-sm btn-danger">
                    <i class="bi bi-trash"></i> Delete
                 </a>`;
                 row.appendChild(col);

                col = document.createElement("td");
                col.className = "text-center";
                col.innerHTML = `<a href="/updatemovie?mid=${item.mid}" class="btn btn-sm btn-warning text-white">
                    <i class="bi bi-pencil-square"></i> Update
                 </a>`;
                row.appendChild(col);


                tblbody.appendChild(row);
            });
        }
    };
    xhttp.open("GET", "/moviesearch?sm=" +(str), true);
    xhttp.send();
}
