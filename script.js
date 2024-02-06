function fetchUserData() {
    const userId = document.getElementById('userId').value;
    const userDataContainer = document.getElementById('userData');

    const xhr = new XMLHttpRequest();
    
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const userData = JSON.parse(xhr.responseText);

            userDataContainer.innerHTML = `
                <h2>User Information</h2>
                <p><strong>Name:</strong> ${userData.name}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Phone:</strong> ${userData.phone}</p>
            `;
        } else {
            userDataContainer.innerHTML = `<p>Error: ${xhr.status}</p>`;
        }
    };

    xhr.send();
}
