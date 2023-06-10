
export default function Changes({btnlight, btndark, bodyClass}) {

    function lightMode() {
        bodyClass.classList.add('dark')
        bodyClass.classList.remove('light')
        btnlight.classList.add('hide')
        btndark.classList.remove('hide')
    }

    function darkMode() {
        bodyClass.classList.add('light')
        bodyClass.classList.remove('dark')
        btndark.classList.add('hide')
        btnlight.classList.remove('hide')
    }
    return {
        lightMode, darkMode, bodyClass
    }
}