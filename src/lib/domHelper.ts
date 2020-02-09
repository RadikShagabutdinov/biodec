interface ICSSPropery {
  name: string;
  value: string;
}

export function updateStyle(el: HTMLElement | void, val: ReadonlyArray<ICSSPropery>) {
  if (el){
    val.forEach((prop) => { el.style.setProperty(prop.name, prop.value); });
  }
}