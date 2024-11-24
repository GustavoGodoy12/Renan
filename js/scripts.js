// ResumeTemplate v1.0 ClearCareer
// url: clearcareer.ca
// by: Iskender Piyale-Sheard
// website: izzydoesizzy.com
// Created 06-27-2016
 

// Smooth Scroll Function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function () {
  // Número de WhatsApp
  const numerorenan = "554197182066"; // Substitua pelo número correto
  const numerogustavo = "5541985166032"; // Substitua pelo número correto
  const mensagemrenan = encodeURIComponent("Olá, gostaria de mais informações sobre a consultoria!");
  const mensagemgustavo = encodeURIComponent("Olá, gostaria de mais informações sobre a criação de sites e desenvolvimentos em geral!");

  // Atualiza o link do WhatsApp
  $("#whatsapp-link-intro").attr("href", `https://wa.me/${numerorenan}?text=${mensagemrenan}`);
  $("#whatsapp-link-footer1-gustavo").attr("href", `https://wa.me/${numerogustavo}?text=${mensagemgustavo}`);
  $("#whatsapp-link-footer2-gustavo").attr("href", `https://wa.me/${numerogustavo}?text=${mensagemgustavo}`);
  $("#whatsapp-link-footer").attr("href", `https://wa.me/${numerorenan}?text=${mensagemrenan}`);
});

