export function useButtonStyle(look: "solid" | "outline" | "ghost", element: string) {
  let buttonStyle: string;

  switch (look) {
    case "solid":
      buttonStyle = `bg-genshin-element-${element} transition-colors hover:bg-opacity-70 active:bg-opacity-50 text-black font-semibold`;
      break;
    case "outline":
      buttonStyle = `border-1 border-genshin-element-${element} text-genshin-element-${element} bg-dark-900 transition-colors bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40`;
      break;

    case "ghost":
      buttonStyle = `text-genshin-element-${element} bg-dark-900 transition-colors bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40`;
      break;
  }

  return { buttonStyle };
}
