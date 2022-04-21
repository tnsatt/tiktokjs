// ==UserScript==
// @name         TikTok Multi Column + Darkmode By Tnsatt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  TikTok MultiColumn + Darkmode By Tnsatt
// @author       You
// @match        http*://www.tiktok.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function(event) {
        run_script();
    });

    function run_script(){
            addstyle(`
        [class*="DivBodyContainer"]{min-width:100% !important;}
        [class*="DivScrollContainer-StyledScroll"], [class*="DivSideNavContainer"]{max-width:220px;}
        [class*="DivMainContainer"]{margin-bottom:40px;max-width:none !important;width:fit-content !important; flex:0 1 auto !important;}
        [class*="DivMainContainer"] >div{display:flex !important;flex-wrap:wrap !important;justify-content:space-between;}
        [class*="DivMainContainer"] [data-e2e="recommend-list-item-container"]{width:fit-content !important;max-width:none !important;display:flex !important;flex-direction: row-reverse;margin-left:4px;margin-right:4px;position:relative;}


        [class*="DivMainContainer"] div:not([class*="DivBrowserModeContainer"]) > [class*="DivContentContainer"]{height:100%;width:fit-content !important;display:flex;flex-direction:column;}
        [class*="DivMainContainer"] [class*="DivTextInfoContainer"]{max-width:250px !important;margin-right:auto !important;}
        [class*="DivActionItemContainer"]{bottom:30px; position:absolute; left:100%; margin-left:5px;}

        [class*="DivMainContainer"] [class*="DivVideoWrapper"]{min-height:50%;max-width:100%;position:relative;margin-top:auto;}
        [class*="DivMainContainer"] [class*="DivVideoCardContainer"]{margin-right:0px !important;}
        [class*="DivMainContainer"] [data-e2e="video-author-avatar"]{margin-top:5px;margin-right:5px;}
        [class*="DivMainContainer"] [class*="FollowButton"]{top:80px !important;}

        #darkmode_checkbox{position:fixed; top:0; right:0;}
        [class*="ButtonGetAppText"]{display:none;}
        `);
         let dmstyle=(`
         body{--dm-bg:#161722; --main-bg:#060716; --pop-bg:#060716, --menu-bg:#060716; --dm-bg-container:#3d4b5f; --btn-bg: #252632; --input-bg: #252632;
         --span-bg:black; --hover-bg:#060716;}
         *{color:white !important;}
         ::placeholder {color: white;opacity: 1;}:-ms-input-placeholder {color: white;}::-ms-input-placeholder {color: white;}
         body, [class*="DivBrowserModeContainer"] [class*="DivContentContainer"], [class*="DivBrowserModeContainer"] [class*="DivCommentListContainer"],
         [class*="DivBrowserModeContainer"] [class*="DivBottomCommentContainer"], [class*="DivLiveDiscoverPage"], [class*="DivLiveRoomBanner"], [class*="DivChatRoomBody"],
         [class*="DivChatRoom"], [class*="DivChatRoomContainer"], [class*="DivCommentContainer"],
         .row-nav-scroll, .row-layout-content-container, [class*="DivTextInfoContainer"] [class*="DivContainer"], [data-e2e="video-author-avatar"] [class*="DivContainer"],
         [class*="DivContentContainer"] [class*="DivMainContent"] [class*="DivContainer"], [class*="Caption"] [class*="DivContainer"],
         .conversation-header .send-fail-tip-container, .conversation-header .business-container
         {background-color:var(--dm-bg) !important;}


         [class*="DivHeaderContainer"], [class*="DivScrollContainer"], .header-content, .header-container, [class*="DivTabsContainer"],
         .conversation-container, .conversation-list-wrapper, #main .left-part, #main .right-part
         {background-color:var(--main-bg) !important;}

         .menu-right .popup, .modal, .inbox-wrap-enter-done, .message-setting-container, [class*="DivProfileContainer"] [class*="DivContainer"], [class*="DivActionItemContainer"] [class*="DivContainer"],
         [class*="DivActionContainer"] [class*="DivContainer"], [class*="DivSearchFormContainer"] [class*="DivContainer"], [class*="DivInboxContainer"],
         [class*="DivProfileContainer"], [class*="DivMoreContainer"] [class*="DivContainer"], [class*="DivShareActions"] [class*="DivContainer"], [class*="DivMoreActions"] [class*="DivContainer"],
         [data-e2e="see-more-icon"] [class*="DivContainer"], [class*="DivModalContainer"] [class*="DivContentContainer"], [class*="ButtonShare"] [class*="DivContainer"],
         [class*="FormReport"], [class*="FormReport"] [class*="DivFooter"], [class*="DivModalContainer"] [class*="DivContentContainer"]>[class*="Container"],
         [class*="DivKeyboardShortcutContainer"], [class*="tiktok-web-header"], [class*="tiktok-web-body-modal"],[class*="footer-bottom-wrapper"],
         [class*="DivItemBackground"],  [class*="DivContainer"], [class*="DivCashierPage"], [class*="DivCashierPage"] div, [class*="FooterContainer"], [class*="keyboard-shortcut-container"],
         [class*="-modal__modal-wrapper"], [class*="DivFormBox"]
         {background-color:var(--main-bg) !important;}

         [class*="DivProfileContainer"] [data-e2e="user-card-follow"],
         [class*="DivCoinContainer"] button, .message-setting-container button,
         div:not([data-e2e="live-room-follow"]):not([class*="DivFollowButtonWrapper"]) > [class*="FollowButton"],
         [type="button"]
         {background:var(--btn-bg)}

         .area-list-container, form[class*="download-wrapper"], .is-helpful-container button, [data-e2e="nav-login-button"], [class*="SendCode"], [class*="login-button"],
         .tiktok-select-selector, .tiktok-select-dropdown, .tiktok-select-dropdown-item, [class*="StyledPayButton"]
         {background:var(--btn-bg) !important}

         [class*="StyledMessageButton"]{background:var(--main-bg) !important;}

         .tiktok-select-dropdown .tiktok-select-dropdown-item.is-selected{background: black !important;}

         input, textarea, [contenteditable="true"], .comment-input-inner-wrapper, [class*="DivCommentContainer"] [class*="DivLayoutContainer"],
         input[type="number"], input[type="text"], input[type="checkbox"], input[type="radio"], input[type="password"], input[type="submit"], input[type="number "]
         {background-color: var(--input-bg);}

         input, textarea, [class*="DivOptionsWarpper"], [class*="switch__switch-wrapper"], .tiktok-switch__switch-wrapper, [class*="OptionsContainer"],
         [class*="InputNum"]
         {background-color:var(--input-bg) !important;}

         .conversation-list-item-wrapper, .change-video-btn, .preview-v2, [class*="IActionButton"], [class*="download-row-block"], [class*="download-row-block"] button:disabled,
         button:disabled, [class*="tiktok-app-container"]
         {background-color:transparent !important}

         [class*="InputNum"]
         {background-color:var(--input-bg) !important;}


         [data-e2e="browse-video"] {background-color:black;}
         .button-row button, label[role="radio"] > div{background-color:#252632 !important}
         [data-e2e="report-card-reason"]:hover{background-color:var(--btn-bg) !important}
         .emojiSelectButton{background-color:white;}
         .row-layout-background, .main-body, #main, .main-body .layout{background-color:var(--dm-bg-container) !important;}

         [class*="OptionsContainer"] li:hover{background-color:var(--hover-bg)}
         .conversation-list-item-wrapper.selected, .conversation-list-item-wrapper:hover{background-color:#161722 !important}
         [class*="SpanGroupItem"], .inbox-wrap-enter-done .group-wrap span
         {background:var(--span-bg) !important}
         form.search-input{background-color:var(--input-bg) !important;}
         form.search-input svg{fill:white}
         [class*="DivActionItemContainer"] strong{color:white;}
         #svg-heart-fill path, #svg-pc-share path, #svg-header-logo path, #svg-music-note path,
         [data-e2e="browse-like-icon"] svg[fill="rgba(22, 24, 35, 1.0)"], [data-e2e="like-icon"] svg[fill="rgba(22, 24, 35, 1.0)"], [class*="DivScrollContainer"] path,
         [class*="DivShareActions"] >svg path, .row-layout-nav-item svg, .icons svg path
         {fill:white;}
         [data-e2e="search-user-container"]:hover {background-color:var(--main-bg) !important;}
         [class*="DivMainContainer"] [class*="StyledFollowButton"]{}
         html ::-webkit-scrollbar-thumb, html *::-webkit-scrollbar-thumb{background-color: white !important;}
         `)
          setupdarkmode();
         window.addEventListener("scroll", function(){
             document.documentElement.dispatchEvent(new CustomEvent('scroll'));

         })
            function setupdarkmode(){
                let val=localStorage.getItem("darkmode")=="1";
                document.head.insertAdjacentHTML("beforeend", "<style "+(val?"":"type='text'")+" id='darkmode'>"+dmstyle+"</style>");
                let elm= document.createElement("input");
                elm.type="checkbox";
                elm.id="darkmode_checkbox"
                elm.style.zIndex="99999";
                elm.checked=val;
                document.body.appendChild(elm);
                 elm.addEventListener("change", function(e){
                     e.stopPropagation();
                     e.preventDefault();
                     let val=localStorage.getItem("darkmode")!="1";
                     setdarkmode(val);
                     localStorage.setItem("darkmode", val?1:0);
                 });
            }
          function setdarkmode(val){
              let elm=document.querySelector("style#darkmode")
              if(val){
                  elm.removeAttribute("type");
              }else{
                  elm.setAttribute("type", "text");
              }
          }
    }

    function addstyle(style){
        document.head.insertAdjacentHTML("beforeend", "<style>"+style+"</style>");
    }
    function waitBody(callback){
        var observer = new MutationObserver(function() {
            if (document.body) {
                callback();
                observer.disconnect();
            }
        });
        observer.observe(document.documentElement, {childList: true});
    }
     function wait_dom(selector, callback, root=document.documentElement){
         if (document.querySelector(selector)) {
            return callback(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            let node=document.querySelector(selector);
            if (node) {
                callback(node);
                observer.disconnect();
            }
        });

        observer.observe(root, {
            childList: true,
            subtree: true
        });
    }
})();
