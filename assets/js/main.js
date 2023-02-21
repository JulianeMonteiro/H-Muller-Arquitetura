$().ready(function () {
  $("#tel").mask("(00) 00000-0000");

  $("#name").on("keypress", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[0-9]+/g, "")
    );
  });

  $("form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Por favor, insira o seu nome.",
        minlength: jQuery.validator.format(
          "Por favor, insira seu primeiro nome completo!"
        ),
      },
      tel: "Por favor, insira o seu telefone para contato.",
      email: "Por favor, insira o seu e-mail no formato 'nome@domínio.com'.",
      mensagem: "Por favor, deixe sua mensagem aqui.",
    },

    submitHandler: function (form) {
      form.submit();
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();

      alert(`Existem ${camposIncorretos} campos incorretos`);
    },
  });
});
