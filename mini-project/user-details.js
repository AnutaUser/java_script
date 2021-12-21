const divDetails = document.createElement('div');
divDetails.classList.add('divDetails');

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(users => users.json())
    .then(users => {
        for (const user of users) {
            const details = document.createElement('div');
            details.classList.add('details');
            details.innerHTML = `
            <h3>Id: ${user.id}</h3>
            <h2>Name: ${user.name}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Address:
                <div>
                    <p>Street: ${user.address.street}</p>
                    <p>Suite: ${user.address.suite}</p>
                    <p>City: ${user.address.city}</p>
                    <p>Zipcode: ${user.address.zipcode}</p>
                    <p>Geo:
                        <p>Lat: ${user.address.geo.lat}</p>
                        <p>Lng: ${user.address.geo.lng}</p>
                    </p>
                </div>
            </p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company:
                <p>Name: ${user.company.name}</p>
                <p>cCatchPhrase: ${user.company.catchPhrase}</p>
                <p>Bs: ${user.company.bs}</p>
            </p>
            `;


            divDetails.append(details);
        }
    })

document.body.appendChild(divDetails);