import styled from "styled-components"

const RodapeEstilizado = styled.div`
    background-color: #04244F;
    margin-top: 70px;
    display: flex;
    justify-content:space-around;
    width: 100%;
    margin-top: 100px;
    box-sizing: border-box;
    padding: 22px;
`
const SociaisEstilizados = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    li{
        display: inline-block;
        margin-right: 32px;
    }
    
`
const TextoEstilizado = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    
`

const Rodape = () => {
    return(
        <>
            <RodapeEstilizado>
                <SociaisEstilizados>
                    <li>
                        <a href="#"> <img src="/public/imagens/sociais/facebook.svg"/></a>
                    </li>
                    <li>
                        <a href="#"><img src="/public/imagens/sociais/twitter.svg"/></a>
                    </li>
                    <li>
                        <a href="#"><img src="/public/imagens/sociais/instagram.svg"/></a>
                    </li>
                
                </SociaisEstilizados>
                <TextoEstilizado>Desenvolvido por Bruno</TextoEstilizado>
            </RodapeEstilizado>
        </>
        
    )

}

export default Rodape 