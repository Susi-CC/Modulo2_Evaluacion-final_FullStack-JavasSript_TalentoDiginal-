window.addEventListener("load", function () {

    //Color del link del nav

    $(".nav-link").mouseout(function () {
        $(".nav-link").css(
            {
                color: "white"
            });

    })

    $("#link-sm").mouseover(function () {
        $("#link-sm").css(
            {
                color: "#8561E4"
            });

    })

    $("#link-pr").mouseover(function () {
        $("#link-pr").css(
            {
                color: "#8561E4"
            });

    })

    $("#link-con").mouseover(function () {
        $("#link-con").css(
            {
                color: "#8561E4"
            });

    })


    //Para los título

    $(".titulo").mouseout(function () {
        $(".titulo").css(
            {
                color: "white"
            });

    })

    $("#T-sobre_mi").mouseover(function () {
        $("#T-sobre_mi").css(
            {
                color: "#8561E4"
            });

    })

    $("#T-proyectos").mouseover(function () {
        $("#T-proyectos").css(
            {
                color: "#8561E4"
            });

    })

    $("#T-contacto").mouseover(function () {
        $("#T-contacto").css(
            {
                color: "#8561E4"
            });

    })

    // Mostrar al abrir el título
    $("#T-sobre_mi").click(function () {

        if ($("#sobre_mi").hasClass("oculto")
        ) {
            $("#sobre_mi").removeClass("oculto");
        } else {
            $("#sobre_mi").addClass("oculto");

        }
    });

    $("#T-proyectos").click(function () {

        if ($("#proyectos").hasClass("oculto")
        ) {
            $("#proyectos").removeClass("oculto");
        } else {
            $("#proyectos").addClass("oculto");

        }
    });

    $("#T-contacto").click(function () {

        if ($("#contacto").hasClass("oculto")
        ) {
            $("#contacto").removeClass("oculto");
        } else {
            $("#contacto").addClass("oculto");

        }
    });


    // Mostrar al abrir link en navbar
    $("#link-sm").click(function () {

        if ($("#sobre_mi").hasClass("oculto")
        ) {
            $("#sobre_mi").removeClass("oculto");
            $("#proyectos").addClass("oculto")
            $("#contacto").addClass("oculto")

        }
    });

    $("#link-pr").click(function () {

        if ($("#proyectos").hasClass("oculto")
        ) {
            $("#proyectos").removeClass("oculto");
            $("#contacto").addClass("oculto")
            $("#sobre_mi").addClass("oculto")
        }
    });
    $("#link-con").click(function () {

        if ($("#contacto").hasClass("oculto")
        ) {
            $("#contacto").removeClass("oculto");
            $("#proyectos").addClass("oculto")
            $("#sobre_mi").addClass("oculto")

        }
    });
    
    // articulo ver más/menos

    $("#ver-mas-art").click(function () {
        $("#poco-texto-art").addClass("oculto");
        $("#mucho-texto-art").removeClass("oculto");
    });

    $("#ver-menos-art").click(function () {
        $("#poco-texto-art").removeClass("oculto");
        $("#mucho-texto-art").addClass("oculto");
    });

})
