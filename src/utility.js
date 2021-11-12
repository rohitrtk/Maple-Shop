export const prettyInt = (n, delimiter=",") => {
  const ias = n.toString();
  const length = ias.length;
  const lmt = length % 3;
  
  let dIndex = (lmt === 0) ? 3 : lmt;
  let prettyArray = [];

  for(let i = 0; i < length; i++) {
    if(i === dIndex) {
      dIndex += 3;
      prettyArray.push(delimiter);
    }

    prettyArray.push(ias[i]);
  }

  return prettyArray.join("");
}