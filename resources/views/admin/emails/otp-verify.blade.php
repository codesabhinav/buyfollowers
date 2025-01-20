<html>

<head>
    <style>
        html,
        body {
            padding: 0;
            margin: 0;
        }
    </style>
</head>

<body>
    <div
        style="font-family:Roboto,Helvetica,Arial,sans-serif; line-height: 1.5; font-size: 15px; color: #2F3044; min-height: 100%; margin:0; padding:0; width:100%; background-color:#edf2f7">
        <br />
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
            style="border-collapse:collapse;margin:0 auto; padding:0; max-width:600px">
            <tbody>
                <tr>
                    <td align="left" valign="center">
                        <div
                            style="text-align:left; margin: 0 20px; padding: 40px; background-color:#ffffff; border-radius: 6px">
                            <div style="padding-bottom: 30px; font-size: 17px;">
                                <strong style="text-decoration: none; color: #333">Hello! {{ $email }},</strong>
                            </div>
                            <div style="padding-bottom: 30px">
                                We received a request to reset your password. 🛠️
                                <br />
                                To proceed with the password reset request, please use the OTP below:
                            </div>
                            <div style="padding-bottom: 40px; text-align:center;">
                                <div
                                    style="text-decoration:none;display:inline-block;text-align:center;padding:0.75575rem 1.3rem;font-size:0.925rem;line-height:1.5;border-radius:0.35rem;color:#ffffff;background-color:#ff00aa;border:0px;margin-right:0.75rem!important;font-weight:600!important;outline:none!important;vertical-align:middle">
                                    <strong>{{ $otp }}</strong>
                                </div>
                                <div style="padding-bottom: 15px;padding-top:15px">
                                    ⏰ This OTP will expire in 10 minutes! 
                                    <br />
                                    If you did not request a password reset, no further action is required.
                                </div>
                                <hr>
                                <div style="padding-bottom: 10px">Kind regards, 
                                    <br>✨{{ getEnvironmentVariable('title') ? getEnvironmentVariable('title') : 'Buy Followers' }} ✨
                                </div>
                            </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
