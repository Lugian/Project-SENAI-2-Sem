const uri = 'http://localhost:2222/emprestimo'

const titulo = document.querySelector('#titulo')
const autor = document.querySelector('#autor')
const data_emprestimo = document.querySelector('#data_emprestimo')
const data_prevista = document.querySelector('#data_prevista')
const data_devolucao = document.querySelector('#data_devolucao')
const valor = document.querySelector('#valor')
const urlimg = document.querySelector('#image')

const main = document.querySelector('main')
const workspace = document.querySelector('.workspace')
const modelo = document.querySelector('.modelo')
const asset = document.querySelector('.asset')
const info = document.querySelector('.info')


const clonemain = modelo.cloneNode(true)
const cloneasset = asset.cloneNode(true)
const cloneinfo = info.cloneNode(true)

fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => montarlista(resp))
    .catch(err => console.error(err));


function montarlista(vetor){
    vetor.forEach(e => {

        let linha = document.createElement('div')
        linha.className = 'modelo'
        let col1 = document.createElement('div')
        col1.className = 'asset'
        let col2 = document.createElement('div')
        col2.className = 'info'

        let e1 = document.createElement('div')
        e1.className = 'marcadorpag'
        e1.setAttribute('onclick', `excluirItem('${e.id}')`)

        let e2 = document.createElement('div')
        e2.className = 'foto'
        e2.style.backgroundImage=  `url(${e.img})`
        let e3 = document.createElement('div')
        e3.className = 'titulo'
        e3.innerHTML = e.titulo
        col1.appendChild(e1)
        col1.appendChild(e2)
        col1.appendChild(e3)
        
        let ee1 = document.createElement('div')
        ee1.className = 'autor'
        let ee1img = document.createElement('img')
        ee1img.className = 'ee1img'
        let pautor = document.createElement('p')
        pautor.style.marginLeft = '4%'
        pautor.innerHTML = e.autor
        ee1.appendChild(ee1img)
        ee1.appendChild(pautor)
        col2.appendChild(ee1)

        let ee2 = document.createElement('div')
        ee2.className = 'data_emprestimo'
        let ee2img = document.createElement('img')
        ee2img.className = 'ee2img'
        let pdata_e = document.createElement('p')
        pdata_e.style.marginLeft = '4%'
        let forde = new Date(e.data_emprestimo).toLocaleDateString()
        pdata_e.innerHTML = forde
        ee2.appendChild(ee2img)
        ee2.appendChild(pdata_e)
        col2.appendChild(ee2)

        if(e.data_prevista == '0000-00-00' || e.data_devolucao == '0000-00-00'){
            e.data_prevista = null
            e.data_devolucao = null
        }

        let ee3 = document.createElement('div')
        
        ee3.className = 'data_prevista'
        let ee3img = document.createElement('img')
        ee3img.className = 'ee3img'
        let pdata_p = document.createElement ('p')
        pdata_p.style.marginLeft = '4%'
        let fordp = new Date(e.data_prevista).toLocaleDateString()
        if(e.data_prevista != null)
            pdata_p.innerHTML = fordp
        else
            pdata_p.innerHTML = ''
        ee3.appendChild(ee3img)
        ee3.appendChild(pdata_p)
        col2.appendChild(ee3)

        let ee4 = document.createElement('div')
        ee4.className = 'data_devolucao'
        let ee4img = document.createElement('img')
        ee4img.className = 'ee4img'
        let data_d = document.createElement('p')
        data_d.style.marginLeft = '4%'
        let fordd = new Date(e.data_devolucao).toLocaleDateString()
        if(e.data_devolucao != null)
            data_d.innerHTML = fordd
        else
            data_d.innerHTML = ''
        ee4.appendChild(ee4img)
        ee4.appendChild(data_d)
        col2.appendChild(ee4)

        
        function valorcobranca(){
            if(e.data_prevista == null && e.data_devolucao == null)
                return 'sem datas'
            else if(e.data_devolucao != null && e.data_prevista == null)
                return 'sem data prevista'
            else if(e.data_prevista != null && e.data_devolucao == null)
                return 'sem devolução'
            else if(e.data_prevista < e.data_devolucao){
                let porcen = Number(e.valor) * 0.1

                let ddv = new Date(e.data_devolucao)
                let dpv = new Date(e.data_prevista)

                let diferenca = (ddv - dpv) / (1000 * 60 * 60 * 24);
                
                return porcen * diferenca

            }else
                return 'devolvido no prazo'
        }

        let ee5 = document.createElement('div')
        ee5.className = 'campocobranca'
        ee5.innerHTML = 'Cobrança'
        ee5.style.fontStyle = 'italic'
        let eee1 = document.createElement('div')
        eee1.className = 'cobranca'
        let eee1img = document.createElement('img')
        eee1img.className = 'eee1img'
        let pcobranca = document.createElement('p')
        pcobranca.style.fontStyle = 'normal'
        pcobranca.style.marginLeft = '4%'
        pcobranca.innerHTML = valorcobranca()
        eee1.appendChild(eee1img)
        eee1.appendChild(pcobranca)
        ee5.appendChild(eee1)
        col2.appendChild(ee5)


        linha.appendChild(col1)
        linha.appendChild(col2)
        workspace.appendChild(linha) 
    })


}

function excluirItem(i) {
        fetch(uri + '/excluir/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp != 204) alert('Erro ao enviar dados')
                else window.location.reload()
            })
}

document.querySelector('#button').addEventListener('click', (e) => {
    e.preventDefault();

    const body = {
        "titulo": titulo.value,
        "autor": autor.value,
        "data_emprestimo": data_emprestimo.value,
        "data_prevista": data_devolucao.value,
        "data_devolucao": data_devolucao.value,
        "valor": valor.value,
        "img": urlimg.value

    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp != 201) alert('Erro ao enviar dados')
        }
    )

    add();

})





const perror = document.querySelector('.error')

function tipourl(){
    var a = urlimg.value
    var tipo = []

    for(let i = 4 ; i > 0 ; i--){
        tipo.push(a[a.length-i])
    }

    if(tipo[0] == '.' && tipo[1] == 'p' || tipo[1] == 'j' && tipo[2] == 'n' || tipo[2] == 'p' && tipo[3] == 'g'){
        return true
    }else
        return false
}

function add(){
    
    if(titulo.value == '' || autor.value == '' || urlimg.value == '' || data_emprestimo.value == ''){
        perror.innerHTML = 'Titulo, autor, data de emprestimo e URL da imagem não podem ser vazios.'
        perror.classList.remove('card')
        
    }else if (data_prevista.value != '' && data_prevista.value < data_emprestimo.value){
        perror.classList.remove('card')
        perror.innerHTML = 'Indique uma data de previsão que seja superior a data de emprestimo'
        data_prevista.value = ''

    }else if(data_devolucao.value != '' && data_devolucao.value < data_emprestimo.value){
        perror.classList.remove('card')
        perror.innerHTML = 'Indique uma data de devolução que seja superior a data de emprestimo'
        data_devolucao.value = ''

    }else if(Number(valor.value) < 0 || Number(valor.value) == ''){
        perror.classList.remove('card')
        perror.innerHTML = 'O valor do livro não pode ser vazio ou negativo. Informe números inteiros' 
        valor.value = ''       

    }else if(tipourl() == false){
        perror.classList.remove('card')
        perror.innerHTML = 'A URL do campo imagem precisar ter o formato de imagem png ou jpg.' 
        urlimg.value = ''

    }else{

        perror.classList.add('card')

        clonemain.classList.remove('card')

        clonemain.querySelector(".asset").remove();
        clonemain.querySelector(".info").remove();

        cloneasset.querySelector('.foto').style.backgroundImage=  `url(${image.value})`
        cloneasset.querySelector('#ti').innerHTML = titulo.value

        cloneinfo.querySelector('#au').innerHTML = autor.value
        cloneinfo.querySelector('#de').innerHTML = data_emprestimo.value
        cloneinfo.querySelector('#dp').innerHTML = data_prevista.value
        cloneinfo.querySelector('#dd').innerHTML = data_devolucao.value

        function cobrar(){
            
            if(data_prevista.value == '' && data_devolucao.value == '')
                return 'sem datas'
            else if(data_devolucao.value != '' && data_prevista.value == '')
                return 'sem data prevista'
            else if(data_prevista.value != '' && data_devolucao.value == '')
                return 'sem devolução'
            else if(data_prevista.value < data_devolucao.value){
                let porcen = Number(valor.value) * 0.1

                let ddv = new Date(data_devolucao.value)
                let dpv = new Date(data_prevista.value)

                let diferenca = (ddv - dpv) / (1000 * 60 * 60 * 24);
                
                return porcen * diferenca

            }else
                return 'devolvido no prazo'
            
        }

        cloneinfo.querySelector('#cobr').innerHTML = cobrar()

        clonemain.appendChild(cloneasset)
        clonemain.appendChild(cloneinfo)
        modelo.appendChild(clonemain)
        workspace.appendChild(clonemain)        


        cloneasset.querySelector('.marcadorpag').addEventListener('click',(e) => {
            e.target.parentNode.parentNode.remove()
        })

        titulo.value = ''
        autor.value = ''
        data_emprestimo.value = ''
        data_prevista.value = ''
        data_devolucao.value = ''
        valor.value = ''
        urlimg.value = ''
    }
    

}






console.info('Script running')