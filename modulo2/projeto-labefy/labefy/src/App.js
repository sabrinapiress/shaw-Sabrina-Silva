import React from "react";

//O usuário deve ser capaz de criar uma playlist de músicas. 
//Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.

export default class App extends React.Component{
state = {
  telaCriarPlaylist: "criar playlist"
}

escolheTela = () => {
switch (this.state.telaCriarPlaylist){
  case "criar playlist":
    return <button irParaDetalhePlaylist = { this.irParaDetalhePlaylist}/>
    case "detalhes": 
    return <button irParaCriarPlaylist = {this.irParaCriarPlaylist}/>
    default: 
    return <div>Erro!</div>
  }

}
render() {

  return (
<div>
{this.escolheTela()}
</div>

  )
}
}
