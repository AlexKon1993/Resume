"use strict";

window.addEventListener("DOMContentLoaded", function() {

    // Tabs---------------------------------------------------------------------------

    const tab = document.querySelectorAll(".nav__item"),
          tabContent = document.querySelectorAll(".main__tabs"),
          tabParent = document.querySelector(".nav");

    function hideTabContent() {
        tabContent.forEach(function(item) {
            item.classList.add("hide");
            item.classList.remove("show");
        });
        tab.forEach(function(item) {
            item.classList.remove("nav__item_active");
        });
    }

    function showTabContent(item = 0) {
        tabContent[item].classList.add("show");
        tabContent[item].classList.remove("hide");
        tab[item].classList.add("nav__item_active");
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener("click", function(event) {
        if (event.target && !event.target.classList.contains("nav__item_active")) {
            if (event.target && event.target.classList.contains("nav__item")) {
                tab.forEach(function(item, index) {
                    if (event.target == item) {
                        hideTabContent();
                        showTabContent(index);
                    } 
                });
            }
        } else {
            return;
        }
    });

// ModalWindow-------------------------------------------------------------------

    const   modalWindow = document.querySelector(".modal"),
            btnConnection = document.querySelectorAll(".btn"),
            close = document.querySelectorAll(".modal__close");
    
    function showModalWindow(item) {
        item.classList.add("show");
        item.classList.remove("hide");
        document.body.style.overflow = "hidden";
    }

    function hideModalWindow(item) {
        item.classList.add("hide");
        item.classList.remove("show");
        document.body.style.overflow = "";
    }

    function Close(object) {
        close.forEach(function(item) {
            item.addEventListener("click", function() {
                hideModalWindow(object);
            });
        });

        object.addEventListener("click", function(event) {
            if (event.target && event.target.classList.contains("modal")) {
                hideModalWindow(object);
            }
        });
    
        document.addEventListener("keydown", function(event) {
            if (event.code && event.code === "Escape") {
                hideModalWindow(object);
            }
        });
    }

    btnConnection.forEach(function(item) {
        item.addEventListener("click", function() {
            showModalWindow(modalWindow);
        });
    });

    Close(modalWindow);

//ImageWindow-----------------------------------------------------------------------------

    const avatarSection = document.querySelector(".header__avatar"),
          modalWindowImage = document.querySelector(".modal__image"),
          sectionImg = document.querySelector(".modal__image-img");

    avatarSection.addEventListener("click", function(event) {
        if (event.target && event.target.classList.contains("header__avatar-img")) {
            
            sectionImg.innerHTML = `<img src="${event.target.currentSrc}" alt="">`;
            showModalWindow(modalWindowImage);
        }
    });

   Close(modalWindowImage);

});