import { useState } from "react";
import { DefaultUi, Player, Youtube, Captions } from "@vime/react";
import { ReactComponent as PlayButtonIcon } from "../../assets/lesson/play.svg";
import lessonBanner from "../../assets/lesson/lesson-banner.jpg";
import teacherPhoto from "../../assets/lesson/teacher.png";
import folksAndArthur from "../../assets/lesson/folks-and-arthur.png";
import LessonTopic from "./components/lesson-topic";
import "@vime/core/themes/default.css";
import "./styles.css";



export interface ILessonTopic {
    title: string;
    description: string;
}

function Lesson() {
    const [isWatching, setIsWathicng] = useState<boolean>(false);

    const lessonTopicContents: ILessonTopic[] = [
        {
            title: 'Declaração de Bibliotecas',
            description: 'Ela é uma coleção de subprogramas usados no desenvolvimento de softwares. A sua principal função é facilitar a programação, garantindo mais agilidade e menos erros. Confira, portanto, o conteúdo do Dicionário Tech, que visa apresentar os principais termos usados por pessoas desenvolvedoras.'
        },
        {
            title: 'Função principal',
            description: 'A função main serve como o ponto de partida para a execução do programa. Em geral, ela controla a execução direcionando as chamadas para outras funções no programa'
        },
        {
            title: 'Comentários',
            description: 'Comentários, como o próprio nome instiga, são notas que podem ser incluídas no código fonte para descrever o que se quiser. Assim, não modificam o programa executado e servem somente para ajudar o programador a melhor organizar os seus códigos.'
        },
        {
            title: 'Variáveis',
            description: 'As variáveis são elementos fundamentais na programação. Elas são usadas para armazenar e manipular dados em um programa. Antes de usarmos uma variável, precisamos declará-la, especificando seu tipo e nome. A declaração de variáveis permite ao computador reservar espaço na memória para armazenar os dados.'
        },
        {
            title: 'Instruções Condicionais',
            description: 'As instruções condicionais dizem ao programa para avaliar se uma certa condição está sendo cumprida. Se a condição for cumprida, o programa irá executar o código específico; mas, se não for cumprida, o programa continuará passando para outro código.'
        },
        {
            title: 'Estruturas de Repetição',
            description: 'A estrutura de repetição é uma lógica que faz um bloco de código se repetir por um número definido ou indefinido de vezes, dado o tipo de estrutura de repetição. Na grande maioria das vezes, essa repetição é feita em cima de uma listagem, seja para modificar os valores ou apenas realizar uma busca específica.'
        },
        {
            title: 'Encerramento do Programa',
            description: 'A função exit, declarada em <stdlib.h>, encerra um programa em C++. O valor fornecido como argumento para exit é retornado para o sistema operacional como o código de retorno ou o código de saída do programa. Por convenção, um código de retorno de zero indica que o programa foi encerrado com êxito.'
        }
    ]

    return (
        <div className="lesson">
            <div className="lesson-card">
                {isWatching ? 
                    <div className="video-wrapper">
                        <Player style={{ height: '100%', aspectRatio: "16/9" }} >
                            <Youtube videoId={"nYK45ITfQUY"} key={"nYK45ITfQUY"} />

                            <DefaultUi noCaptions={false}>
                                <Captions hidden={true} />
                            </DefaultUi>
                        </Player>
                    </div>
                    : 
                    <>
                        <div className="lesson-card-blur" />
        
                        <img 
                            className="lesson-banner"
                            src={lessonBanner} 
                            alt="lesson banner" 
                        />
        
                        <button 
                            className="lesson-play-button"
                            onClick={() => setIsWathicng(true)}
                        >
                            <PlayButtonIcon className="play-icon" />
        
                            <span>ASSISTIR</span>
                        </button>
                    </>
                }
            </div>

            <div className="lesson-header">
                <h1><strong>Aula 01:</strong> Estrutura Básica do Código</h1>

                <div className="lesson-teacher-section">
                    <div className="teacher-photo">
                        <img src={teacherPhoto} alt="teacher photo" />

                        <div className="teacher-photo-blur" />
                    </div>

                    <div className="teacher-info">
                        <div className="teacher-description">
                            <span className="teacher-name">Pré</span>

                            <span className="teacher-subject">• Prof. de Int. à Programação</span>
                        </div>

                        <span className="teacher-contact">@priscilaholanda</span>
                    </div>
                </div>
            </div>

            <div className="lesson-actions-buttons">
                <button>PRÓXIMA AULA</button>

                <button>QUESTÕES</button>

                <img 
                    className="folks-and-arthur"
                    src={folksAndArthur} 
                    alt="folks and arthur" 
                />
            </div>

            <p className="lesson-description">
                Nesta aula, vamos explorar a estrutura básica de um código de programação. 
                Entender a estrutura é fundamental para começar a escrever programas de forma 
                eficiente e compreender como as instruções são executadas pelo computador. 
                Independentemente da linguagem de programação escolhida, a estrutura básica do 
                código é semelhante e consiste em partes essenciais que iremos abordar.
            </p>

            <div className="lesson-topics">
                {lessonTopicContents.map(({ title, description }) => (
                    <LessonTopic title={title} description={description} />
                ))}
            </div>
        </div>
    );
}

export default Lesson;