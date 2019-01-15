var rates = {};
var amount;

$(document).ready(function(){
  $.ajax({
    url: 'https://mindicador.cl/api',
    method: 'GET'
  }).then(function(data){
    rates = data;
    $('.actual_dolar').text(parseInt(rates.dolar.valor));
    $('.actual_euro').text(parseInt(rates.euro.valor));
    $('.actual_uf').text(parseInt(rates.uf.valor));
    $('.actual_utm').text(parseInt(rates.utm.valor));
  });

  $('.transformador1').on('click', function(){
    amount = $('.transformando_euroydolar').val();
    $('.resultado_euro').html((amount / rates.euro.valor).toFixed(1) + ' euros');
    $('.resultado_dolar').html((amount / rates.dolar.valor).toFixed(1) + ' dolares');
  });
  $('.transformador2').on('click', function(){
    amount = $('.transformando_dolares').val();
    $('.resultado_pesochileno').html((rates.dolar.valor*amount).toFixed(1) + ' pesos chilenos')
  });

});
