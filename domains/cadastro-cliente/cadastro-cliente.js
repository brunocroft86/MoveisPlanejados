document.getElementById('addPhoneBtn').addEventListener('click', function() {
  const div = document.getElementById('telefones');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'telefone[]';
  input.placeholder = '(XX) XXXXX-XXXX';
  input.required = true;
  div.appendChild(input);
});
