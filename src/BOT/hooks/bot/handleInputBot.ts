export const handleInputBot = (list: Array<any>, item: any) => {
  const userInputedTerms = item.split(" ");
  let validate = false;

  if (userInputedTerms.length > 1) {
    if (list.find((el) => userInputedTerms.includes(el))) {
      validate = true;
    }
  } else {
    if (list.includes(item)) {
      validate = true;
    }
  }
  console.log(validate);

  return validate;
};
