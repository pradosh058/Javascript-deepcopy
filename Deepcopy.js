const getCopiedObject = (source) => {
  const targetObject={};
  const keys=Object.keys(source);
  for(let key of keys){
    if(typeof source[key]=="Object"){
      targetObject[key]=getCopiedObject(source[key]);
    } else {
      targetObject[key]=source[key];
    }
  }
  return targetObject;
}
