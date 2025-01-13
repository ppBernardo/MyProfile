import React, { useState, useEffect } from 'react'; // Adicionando a importação de useState e useEffect
import './style.css'
import Radio from '../nav';
import react from '../../imgs/logo512.png'
import jsicon from '../../imgs/Javascript_icon.png'
import nodeicon from '../../imgs/node-js.png'
import csharicon from '../../imgs/csharp.png'
import sql from '../../imgs/sqlicon.png'
import dotnet from '../../imgs/DOTNETICON.png'
import htmlicon from '../../imgs/htmlicon.png'
import cssicon from '../../imgs/cssicon.png'
import giticon from '../../imgs/giticon.png'

function Competencias() {
  return (
    <div className='page'>
      <div className='header'>
        <Radio />
      </div>
      <h1> Minhas Competencias</h1>
      <div className='body'>
        <div className='conteudo'>

          <div class="container scroll-1">
            <div class="card">
              <div class="card__image"><img src={react} className='reacticon'></img></div>
              <div class="card__content">
                <span class="card__title">REACT</span>
                <p class="card__describe">
                  O React permite dividir uma página inteira em partes, chamadas de componentes. Assim é possível trabalhar cada um desses componentes de forma individual e independente
                  <br></br><br></br>(Tecnologia usada para desenvolver esta página)
                  </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={jsicon}></img></div>
              <div class="card__content">
                <span class="card__title">JavaScript</span>
                <p class="card__describe">
                  JavaScript é uma linguagem de programação de fácil usabilidade, voltada para construir elementos em aplicações, como sites, aplicativos e sistemas online.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={nodeicon}></img></div>
              <div class="card__content">
                <span class="card__title">NODE.JS</span>
                <p class="card__describe">
                  O Node. js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript, de maneira bem similar ao navegador. Quando executamos um comando escrito em JavaScript, o Node. js interpreta esse comando e faz a sua conversão para a linguagem de máquina a ser executada pelo computador
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={csharicon}></img></div>
              <div class="card__content">
                <span class="card__title">C# (C SHARP)</span>
                <p class="card__describe">
                  C# é uma linguagem de programação desenvolvida pela Microsoft, usada principalmente para criar aplicações no ambiente .NET. É uma linguagem moderna, orientada a objetos e de tipagem forte, o que significa que os dados precisam ser definidos com tipos específicos.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={sql}></img></div>
              <div class="card__content">
                <span class="card__title">SQL</span>
                <p class="card__describe">
                  SQL (Structured Query Language) é uma linguagem de programação utilizada para gerenciar e manipular bancos de dados relacionais. Ela permite que os desenvolvedores criem, leiam, atualizem e excluam dados dentro de um banco de dados. Com SQL, é possível realizar consultas complexas em grandes volumes de dados, além de estruturar tabelas e definir relações entre elas.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={dotnet}></img></div>
              <div class="card__content">
                <span class="card__title">.NET</span>
                <p class="card__describe">
                  O .NET é uma plataforma de desenvolvimento criada pela Microsoft que fornece um ambiente para construir e executar aplicativos em diferentes tipos de dispositivos e sistemas operacionais. Originalmente, o .NET era usado principalmente para aplicações em Windows, mas com o lançamento do .NET Core (agora simplesmente chamado de .NET).
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={giticon}></img></div>
              <div class="card__content">
                <span class="card__title">GIT</span>
                <p class="card__describe">
                  Git é um sistema de controle de versão distribuído utilizado para gerenciar e versionar o código-fonte de projetos, permitindo que várias pessoas possam colaborar de forma eficiente no desenvolvimento de software. Criado por Linus Torvalds (o criador do Linux), o Git é amplamente utilizado no desenvolvimento de software devido à sua flexibilidade, eficiência e rapidez.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={htmlicon}></img></div>
              <div class="card__content">
                <span class="card__title">HTML</span>
                <p class="card__describe">
                  HTML (Hypertext Markup Language) é a linguagem padrão utilizada para criar e estruturar o conteúdo de páginas na web. Ela define a estrutura de uma página através de uma série de elementos ou "tags", como cabeçalhos, parágrafos, listas, links, imagens, entre outros. HTML é a base de qualquer site ou aplicativo web, sendo essencial para o desenvolvimento de interfaces na internet..
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card__image"><img src={cssicon}></img></div>
              <div class="card__content">
                <span class="card__title">CSS</span>
                <p class="card__describe">
                  CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento HTML. Enquanto o HTML lida com a estrutura e o conteúdo de uma página, o CSS controla o design, como o layout, as cores, as fontes e a posição dos elementos na página.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Competencias