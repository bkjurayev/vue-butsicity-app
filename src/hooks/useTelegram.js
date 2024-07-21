const tg = window.Telegram.WebApp

const onClose = () => {
    tg.close()
}
const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
    }
}

module.exports = { onClose, onToggleButton, user: tg.initDataUnsafe?.user, tg }
// export function useTelegram() {

//     return {
//         onClose,
//         onToggleButton,
//         tg,
//         user: tg.initDataUnsafe?.user
//     }
// }