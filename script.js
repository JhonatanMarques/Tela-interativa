function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    

    msg.innerHTML = `Agora são <strong>${hora} horas</strong>`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png' //BOM DIA
        document.body.style.background = '#846e22'
    }
    else if( hora >= 12 && hora <= 18){
        img.src = 'tarde.png' //BOA TARDE
        document.body.style.background = '#fb8602'
    }else{
        img.src = 'noite.png' //BOA NOITE
        document.body.style.background = '#001e41'
    }
}
