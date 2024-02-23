import { Loader, useProgress } from "@react-three/drei";
import React, { Suspense, createContext, useCallback, useEffect, useRef, useState } from "react";
import { BoardGame } from "./Dialog/ChildComponents/BoardGame/BoardGame";
import { DialogBoard } from "./Dialog/Dialog";
import NavMenu from "./Menu/NavMenu";
import { GameScene } from "./SceneManagement/GameScene";
import { ButtonMode, DialogComponent, IDialogConfigProps, config,  } from "./Utils/Config";
import { getGameIdFromPath, switchComponentsByActiveButton } from "./Utils/Utils";
import { GameContext } from "./Services/DataServices";
import { useDataByPath } from "./Services/DataServices";
import { ICard, IGame, IGameContext, IUser } from "./Services/DataModels";
import { WaitingRoom } from "./Dialog/ChildComponents/GameManagement/Components/WaitingRoom";
import { GameInfo } from "./GameInfo/GameInfo";
import { DiceInfo } from "./GameInfo/ChildComponents/DiceInfo/DiceInfo";
import * as BackendService from "./Services/BackendServices";
import { IDialogContentProps } from "@fluentui/react";

const mockGame: IGame = {
  Id: 'initialData',
  OnProgress: false,
  AllCards: [],
  ActivePlayer: -1,
  Private: undefined,
  ActiveRequest: undefined,
  Dice: [0,0]
}

function App() {
  //Global Info
  const gameId = getGameIdFromPath() || "initialData";
  const [game, checkGame] = useDataByPath<IGame>(`games/${gameId}`,mockGame, (gameId) =>
    BackendService.checkGameReference(gameId)
  );


  //States
  const [userId, setUserId] = useState<string>("");
  console.log(userId);
  const [myCards, setMyCards] = useState<ICard[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false)
  const IsWaitingRoom = gameId !== "initialData" && game && game?.OnProgress === false;
  

  //Management menu
  const [dialogOptions, setDialogOption] = useState<IDialogConfigProps>({type: DialogComponent.None});

  const setDialog = (type: DialogComponent, props?: any) => {
    setDialogOption({type, props})
  }
  const type = dialogOptions?.type
  const props = dialogOptions?.props
  
  const [mode, setMode] = useState(ButtonMode.StartScreen);

  //Consts
  // const { progress } = useProgress();
  const progress = 100;
  const loading = IsWaitingRoom || progress < 100;
  const Users = game?.Users || [];
  const ActivePlayer = game?.ActivePlayer;
  const isYourTurn = ActivePlayer ? Users?.[ActivePlayer]?.Id === userId : false;

 
  const loadMyData = useCallback(async () => {
    if (game?.OnProgress && (!loaded))
      try {
        const userIdSaved = sessionStorage.getItem(`${gameId}:userId`);
        console.log(userIdSaved)
        if (userIdSaved && userIdSaved !== '') {
          const cards: ICard[] = await BackendService.getMyCards(gameId, userId.toString());
          setUserId(userIdSaved);
          setMyCards(cards);
          setDialog(DialogComponent.None)
          if(cards?.length > 0 && userIdSaved !== ''){
            setLoaded(true)
          }
        }
      } catch (ex) {
        console.error(ex);
      }
  }, [game?.OnProgress, gameId, myCards?.length, userId]);

  useEffect(() => {
    loadMyData();
  }, [game?.OnProgress, loadMyData]);

  useEffect(() => {
    if (gameId !== "initialData" && !loaded) {
      setMode(ButtonMode.GameScreen);
      checkGame(gameId);
      if (game && game?.OnProgress === false){
        setDialog(DialogComponent.Waiting)
      }
    }
  }, []);

  // useEffect(() => {
  //   if(game && game?.OnProgress && activeButton === ButtonType.Waiting){
  //     setActive(ButtonType.None)
  //   }
  // },[game?.OnProgress])

  console.log(game, IsWaitingRoom, type)
  
  return (
    <>
      <GameContext.Provider
        value={{
          game,
          mode,
          userId,
          dialog: type,
          setDialog,
          myCards,
          setMyCards,
          users: Users || [],
          setUserId,
          loaded: !loading,
          isYourTurn,
          props
        }}
      >
        <NavMenu
          loading={IsWaitingRoom ? 0 : progress}
          onClick={(type) => setDialog(type)}
          activeButton={type}
          mode={mode}
          isYourTurn={isYourTurn}
        />
        <DialogBoard
          // component={IsWaitingRoom ? WaitingRoom : switchComponentsByActiveButton(activeButton)}
          hidden={type === DialogComponent.None && !IsWaitingRoom}
        />
        <GameInfo />

        <GameScene />
      </GameContext.Provider>
    </>
  );
}

export default App;
