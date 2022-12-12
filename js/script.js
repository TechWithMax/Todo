let addbtn = document.getElementById('addbtn')
let clearbtn = document.getElementById('clearbtn')
let todo_ol = document.getElementById('mylist')
let inputitem = document.getElementById('inputItem')


var todolistarray = [];

var clearlist = function(){
    todolistarray = [];
    localStorage.removeItem('mylist');
    mylist.innerHTML = '';
}

clearbtn.addEventListener('click',clearlist);


var listItemObj = function(){

}

var addlist = function(){
    this.content = '';
    this.status = ' Incomplete';
}
let refreshloacalstorage = function(){
    var todo = todolistarray;
    localStorage.removeItem('mylist');
    loacalStorage.setlistItem('mylist',JSON.stringify(todo));
}

var addlist = function(){
    let newlistItem = new listItemObj();
    newlistItem.content = inputitem.value;
    todolistarray.push(newlistItem);

    //Refresh
    refreshloacalstorage();
    var newitem = createItemDom(inputitem.value,'incomplete');
    mylist.appendChild(newitem);
    inputitem.value = '';
}

clearbtn.addeEventListener('click',clearlist)



