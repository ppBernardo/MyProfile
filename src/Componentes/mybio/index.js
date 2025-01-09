import './style.css'
import logo from '../../imgs/Profile.jpeg'

function Bio() {
    return (
        <div class="card_bio">
            <img src={logo} alt="Descrição da imagem" class="card__image" />
            <div class="card__content">
                <p class="card__title"><strong>Bernardo pereira Pinto</strong>
                </p><p class="card__description">Olá! Sou Bernardo Pereira, tenho 21 anos e sou apaixonado por tecnologia e desenvolvimento de software. <br></br>Atualmente, trabalho como Analista de Sistemas Júnior, onde coloco em prática minhas habilidades em desenvolvimento full stack.
<br></br><br></br>
Tenho experiência profissional desenvolvendo soluções completas, desde o front-end até o back-end, o que me permite entender e atuar em todas as etapas do ciclo de desenvolvimento de sistemas. Minha principal ferramenta de trabalho é o C#, mas estou sempre buscando expandir meus conhecimentos e explorar novas tecnologias.
<br></br><br></br>
Meu objetivo é crescer como Desenvolvedor Full Stack, contribuindo para projetos que façam a diferença e superem expectativas.
<br></br><br></br>
Este site foi desenvolvido utilizando React, Node.js e outras tecnologias, proporcionando uma experiência enriquecedora de aprendizado e um grande avanço no meu desenvolvimento técnico.
<br></br><br></br>
Adoro aprender, compartilhar conhecimentos e colaborar em desafios.</p>
            </div>
        </div>

    );
}

export default Bio