function sweetAlertAjax(type, url, title, ele = null) {
    if (ele) {
        $(ele).prop("disabled", true);
        var deleteHtml = $(ele).html();
        $(ele).html(
            '<i class="fa fa-spinner fa-spin"></i>'
        );
    }
    swal({
        title: title,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                url: url,
                type: type,
                data: {
                    _token: $("#csrf-token").val(),
                },
                success: function (response) {
                    if (response.status == 200) {
                        swal({
                            text: response.message,
                            icon: "success",
                            button: "Ok",
                        }).then(function () {
                            location.reload();
                        });
                        if (ele) {
                            $(ele).html(deleteHtml);
                            $(ele).prop("disabled", false);
                        }
                    } else if (response.status == true) {
                        window.location.href = response.message;

                    } else {
                        swal({
                            text: response.message,
                            icon: "error",
                            button: "Ok",
                        });
                        if (ele) {
                            $(ele).html(deleteHtml);
                            $(ele).prop("disabled", false);
                        }
                    }
                },
            });
        }

    });
}
