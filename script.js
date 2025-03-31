document.addEventListener("DOMContentLoaded", () => {
    const servicesContainer = document.getElementById("services-container");
    const contactToggle = document.getElementById("contact-toggle");
    const contactForm = document.getElementById("contact-form");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const MAX_SERVICES = 5;
    let serviceCount = 0;

    // Fetch services from local API (db.json via JSON Server)
    async function fetchServices() {
        try {
            const response = await fetch("http://localhost:3000/services"); // Fetching data
            if (!response.ok) {
                throw new Error("Failed to fetch services");
            }
            const services = await response.json(); // Convert response to JSON
            displayServices(services); // Call function to display services
        } catch (error) {
            console.error("Error loading services:", error);
        }
    }

    // Function to display services dynamically
    function displayServices(services) {
        servicesContainer.innerHTML = ""; // Clear container before adding new items
        serviceCount = 0; // Reset service count

        services.forEach(service => {
            if (serviceCount < MAX_SERVICES) {
                const serviceBox = document.createElement("div");
                serviceBox.classList.add("service-box");

                // Inner wrapper for flip effect
                const serviceBoxInner = document.createElement("div");
                serviceBoxInner.classList.add("service-box-inner");

                // Front side (image with title overlay)
                const serviceFront = document.createElement("div");
                serviceFront.classList.add("service-front");
                const serviceImage = document.createElement("img");
                serviceImage.src = service.image;
                serviceImage.alt = service.name;
                
                const serviceTitle = document.createElement("h3");
                serviceTitle.textContent = service.name;
                serviceTitle.classList.add("service-title");
                
                serviceFront.appendChild(serviceImage);
                serviceFront.appendChild(serviceTitle);

                // Back side (description)
                const serviceBack = document.createElement("div");
                serviceBack.classList.add("service-back");
                const serviceDescription = document.createElement("p");
                serviceDescription.textContent = service.description;
                serviceBack.appendChild(serviceDescription);

                // Delete Button
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.classList.add("delete-btn");
                deleteButton.addEventListener("click", (event) => {
                    event.stopPropagation(); // Prevent unwanted interactions
                    deleteService(service.id, serviceBox);
                });

                // Append elements
                serviceBoxInner.appendChild(serviceFront);
                serviceBoxInner.appendChild(serviceBack);
                serviceBox.appendChild(serviceBoxInner);
                serviceBox.appendChild(deleteButton);
                servicesContainer.appendChild(serviceBox);

                // Add hover effect for flipping
                serviceBox.addEventListener("mouseenter", () => {
                    serviceBoxInner.classList.add("flipped");
                });
                
                serviceBox.addEventListener("mouseleave", () => {
                    serviceBoxInner.classList.remove("flipped");
                });

                serviceCount++;
            }
        });
    }

    // Function to delete a service from the database
    function deleteService(serviceId, serviceBox) {
        fetch(`http://localhost:3000/services/${serviceId}`, {
            method: "DELETE"
        })
        .then(() => {
            console.log("Service deleted");
            serviceBox.remove();
            serviceCount--;
        })
        .catch(error => console.error("Error:", error));
    }

    // Toggle Contact Form (Right Click)
    contactToggle.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // Prevent default right-click behavior
        contactForm.style.display = (contactForm.style.display === "none" || contactForm.style.display === "") ? "block" : "none";
    });

    // Toggle Light/Dark Mode
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
    });

    // Initial fetch of services
    fetchServices();
});
