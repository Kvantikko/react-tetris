export const Action = {
    Rotate: "Rotate",
    AccelerateDrop: "AccelerateDrop",
    Right: "Right",
    Left: "Left",
    Quit: "Quit",
}
  
// Keycodes are linked to Actions
export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.AccelerateDrop,
    ArrowRight: Action.Right,
    ArrowLeft: Action.Left,
    KeyQ: Action.Quit,
}

export const actionForKey = (keyCode) => Key[keyCode]