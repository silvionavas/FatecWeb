$(document).ready(init());

function init() {
    var url, hora;
    
    url = $('.baseURL').text();
    
    horaAtiva();
    
    listagemVazia(true);
    getListagem(getHora().toString().replace(':', '-').trim());
    
    $('.wally-sidebar-hour').on('click', function() {
        var horaSelecionada = $(this).text().split(' - ');
        
        hora = {
            selecionada: horaSelecionada[0],
            inicial: horaSelecionada[0].replace(':', '-').trim(),
            final: horaSelecionada[1].replace(':', '-').trim()
        }
        
        $(this).addClass('hour--active');
        $('.wally-sidebar-hour').removeClass('hour--active');
        
        // if (parseFloat(hora.replace('-', '.')) >= 22.50) {
        //     $('.selected-time').text(hora.replace('-', ':'));
        //     listagemVazia();
        // }
        // else {
            listagemVazia(true); getListagem(hora.selecionada.replace(':', '-').trim());
        // }
    });
    
    function getListagem(hora) {
        $.ajax({
            url: url + 'wally/horario/' + hora,
            type: 'get',
            
            success: function(response) {
                showTeachersList(JSON.parse(response));
            }
        });
    }
    
    var modal = $('.modal');
    var content = modal.find('.modal-content');
    
    $('.btnTime').on('click', function() {
        $(this).parent().next().css('display', 'block');
    });
    
    $('.close').on('click', function() {
        modal.css('display', 'none');
    });
    
    function getHora() {
        var date = new Date();
        return date.getHours() + ':' + date.getMinutes();
    }
    
    function horaAtiva(hora) {
        $('span.wally-sidebar-hour').each(function() {
            var horaItem = $(this).text().split(' - ')[0].trim();
            
            if (hora == horaItem + ':00' || hora == horaItem) {
                $('.wally-sidebar-hour').removeClass('hour--active');
                $(this).addClass('hour--active');
            }
        });
    }
    
    function listagemVazia(update = false, qtdRegistros = 0) {
        if (qtdRegistros == 0) {
            $('.wally-teachersList2').html(
                "<li class='wally-teachersList-item2 listWarning off-item'>"+
                    (
                        (update) ? 
                            "<span class='carregando'>Carregando listagem... Aguarde um instante</span>":
                            "<span>Não há professor(a) presente na Fatec</span>"
                    ) +
                "</li><br>"
            );
            
            qtdRegistros = 18; 
        }
        else
            qtdRegistros = (qtdRegistros == 0) ? 18 : (18 - qtdRegistros); 
        
        for (var i = 1; i <= qtdRegistros; i++) {
            $('.wally-teachersList2').append(
                '<li class="wally-teachersList-item2 disabled">' +
                    '------' + 
                    '<span class="wally-alert">(------)</span>' +
                '</li>'
            );
        }
    }
    
    function showTeacherSchedule(id) {
        $.ajax({
            url: url + 'wally/horarios/' + id,
            type: 'get',
            
            success: function(retorno) {
                var horarios = JSON.parse(retorno);
                fillTeacherModal(horarios);
            }
        });
    }
    
    function showTeachersList(data) {
        var mensagem = 'em aula';
        
        $('.selected-time').text(data.hora);
        
        if (hora != null) {
            var horario = {
                selecionado: parseFloat(hora.inicial.replace(':', '.')),
                atual: parseFloat(getHora().replace(':', '.')),
                final: parseFloat(hora.final.replace(':', '.'))
            }    
            
            if (!(horario.atual >= horario.selecionado && horario.atual <= horario.final))
                mensagem = 'fora de aula';
        }

        horaAtiva(data.hora);

        if (data.lista.length > 0 && !data.ferias) {
            $('.wally-teachersList2').html('');
            
            for (var i in data.lista) {
                $('.wally-teachersList2').append(
                    '<li class="wally-teachersList-item2">' +
                        data.lista[i].apelido + 
            
                        '<span class="wally-alert">(' + mensagem + ')</span>' +
                    '</li>'
                );
            }
            
            listagemVazia(false, data.lista.length);
        }
        else
            listagemVazia();
    }
}