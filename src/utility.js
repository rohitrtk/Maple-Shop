export const prettyInt = (n) => {
  const ias = n.toString();
  const length = ias.length;
  const lmt = length % 3;
  
  let commaIndex = (lmt === 0) ? 3 : lmt;
  let prettyArray = [];

  for(let i = 0; i < length; i++) {
    if(i === commaIndex) {
      commaIndex += 3;
      prettyArray.push(',');
    }

    prettyArray.push(ias[i]);
  }

  return prettyArray.join("");
}