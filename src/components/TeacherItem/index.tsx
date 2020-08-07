import React from 'react';
import zapIcon from '../..//assets/images/icons/whatsapp.svg'
import './styles.css'


function TeacherItem(){
    return(
        <article className="teacher-item">
                     <header>
                         <img src="https://avatars3.githubusercontent.com/u/13110218?s=460&u=b520472e686584fbfa040c06004569da6d68867d&v=4" alt="Ruan Victor"/>
                        <div>
                            <strong> Ruan Victor </strong>
                            <span>Programação</span>
                        </div>
                     </header>
                     <p>
                         Entusiaasta das melhores tecnologias de software do mercado. 
                         <br></br>
                         Apaixonado por desenvolvimento e responsável por mudar a vida de mais 2000 pessoas.
                     </p>
                     <footer>
                         <p>
                             Preço/hora
                             <strong>R$ 80,00</strong>
                         </p>
                         <button type="button">
                             <img src={zapIcon} alt="whatsapp"/>
                             Entrar em contato
                         </button>
                     </footer>


                     <header>
            <img src="https://avatars3.githubusercontent.com/u/61952539?s=460&v=4" alt="Gabriel Pulga"/>
            <div>
                <strong>Gabriel Pulga</strong>
                <span>Matemática</span>
            </div>
            </header>
            <p>
                Estudante de engenharia, entusiasta de software.
                <br/><br/>
                Disponível para começar a dar aulas imediatamente.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                <img src={zapIcon} alt="Whatsapp"/>
                Entrar em contato
                </button>
            </footer>
                </article>
    )
}
export default TeacherItem;