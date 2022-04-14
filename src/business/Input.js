export const Action = {
  
    Quit: "Quit",
   
}
  
export const Key = {

    KeyQ: Action.Quit,

}

export const actionForKey = (keyCode) => Key[keyCode]