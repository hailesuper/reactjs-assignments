let groups=[];


fetch("http://localhost:8080/api/v1/groups?page=1&size=3&sort=id,DESC",
    {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Basic ' + btoa('hai01:123456'),
            'Content-Type': 'json'
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.content);
        groups = data.content;
        console.log(groups);
        let tableBody = document.querySelector(".table-body");
        groups.map(group => {
            // let groupRow = document.createElement("tr");
            tableBody.append(`<tr><td>${group.id}</td>
<td>${group.name}</td>
<td>${group.creator.fullName}</td></tr>`)
        })
    })
    .catch(error => console.log(error))

