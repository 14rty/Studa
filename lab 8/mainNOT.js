'use strict';

// let apiUrl = 'http://cat-facts-api.std-900.ist.mospolytech.ru/facts'

function createUpvotesElement(num){
    let upvotesElement = document.createElement('div');
    upvotesElement.classList.add('upvotes');
    upvotesElement.innerHTML = num;
    return upvotesElement;
}

function createAuthorElement(user){
    user = user || { name: { first: '', last: ''}};
    let userElement = document.createElement('div');
    userElement.classList.add('author-name');
    userElement.innerHTML = user.name.first + ' ' + user.name.last;
    return userElement;
}

function createFooterElement(record){
    let footerElement = document.createElement('footer');
    footerElement.classList.add('item-footer');
    footerElement.append(createAuthorElement(record.user));
    footerElement.append(createUpvotesElement(record.upvotes));
    return footerElement;
}

function createContentElement(record){
    let contentElement = document.createElement('div');
    contentElement.classList.add('item-content');
    contentElement.innerHTML = record.text;
    return contentElement;
}

function createListItemElement(record){
    let ItemElement = document.createElement('div');
    ItemElement.classList.add('facts-list-item');
    ItemElement.append(createContentElement(record));
    ItemElement.append(createFooterElement(record));
    // 
    return ItemElement;
}

function renderRecords(records) {
    let factsList = document.querySelector('.facts-list');
    factsList.innerHTML = '';
    for (let record of records){
        factsList.append(createListItemElement(record));
    }
}

function setPaginationInfo(info){
    document.querySelector('.total-count').innerHTML = info.total_count;
    let start = info.total_count > 0? (info.current_page - 1 )* info.per_page + 1 : 0;
    document.querySelector('.current-interval-start').innerHTML = start;
    let end = Math.min(info.total_count, start + info.per_page -1);
    document.querySelector('.current-interval-end').innerHTML = end;
}

function createPageBtn(page, classes=[]) {
    let btn = document.createElement('button');
    classes.push('btn');
    btn.classList.add(...classes);
    btn.dataset.page = page;
    btn.innerHTML = page;
    return btn;
}

function renderPaginationElement(info){
    let btn;
    let paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    if (info.total_pages == 0)
        return
    
    btn = createPageBtn(1, ['first-page-btn']);
    btn.innerHTML = 'Первая страница';
    paginationContainer.append(btn);

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('pages-btns')
    paginationContainer.append(buttonsContainer);

    let start = info.current_page > 2 ? info.current_page - 2 : 1;
    let end = Math.min(info.current_page + 2, info.total_pages)

    for (let i= start; i <= end; i++){
       buttonsContainer.append(createPageBtn(i, i== info.current_page ? ['active'] : []));
    }

    btn = createPageBtn(info.total_pages, ['first-page-btn']);
    btn.innerHTML = 'Последняя страница';
    paginationContainer.append(btn);

}

function pageBtnHandler(event){
    if (event.target.dataset.page){
        downloadData(event.target.dataset.page);
    }
}

function downloadData(page=1){
    let factsList = document.querySelector('.facts-list');
    let perPage = document.querySelector('.per-page-btn').value;
    let url = new URL(factsList.dataset.url);
    url.searchParams.append('per-page', perPage);
    url.searchParams.append('page', page);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = function () {
        renderRecords(this.response.records);
        setPaginationInfo(this.response['_pagination']);
        renderPaginationElement(this.response['_pagination']);
    }
    xhr.send();

}

window.onload = function () {
    downloadData();
    document.querySelector('.per-page-btn').onchange = function(){
        downloadData();
    }
    document.querySelector(".pagination").onclick = pageBtnHandler;

}   
