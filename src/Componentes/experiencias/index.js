import './style.css'
import Radio from '../nav'
import maisdados from '../../imgs/maisdados.png'
import maisdistribuidora from '../../imgs/Mais Distribuidora branco.png'

function Experiencias() {
    return (
        <div className='page'>
            <div className='header'>
                <Radio></Radio>
            </div>
            <h1>Minhas Experiências</h1>
            <div className='body'>
                <div className='conteudo'>

                    <div class="card_exp" id='maisdados'>
                        <img src={maisdados}></img>
                        <div class="card-front">
                            <p class="title">Full Stack Developer</p>
                            <p class="subtitle">Mais Dados</p>
                        </div>
                        <div class="card-back">
                            <p>
                                Como Trainee de Desenvolvimento de Software, tenho estado ativamente envolvido na criação e aprimoramento de soluções de software inovadoras. Durante o meu estágio, tenho colaborado com equipes multifuncionais para desenvolver, testar e implementar funcionalidades essenciais em diversos projetos de software. Através dessa experiência, tenho adquirido conhecimento prático em diversas linguagens de programação e metodologias de desenvolvimento. Minha contribuição abrange desde a resolução de desafios técnicos até a depuração de código e a otimização de desempenho, sempre aproveitando a oportunidade de aprender com profissionais experientes na área. Minha trajetória como Trainee de Desenvolvimento de Software tem me proporcionado um sólido entendimento do ciclo de vida do desenvolvimento de software.
                            </p>
                        </div>
                    </div>

                    <div class="card_exp">
                        <img src={maisdistribuidora} id='maisdistribuidora'></img>
                        <div class="card-front">
                            <p class="title">Analista de desenvolvimento de Sistemas</p>
                            <p class="subtitle">Mais Dstribuidora</p>
                        </div>
                        <div class="card-back">
                            <p>
                            Atualmente, atuo como Analista de Desenvolvedor de Sistemas, com foco em soluções eficientes e inovadoras. Tenho sólida experiência em Banco de Dados Oracle, administração de redes utilizando Mikrotik, além de desenvolvimento em C# e .NET Framework. No meu dia a dia, utilizo diariamente React juntamente com Node.js para resolver problemas complexos de infraestrutura e desenvolver novas funcionalidades que agregam valor aos projetos. Com experiência em Node.js, estou constantemente criando e otimizando soluções modernas, sempre buscando formas de aprimorar meus conhecimentos técnicos e contribuir diretamente para a evolução dos projetos e o crescimento da empresa.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experiencias