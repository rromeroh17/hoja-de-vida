$(document).ready(function () {

    /* =================================
       ANIMACIÓN DE LAS TARJETAS
    ================================= */

    $(".animar").each(function (indice) {

        $(this)
            .delay(indice * 150)
            .animate(
                {
                    opacity: 1
                },
                600
            );

    });


    /* =================================
       VALIDACIÓN DEL FORMULARIO
    ================================= */

    $("#formularioContacto").submit(function (event) {

        event.preventDefault();


        // Obtener valores

        let nombre = $("#nombre").val().trim();

        let correo = $("#correo").val().trim();

        let telefono = $("#telefono").val().trim();

        let asunto = $("#asunto").val().trim();

        let mensaje = $("#mensaje").val().trim();


        // Limpiar errores

        $(".text-danger").text("");

        $("#mensajeExito").hide();


        let valido = true;


        /* =============================
           VALIDAR NOMBRE
        ============================= */

        if (nombre === "") {

            $("#errorNombre").text(
                "El nombre es obligatorio."
            );

            valido = false;

        } else if (nombre.length < 3) {

            $("#errorNombre").text(
                "El nombre debe tener mínimo 3 caracteres."
            );

            valido = false;

        }


        /* =============================
           VALIDAR CORREO
        ============================= */

        let patronCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (correo === "") {

            $("#errorCorreo").text(
                "El correo es obligatorio."
            );

            valido = false;

        } else if (!patronCorreo.test(correo)) {

            $("#errorCorreo").text(
                "Ingresa un correo electrónico válido."
            );

            valido = false;

        }


        /* =============================
           VALIDAR TELÉFONO
        ============================= */

        let patronTelefono =
            /^[0-9]{7,15}$/;


        if (telefono === "") {

            $("#errorTelefono").text(
                "El teléfono es obligatorio."
            );

            valido = false;

        } else if (!patronTelefono.test(telefono)) {

            $("#errorTelefono").text(
                "El teléfono debe contener entre 7 y 15 números."
            );

            valido = false;

        }


        /* =============================
           VALIDAR ASUNTO
        ============================= */

        if (asunto === "") {

            $("#errorAsunto").text(
                "El asunto es obligatorio."
            );

            valido = false;

        }


        /* =============================
           VALIDAR MENSAJE
        ============================= */

        if (mensaje === "") {

            $("#errorMensaje").text(
                "El mensaje es obligatorio."
            );

            valido = false;

        } else if (mensaje.length < 10) {

            $("#errorMensaje").text(
                "El mensaje debe tener mínimo 10 caracteres."
            );

            valido = false;

        }


        /* =============================
           FORMULARIO CORRECTO
        ============================= */

        if (valido) {

            $("#mensajeExito")
                .hide()
                .fadeIn(600);

            $("#formularioContacto")[0].reset();

        }

    });

});