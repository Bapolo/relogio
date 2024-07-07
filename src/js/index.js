window.onload = () =>
{
    const relogio = document.querySelector(".relogio") 
    const dataCorrente = document.querySelector(".dataCorrente")

    const tempo = () =>
    {
        const data = new Date()
        const [hora, minuto, segundo] = [
            data.getHours() < 10 ? `0${data.getHours()}` : data.getHours(),
            data.getMinutes() < 10 ? `0${data.getMinutes()}`: data.getMinutes(),
            data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()
        ]
        
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        const diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

        const [ano, mes, dia] = 
        [
            data.getFullYear(),
            meses[data.getMonth()],
            diasDaSemana[data.getDay()]
        ]

        relogio.innerHTML = `${hora} : ${minuto} : ${segundo}`
        dataCorrente.innerHTML = `${dia} - ${mes} - ${ano}`
    }
    

    setInterval(() => 
    {
        tempo()
    }, 1000)
    
}