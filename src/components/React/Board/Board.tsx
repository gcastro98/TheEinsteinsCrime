import React from "react";
import './Board.css';
import {
    initializeIcons,
    PrimaryButton,
  } from "@fluentui/react";
  import { Panel, PanelType } from "@fluentui/react";
import Form from "./Component/Form/Form";
import { characters, guns, rooms} from './Config';
import { IBoardState } from "./IBoardState";
import IFormProps from "./Component/Form/IFormProps";
import { IBoardProps } from "./IBoardProps";
initializeIcons();

  const names = ["", 'User 1', 'User 2', 'User 3', 'User 4']; 
  const character = {
    _title : "Personajes",
    _users : ["Personajes", 'User 1', 'User 2', 'User 3', 'User 4'], 
    _names: [ "Tesla","Curie", "Da Vinci", "Franklin", "Galileo", "Newton"] 
  } 
  const armas = {
    _title : "Armas",
    _users : ["Armas",'User 1', 'User 2', 'User 3', 'User 4'], 
    _names: [ "Manzana","Martillo", "Pistola", "Catalejo", "Veneno", "Newton"] 
  } 

  const lugares = {
    _title : "Lugares",
    _users :["Lugares",'User 1', 'User 2', 'User 3', 'User 4'],
    _names: [ "Observatorio","Clase", "Taller", "Laboratorio", "Biblioteca", "Electricidad", "lugar", "otro", "lugar3"] 
  } 


  
  export default class Board extends React.Component<IBoardProps, IBoardState> {
  
    constructor(props: any) {
      super(props);
      this.state = {
        _showPanel: false,
        // _onClose: void
      };
    }
  
   
    private _hidePanel(): void {
      this.setState({ _showPanel: false });
  }
  
    public render(): React.ReactNode {
      return (
        <>
        <PrimaryButton className="button"  onClick={() => this.setState({ _showPanel: true })}>Prueba de panel</PrimaryButton>
        <Panel  isOpen={this.state._showPanel} 
              type={PanelType.medium} onDismiss={this._hidePanel.bind(this)} className="panel"
              isLightDismiss={true} isBlocking={false} styles={{  content: { paddingLeft: "16px", paddingRight: "16px" }}}>
          <Form _title={character._title} _names={character._names} _users={character._users} />
          <Form _title={armas._title} _names={armas._names} _users={armas._users} />
          <Form _title={lugares._title} _names={lugares._names} _users={lugares._users} />
          
        </Panel>
        </>
      );
    }
  }
  



