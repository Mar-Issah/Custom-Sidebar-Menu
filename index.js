const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
    // using the long method, if sidebar has class show-sidebar remove it else add it

//     if (sidebar.classList.contains("show-sidebar")) {
//         sidebar.classList.remove("show-sidebar");

//     } else {
//         sidebar.classList.add("show-sidebar");
// }
    
    //using the short and effective toggle()method
    sidebar.classList.toggle("show-sidebar");
});

//for the close button when you click on it it removes the show-sidebar class which does not show the sidebar
closeBtn.addEventListener("click", () => { 
    sidebar.classList.remove("show-sidebar");
});