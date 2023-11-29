import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'


const App = () => {

    const funcaoOK = () => alert('Agradecemos FeedBack')
    const funcaoNOK = () => alert('Verificaremos o ocorrido')
    const textoOK = 'Ja Chegou'
    const textoNOK = 'Não Chegou ainda'

    const componenteFeedback = (
        <Feedback
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK}
            textoOK={textoOK}
            textoNOK={textoNOK}
        />
    )

    return <div className='container border rounded mt-2'>

        <div className='row'>
            <div className='col-12'>
                <div className='my-3'>
                <h1 className='display-5 text-center'>Seus Pedidos</h1>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <Cartao cabecalho='22/04/2021'>
                    <Pedido
                    icone='fa-solid fa-hard-drive fa-2x'
                    titulo='SSD'
                    Descricao='SSD Kingston A400'/>
                    {componenteFeedback}
                </Cartao>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <Cartao cabecalho='20/04/2021'>
                    <Pedido 
                    icone='fa-solid fa-book fa-2x'
                    titulo='Livro'
                    Descricao='Concrete Matematica'/>
                    {componenteFeedback}
                </Cartao>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <Cartao cabecalho='21/01/2021'>
                    <Pedido 
                    icone='fa-solid fa-laptop fa-2x'
                    titulo='Notebook'
                    Descricao='Notebook Dell 8GB i5'/>
                    {componenteFeedback}
                </Cartao>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <Cartao cabecalho='22/11/2021'>
                <Pedido 
                icone='fa-solid fa-umbrella-beach fa-2x'
                titulo='Guarda Sol'
                Descricao='Guarda Sol de praia'/>
                {componenteFeedback}
                </Cartao>
            </div>
        </div>

    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)