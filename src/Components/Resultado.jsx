import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'lato', sans-serif;
    
    display: flex;
    align-items: center;
    gap: 1 rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;

`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
        display: inline;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
        display: inline;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen criptomoneda'/>
      <div>
        <Precio>El precio es de: </Precio><span>{PRICE}</span>
        <Texto>El precio más alto del día: </Texto><span>{HIGHDAY}</span>
        <Texto>El precio bajo del día: </Texto><span>{LOWDAY}</span>
        <Texto>Variación ultimas 24 horas: </Texto><span>{CHANGEPCT24HOUR}</span>
        <Texto>Ultima actualización: </Texto><span>{LASTUPDATE}</span>
      </div>
    </Contenedor>
  )
}

export default Resultado
