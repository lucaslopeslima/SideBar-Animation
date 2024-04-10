// Seleciona todos os elementos da página
const elementos = document.querySelectorAll('.sideBar__animation a');
console.log(elementos)
// Adiciona um event listener de clique a cada elemento
elementos.forEach(elemento => {
    elemento.addEventListener('click', function(event) {
        // Loga o elemento clicado no console
        event.preventDefault()
        console.log('Elemento clicado:', event.target);

        
        let elementoAnterior = event.target.previousElementSibling;
        let elementoPosterior = event.target.nextElementSibling;
        resetClasses()
        this.classList.add('sideBar__animation-active')
        console.log(elementoAnterior, elementoPosterior)

        /* if(event.target.previousElementSibling){
            elementoAnterior.classList.add('previous-element')    
        }
        if(event.target.nextElementSibling;){
            elementoPosterior.classList.add('next-element')    
        } */
        
        

    });
});

function resetClasses(){
    elementos.forEach(elemento =>{
        elemento.classList.remove('sideBar__animation-active')
        elemento.classList.remove('previous-element')
        elemento.classList.remove('next-element')
    })
}

