document.addEventListener("DOMContentLoaded", function() {
    const membersContainer = document.getElementById("members-container");
    const gridViewBtn = document.getElementById("grid-view-btn");
    const listViewBtn = document.getElementById("list-view-btn");

    let isGridView = true; 

    
    function fetchMembersData() {
        fetch("./data/members.json")
            .then(response => response.json())
            .then(data => {
                displayMembers(data.members);
            })
            .catch(error => console.error("Error fetching members data:", error));
    }

    
    function displayMembers(members) {
        membersContainer.innerHTML = ""; 

        members.forEach(member => {
            if (isGridView) {
                createMemberCard(member);
            } else {
                createMemberListItem(member);
            }
        });
    }

    
    function createMemberCard(member) {
        const card = document.createElement("div");
        card.classList.add("member-card");

        const name = document.createElement("h3");
        name.textContent = member.name;
        card.appendChild(name);

        const address = document.createElement("p");
        address.textContent = member.address;
        card.appendChild(address);

        const phone = document.createElement("p");
        phone.textContent = member.phone;
        card.appendChild(phone);

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        card.appendChild(website);

        membersContainer.appendChild(card);
    }

    
    function createMemberListItem(member) {
        const listItem = document.createElement("div");
        listItem.classList.add("member-list-item");

        const name = document.createElement("h3");
        name.textContent = member.name;
        listItem.appendChild(name);

        const address = document.createElement("p");
        address.textContent = member.address;
        listItem.appendChild(address);

        const phone = document.createElement("p");
        phone.textContent = member.phone;
        listItem.appendChild(phone);

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        listItem.appendChild(website);

        membersContainer.appendChild(listItem);
    }

    
    gridViewBtn.addEventListener("click", function() {
        isGridView = true;
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
        fetchMembersData();
    });

    listViewBtn.addEventListener("click", function() {
        isGridView = false;
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
        fetchMembersData();
    });

    
    fetchMembersData();
});
