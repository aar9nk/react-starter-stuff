export const nameValidation = (name) => {
  const onlyLetters = new RegExp("([a-zA-Z])");

  console.log('name: ', name);
  console.log('test: ', onlyLetters.test(name));

  if(onlyLetters.test(name)) {
    return '';
  } else {
    return 'Please only use letters for your name';
  }
};
