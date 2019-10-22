

/* ==================================*/
/* HEADER */
/* ==================================*/


// toggle sidebar

function arrowToggle(x){
    x.classList.toggle("active");
}

function flip(x){
    x.classList.toggle("right");

    const body = document.querySelector('.body');
    const logo = document.querySelector('.logo');
    const logoName = document.querySelector('.logo-name');
    const sideNavNames = document.querySelectorAll('.sidenav-menu-item-name');

    if(logoName.style.display === '' || logoName.style.display === 'none'){
        body.style['grid-template-columns'] = '200px';
        logoName.style.display = 'inline-block';
        logo.style.width = '200px';
        sideNavNames.forEach(function(name){
            name.style.display = 'inline-block';
        })

    }else{
        logo.style.width = '60px';
        logoName.style.display = 'none';
        body.style['grid-template-columns'] = '60px';
        sideNavNames.forEach(function(name){
            name.style.display = 'none';
        })
    }

}

window.onresize = function(){
    var nav = document.querySelector("nav");
    const sideNavNames = document.querySelectorAll('.sidenav .sidenav-menu-item-name');
    const body = document.querySelector('.body');
    const logoName = document.querySelector('.logo-name');
    const logo = document.querySelector('.logo');

    if(window.innerWidth > 767){
        body.style['grid-template-columns'] = '200px';
        logoName.style.display = 'inline-block';
        logo.style.width = '200px';
        sideNavNames.forEach(function(name){
            name.style.display = 'inline-block';
        })
    }
    else if(window.innerWidth > 480){
        nav.style.display = 'block';
        logo.style.width = '60px';
        body.style['grid-template-columns'] = '60px';
        logoName.style.display = 'none';
        sideNavNames.forEach(function(name){
            name.style.display = 'none';
        })
    }else{
        nav.style.display = 'none';
        sideNavNames.forEach(function(name){
            name.style.display = 'inline-block';
        })
    }
}

// toggle menu

function menuToggle(x) {
    x.classList.toggle("change");
    var x = document.querySelector("nav");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
}

function generateItems() {
    return [
      { id: 1, title: 'Meeting with Ben\'s agent.', date: '24.02.2014' ,status: 'deleted'},
      { id: 2, title: 'Papers review with Tonny.',date: '24.02.2014',status: 'checked'},
      { id: 3, title: 'Annual party at Eric\'s house.', date: '24.02.2014', status: 'active'},
      { id: 4, title: 'Last day to pay off auto credit.', date: '24.02.2014',status: ''},
      { id: 5, title: 'Call and schedule another meeting with Amanda.', date: '24.02.2014',status: 'deleted' },
      { id: 6, title: 'Don\'t forget to send in financial reports.', date: '24.02.2014' ,status: 'active'}
    ];
}
  
window.onclick = function(e){
const dropdown = document.querySelector('.messages');

    if(!e.target.matches('.dropbtnMsg')){
        if(!dropdown.style.display === 'none'){
        dropdown.style.display = 'block';
        }else{
        dropdown.style.display = 'none';
        }
    }
}

function toggleMessages() {

const dropdown = document.querySelector(".messages");
    if(dropdown.style.display === 'none'){
        dropdown.style.display = 'block';
        notifications();
    }else{
        dropdown.style.display = 'none';
    }
}



function notifications(){
const data = generateItems();

const msgList = document.querySelector('.msg-list');
msgList.innerHTML ="";

data.forEach(function(item){

    if(item.status === 'deleted') return;

    const li = document.createElement('li');
    li.className = 'msg-item';
    const signIcon = document.createElement('i');
    const link = document.createElement('a');
    link.className = 'msg';
    link.innerText = item.title;
    const deleteIcon = document.createElement('i');
    deleteIcon.classList = 'fas fa-trash-alt deleteIcon';
    deleteIcon.setAttribute('onClick','deleteItem(event)');

    if(item.status === 'active'){
    signIcon.classList = 'far fa-circle signIcon';
    signIcon.setAttribute('onClick','checkUncheck(event)');
    }else if(item.status === 'checked'){
    signIcon.classList = 'fas fa-circle signIcon checked';
    signIcon.setAttribute('onClick','checkUncheck(event)');
    }else {
    signIcon.classList = 'far fa-circle signIcon';
    signIcon.setAttribute('onClick','checkUncheck(event)');
    }

    li.appendChild(signIcon);
    li.appendChild(link);
    li.appendChild(deleteIcon);
    msgList.appendChild(li);

})

badges();

}

function badges(){
    const data = generateItems();
    const envBadge = document.querySelector('.envelope-badge');

    var cnt = 0;
    data.forEach(function(item){
        if(item.status === 'active' || item.status === '') {
        cnt++;
        }
    });
    if(cnt === 0){ envBadge.style.display = 'none' }
    else{ envBadge.innerHTML = cnt; }

}

badges();


function deleteItem(e){
    const item = e.currentTarget.parentNode;
    const envBadge = document.querySelector('.envelope-badge');
    var cnt = Number(envBadge.innerHTML);
    const deleteIcon = item.childNodes[0];


    item.style.opacity = 1;
    (function fade() {
        if ((item.style.opacity -= .05) < 0) {
        item.style.display = "none";
        } else {
        requestAnimationFrame(fade);
        }
    })();

    if(!deleteIcon.classList.contains('checked')){
        envBadge.innerHTML = (cnt - 1);
    }


};

function checkUncheck(e){
    const item = e.currentTarget;
    const envBadge = document.querySelector('.envelope-badge');
    var cnt = Number(envBadge.innerHTML);

    if(item.classList.contains('checked')){
        item.classList.toggle('checked');
        item.classList = 'far fa-circle signIcon';
        envBadge.innerHTML = (cnt + 1);

    }else{
        item.classList = 'fas fa-circle signIcon checked';
        envBadge.innerHTML = (cnt - 1);
    }

}

//should make async check 
    function checkIfExists(){
    const envBadge = document.querySelector('.envelope-badge');
    var cnt = Number(envBadge.innerHTML);
    if(cnt === 0){ envBadge.style.display = 'none' }

}

checkIfExists();


// dropdown

function accountDropdown() {
    document.querySelector(".account-dropdown-content").classList.toggle("account-show");
}

window.onclick = function(e) {
    if (!e.target.matches('.account-dropbtn')) {
    var dropdown = document.querySelector(".account-dropdown-content");
        if (dropdown.classList.contains('account-show')) {
            dropdown.classList.remove('account-show');
        }
    }
}

/* ==================================*/
/* END OF HEADER */
/* ==================================*/

/* ==================================*/
/* MAIN */
/* ==================================*/
function display(chart_value,target){

    var strokeDashOffsetValue = 100 - chart_value;
    var doughnut = document.querySelector(target);
    doughnut.style["stroke-dashoffset"] = strokeDashOffsetValue;
}

display(65,".progress-bar__progress");


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if(event.target.matches('td')){
    var getClassName = event.target.parentElement.className
    // window.location = "http://www.google.com/search?q=" + getClassName;

    console.log(getClassName);
  }
}

const show = document.querySelector(".show");
const main = document.querySelector('.chart-view');
const main2 = document.querySelector('.list-view');
const footer = document.querySelector('.card-footer');
const table = document.querySelector('.container');


var data =[{total: 4490,date: 11272018,goal: 109},{total: 3439,date: 11202018,goal: 87,},{total: 4490,date: 11232018,goal: 64},{total: 5200,date: 11242018,goal: 45},{total: 5200,date: 11242018,goal: 45},{total: 5200,date: 11242018,goal: 45},{total: 5200,date: 11242018,goal: 51},{total: 5200,date: 11242018,goal: 41},{total: 5200,date: 11242018,goal: 32}];

function displayList(){
  if (show.getAttribute("data-text-swap") == show.innerHTML) {
        show.innerHTML = show.getAttribute("data-text-original");    
        main.style.display = "block";
        main2.style.display = "none";
        footer.style.display = "flex";
        table.innerHTML = " ";
  } else {
        show.setAttribute("data-text-original", show.innerHTML);
        show.innerHTML = show.getAttribute("data-text-swap");
        main.style.display = "none";
        main2.style.display = "block";
        footer.style.display = "none";

        var items = data;
        console.log(items);
        for(var i = 0; i < 7; i++){
          const tblrow = table.insertRow();
          tblrow.classList = items[i].date;

          const td1 = tblrow.insertCell(0);
          const td2 = tblrow.insertCell(1);
          const td3 = tblrow.insertCell(2);

          td1.appendChild(document.createTextNode(items[i].total));
          td2.appendChild(document.createTextNode(items[i].date));
          td3.appendChild(document.createTextNode(items[i].goal + "%"));
        }
  }
}


/* ==================================*/
/* END OF MAIN */
/* ==================================*/