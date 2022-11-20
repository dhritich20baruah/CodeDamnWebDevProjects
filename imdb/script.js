const dropDownMenu = document.getElementById('dropDownMain')
const searchOptions = document.getElementById('searchOptions')
const languages = document.getElementById('languages')
const dropArrow = document.getElementsByClassName('dropArrow')
const mobileSearch = document.getElementById('mobileSearch')

const sideMenu = document.getElementById('sideMenu')
const sideHead = document.getElementsByClassName('sideHead')
const sideList = document.getElementsByClassName('sideList')
const sideHeadLen = sideHead.length
const sideListLen = sideList.length

// MAIN MENU
function slideDown(){
    dropDownMenu.classList.toggle('slideDown')
    dropDownMenu.classList.remove('translate-y-[-100%]')
}

function slideUp(){
    dropDownMenu.classList.toggle('slideDown')
    dropDownMenu.classList.add('slideUp')
}

//SEARCH OPTIONS
function showSearch(){
    searchOptions.classList.add('showSearch')
    searchOptions.classList.remove('hidden')
    searchOptions.classList.remove('hideSearch')
    dropArrow[0].classList.add('hidden')
    dropArrow[1].classList.remove('hidden')

}

function hideSearch(){
    searchOptions.classList.add('hideSearch')
    searchOptions.classList.remove('showSearch')
    dropArrow[1].classList.add('hidden')
    dropArrow[0].classList.remove('hidden')
}

//Language options
function showLanguage(){
    languages.classList.add('showLanguage')
    languages.classList.remove('hidden')
    languages.classList.remove('hideLanguage')
    dropArrow[2].classList.add('hidden')
    dropArrow[3].classList.remove('hidden')

}

function hideLanguage(){
    languages.classList.add('hideLanguage')
    languages.classList.remove('showLanguage')
    dropArrow[3].classList.add('hidden')
    dropArrow[2].classList.remove('hidden')
}

//Toggle Display
function searchVisibility(){
    mobileSearch.classList.toggle('hidden')
}

// SIDE MENU
function slideIn(){
    sideMenu.classList.toggle('slideIn')
    sideMenu.classList.remove('translate-x-[-100%]')
    sideMenu.classList.remove('slideOut')
}

function slideOut(){
    sideMenu.classList.toggle('slideIn')
    sideMenu.classList.add('slideOut')
}

//Sidemenu list
function displayList(i){
    sideList[i].classList.toggle('hidden');

    for( var j = 0; j<sideListLen; j++){
        if(j==i){
            continue
        }
        if(!sideList[j].classList.contains('hidden')){
            sideList[j].classList.add('hidden')
        }
    }
}