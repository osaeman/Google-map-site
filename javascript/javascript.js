
const create_cmp_btn = document.getElementById("create_cmp_btn");
const create_cmp_panel_container = document.getElementById("create_cmp_panel_container")
const side_panel = document.getElementById("side_panel")
create_cmp_btn.addEventListener("click", onclick)

function onclick() {
    side_panel.style.display = "none";
    create_cmp_panel_container.style.display = "block";
}


const asset_filter_dropdown = document.querySelector(".fa-subway");
const asset_filter_card = document.querySelector(".asset_filter_card")

asset_filter_dropdown.addEventListener('click', onclicktwo)

function onclicktwo() {
    if (asset_filter_card.style.display == "flex") {
        asset_filter_card.style.display = "none";
    } else {
        asset_filter_card.style.display = "flex";
    }

}

const cmp_filter_dropdown = document.getElementById("cmp_filter_icon");
const cmp_filter_card = document.querySelector(".cmp_filter_card")

cmp_filter_dropdown.addEventListener('click', onclickthree)

function onclickthree() {
    if (cmp_filter_card.style.display == "flex") {
        cmp_filter_card.style.display = "none";
    } else {
        cmp_filter_card.style.display = "flex";
    }

}

const division = document.querySelector(".division");
const sub_division = document.querySelector(".subdivision");
const search = document.querySelector(".search");
const search_dropdown = document.querySelector(".search_dropdown");
const divison_dropdown = document.querySelector(".divison_dropdown");
const subdivison_dropdown = document.querySelector(".subdivison_dropdown");


division.addEventListener('click', onclickfour)
sub_division.addEventListener('click', onclickfive)
search.addEventListener('click', onclicksix)

function onclicksix() {
    if (search_dropdown.style.display == "block") {
        search_dropdown.style.display = "none";
    } else {
        search_dropdown.style.display = "block";
    }
}

function onclickfour() {
    if (divison_dropdown.style.display == "flex") {
        divison_dropdown.style.display = "none";
    } else {
        divison_dropdown.style.display = "flex";
    }
}

function onclickfive() {
    if (subdivison_dropdown.style.display == "flex") {
        subdivison_dropdown.style.display = "none";
    } else {
        subdivison_dropdown.style.display = "flex";
    }
}

// closing create cmp panel using side button
const side_btn = document.querySelector(".side_btn");
const map_area = document.querySelector(".map_area")

side_btn.addEventListener("click", () => {
    if (!map_area.classList.contains("map_area2")) {
        create_cmp_panel_container.classList.add("create_cmp_panel_container2");
        map_area.classList.add("map_area2")
    } else {
        create_cmp_panel_container.classList.remove("create_cmp_panel_container2");
        map_area.classList.remove("map_area2")
    }
})

// Closing Craete CMP form using Home icon
const fa_home = document.querySelector(".fa-home")
fa_home.addEventListener("click", onclickseven)
function onclickseven() {
    map_area.style.width = "67%"
    side_panel.style.display = "block";
    side_panel.style.width = "33%";
    create_cmp_panel_container.style.display = "none";

}

//  glowing circles on map area
const map_circles = document.querySelector(".map_circles")
const cmp_card_1 = document.getElementById("cmp_card_1")

const map_square_box = document.querySelector(".map_square_box")
const triangle = document.querySelector(".triangle")
cmp_card_1.addEventListener("mouseover", onclickeight)
function onclickeight() {
    map_circles.style.backgroundColor = "black";
    map_circles.style.color = "white";
    map_square_box.style.backgroundColor = "#dd3131";
    map_square_box.style.border = "none";
    triangle.style.borderTopColor = "#dd3131";
}

cmp_card_1.addEventListener("mouseout", () => {
    map_circles.style.backgroundColor = "white";
    map_circles.style.color = "black";
    map_square_box.style.backgroundColor = "white";
    triangle.style.borderTopColor = "black";
    map_square_box.style.border = "1px solid black";
})


// tabination functionality
const all_tab = document.querySelector(".all_tab");
const all_tab_content = document.querySelector(".all_tab_content");
const my_cmp_tab = document.querySelector(".my_cmp_tab");
const my_cmp_tab_content = document.querySelector(".my_cmp_tab_content");
const favourites_tab = document.querySelector(".favourites_tab");
const favourites_tab_content = document.querySelector(".favourites_tab_content");
// showing all tab section
all_tab.addEventListener("click", () => {
    my_cmp_tab_content.style.display = "none";
    favourites_tab_content.style.display = "none";
    all_tab_content.style.display = "block";

    all_tab.classList.add("tab_select");
    my_cmp_tab.classList.remove("tab_select");
    favourites_tab.classList.remove("tab_select");

    favourites_tab.classList.add("tabination_border_class")
    my_cmp_tab.classList.remove("tabination_border_class")
})

// showing my cmps section
my_cmp_tab.addEventListener("click", () => {
    all_tab_content.style.display = "none";
    my_cmp_tab_content.style.display = "block";
    favourites_tab_content.style.display = "none";
    all_tab.classList.remove("tab_select");
    my_cmp_tab.classList.add("tab_select");
    favourites_tab.classList.remove("tab_select");

    favourites_tab.classList.remove("tabination_border_class")
    my_cmp_tab.classList.remove("tabination_border_class")
})

// showing favourites section
favourites_tab.addEventListener("click", () => {
    all_tab_content.style.display = "none";
    my_cmp_tab_content.style.display = "none";
    favourites_tab_content.style.display = "block";
    all_tab.classList.remove("tab_select");
    my_cmp_tab.classList.remove("tab_select");
    favourites_tab.classList.add("tab_select");

    favourites_tab.classList.remove("tabination_border_class")
    my_cmp_tab.classList.add("tabination_border_class")
})


// switching between panels

// from first panel to second one 
const cmp_search_results = document.querySelector(".cmp_search_results")
cmp_card_1.addEventListener("click", () => {
    side_panel.style.display = "none"
    cmp_search_results.style.display = "block"

})

// form second panel to the third one
const cmp_card_selection_window = document.querySelector(".cmp_card_selection_window");
const to_cmp_card_selection_window = document.getElementById("to_cmp_card_selection_window")

to_cmp_card_selection_window.addEventListener("click", () => {
    side_panel.style.display = "none"
    cmp_search_results.style.display = "none"
    cmp_card_selection_window.style.display = "block"
})


// from third panel to the CMP Details
const to_cmp_details_panel = document.getElementById("to_cmp_details_panel");
const cmp_details_panel_container = document.querySelector(".cmp_details_panel_container");

to_cmp_details_panel.addEventListener("click", () => {
    side_panel.style.display = "none"
    cmp_search_results.style.display = "none"
    cmp_card_selection_window.style.display = "none"
    cmp_details_panel_container.style.display = "block"
})

// from CMP details to the Edit CMP upon cliking Edit btn
const edit_btn = document.querySelector(".edit_btn");
const edit_cmp_panel_container = document.querySelector(".edit_cmp_panel_container");

edit_btn.addEventListener("click", () => {
    side_panel.style.display = "none"
    cmp_search_results.style.display = "none"
    cmp_card_selection_window.style.display = "none"
    cmp_details_panel_container.style.display = "none"
    edit_cmp_panel_container.style.display = "block";
})

// returing back to the cmp panel
const save_btn = document.querySelector(".save_btn");
const submit_btn = document.querySelector(".submit_btn");

save_btn.addEventListener("click", () => {
    side_panel.style.display = "block"
    edit_cmp_panel_container.style.display = "none";
})

submit_btn.addEventListener("click", () => {
    side_panel.style.display = "block"
    edit_cmp_panel_container.style.display = "none";
})

// going to the main panel window upon clicking the close btn on panel
const close_btn = document.querySelectorAll(".fa-times-circle")

close_btn.forEach((ele)=>{
ele.addEventListener("click", ()=>{
    side_panel.style.display = "block"
    cmp_search_results.style.display = "none"
    cmp_card_selection_window.style.display = "none"
    cmp_details_panel_container.style.display = "none"
    edit_cmp_panel_container.style.display = "none";
})
})


// going on the previous panel using the back icon

// going onto the main panel
const to_main_panel = document.querySelector(".to_main_panel")

to_main_panel.addEventListener("click" , ()=>{
    side_panel.style.display = "block"
    cmp_search_results.style.display = "none"
})

// going onto the CMP search results from Cmp Card Selection Window
const to_cmp_search= document.querySelector(".to_cmp_search")

to_cmp_search.addEventListener("click" , ()=>{
    cmp_search_results.style.display = "block"
    cmp_card_selection_window.style.display = "none"
})

// going onto the Cmp Card Selection Window form CMP details
const to_cmp_card_selection = document.querySelector(".to_cmp_card_selection")

to_cmp_card_selection.addEventListener("click" , ()=>{
    cmp_card_selection_window.style.display = "block"
    cmp_details_panel_container.style.display = "none"
  
})

//  going to the CMP details form CMP Edit 
const to_cmp_details = document.querySelector(".to_cmp_details")

to_cmp_details.addEventListener("click" , ()=>{
    cmp_details_panel_container.style.display = "block"
    edit_cmp_panel_container.style.display = "none";
})