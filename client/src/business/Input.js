export const Action = {
    Rotate: "Rotate",
    Down: "Down",
    Right: "Right",
    Left: "Left",
    Pause: "Pause",
    Quit: "Quit",
}
  
// Keycodes are linked to Actions
export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.Down,
    ArrowRight: Action.Right,
    ArrowLeft: Action.Left,
    KeyP: Action.Pause,
    KeyQ: Action.Quit,
}

export const actionIsDrop = (action) => Action.Down.includes(action)

export const actionForKey = (keyCode) => Key[keyCode]