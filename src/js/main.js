const mainjs = (() => {
  
  const myButton = document.getElementById('button');

  myButton.addEventListener('click', (e) => {
    e.preventDefault();

    const textInput = document.getElementById('input');
    const hello = 'hello';
    console.log(hello + textInput.value);
  });
})();
