/**
 * Actions for keycodes
 */
export const Action = {
    Rotate: "Rotate",
    Down: "Down",
    Right: "Right",
    Left: "Left",
    Pause: "Pause",
    Quit: "Quit",
}
  
/**
 * Linking keycode to action
 */
export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.Down,
    ArrowRight: Action.Right,
    ArrowLeft: Action.Left,
    KeyP: Action.Pause,
    KeyQ: Action.Quit,
}

/**
 * Checks if player action is Down action
 * @returns true is pressed key is arrowDown key
 */
export const actionIsDrop = (action) => Action.Down.includes(action)

/**
 * @returns corresponding action for a keypress if it exists 
 */
export const actionForKey = (keyCode) => Key[keyCode]