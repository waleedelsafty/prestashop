/**
* 2007-2022 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2022 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/
window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("user-info")[0].style.marginTop = "1px";    
   document.getElementsByClassName("user-info")[0].style.marginLeft = "1px";
    document.getElementsByClassName("user-info")[0].style.transition="1s";
    document.getElementsByClassName("language-selector")[0].style.marginTop = "1px";
    document.getElementsByClassName("language-selector")[0].style.transition="1s";
    document.getElementsByClassName("blockcart")[0].style.padding = "1px";
    document.getElementsByClassName("blockcart")[0].style.height = "0px";
    document.getElementsByClassName("blockcart")[0].style.transition="1s";
    document.getElementById("contact-link").style.marginTop = "1px";
    document.getElementById("contact-link").style.transition="1s";
   } else {
   document.getElementsByClassName("user-info")[0].style.marginTop = "0.9375rem";
   document.getElementsByClassName("user-info")[0].style.marginLeft = "2.5rem";
   document.getElementsByClassName("user-info")[0].style.transition="1s";
   document.getElementsByClassName("language-selector")[0].style.marginTop = "0.9375rem";
   document.getElementsByClassName("language-selector")[0].style.transition="1s";   
   document.getElementsByClassName("blockcart")[0].style.padding = "0.75rem";
   document.getElementsByClassName("blockcart")[0].style.height = "3rem";
   document.getElementsByClassName("blockcart")[0].style.transition="1s";  
   document.getElementById("contact-link").style.marginTop = "0.9375rem";
   document.getElementById("contact-link").style.transition="1s";     
   }
 }
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass("header_scrolled");
            $('#contact-link').addClass("header_scrolled");
            $('#_desktop_contact_link').addClass("header_scrolled");
            $('#_desktop_language_selector').addClass("header_scrolled");
            $('#_desktop_user_info').addClass("header_scrolled");
            $('#_desktop_cart').addClass("header_scrolled");
            $('#_desktop_logo').addClass("header_scrolled");
            $('#search_widget').addClass("header_scrolled");
            
            $('body').addClass("omg_im_fixed");
        } else {
            $('#header').removeClass("header_scrolled");
            $('#contact-link').removeClass("header_scrolled");
            $('#_desktop_contact_link').removeClass("header_scrolled");
            $('#_desktop_language_selector').removeClass("header_scrolled");
            $('#_desktop_user_info').removeClass("header_scrolled");
            $('#_desktop_logo').removeClass("header_scrolled");            
            $('#search_widget').removeClass("header_scrolled");
            $('body').removeClass("omg_im_fixed");
        }
    });
});
