import React, { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "../Components/ui/dropdown-menu";


const GoogleTranslate = () => {
    const [showDropdown, setShowDropdown] = useState(false);


    const [changeLang, setChangeLang] = useState('en');
    useEffect(() => {
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: changeLang,
                    autoDisplay: false,
                    includedLanguages: "en,zh-CN",
                },
                "google_translate_element"
            );
        };
        
    }, [changeLang]);


    useEffect(() => {
        if (!document.querySelector("#google-translate-script")) {
            const addScript = document.createElement("script");
            addScript.id = "google-translate-script";
            addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(addScript);
        }

    }, [changeLang]);

    // Function to change the language programmatically
    const changeLanguage = (lang) => {
        console.log(lang);
        setChangeLang(lang);
        const googleTranslateDropdown = document.querySelector(".goog-te-combo");
        googleTranslateDropdown.value = lang;
        googleTranslateDropdown.dispatchEvent(new Event("change"));
        setTimeout(()=>{
            window.location.reload();
        },200);
       
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <img
                        src="/assets/images/GoogleTranslate.svg"
                        alt="Google Translate"
                        style={{ width: "40px", cursor: "pointer" }}
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                </DropdownMenuTrigger>
                {showDropdown && (
                    <DropdownMenuContent
                        className="bg-white shadow-md rounded-md p-2"
                        style={{
                            position: "absolute",
                            left: "0",
                            zIndex: 1000,
                            width:"115px"
                        }}
                    >
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => changeLanguage("en")}
                        >
                            English
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => changeLanguage("zh-CN")}
                        >
                            Chinese
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                )}
            </DropdownMenu>

            {/* Hidden container for Google Translate widget */}
            <div id="google_translate_element" style={{ display: "none" }}></div>

            {/* Hide Google Translate branding and other elements */}
            <style>
                {`
                    .VIpgJd-ZVi9od-l4eHX-hSRGPd {
                        display: none !important;
                    }
                    .goog-te-gadget img {
                        display: none !important;
                    }
                    body > .skiptranslate {
                        display: none;
                    }
                    .goog-logo-link {
                        display: none !important;
                    } 
                    .goog-te-gadget {
                        color: transparent !important;
                    }
                    body {
                        top: 0px !important;
                    }
                `}
            </style>
        </div>
    );
};

export default GoogleTranslate;