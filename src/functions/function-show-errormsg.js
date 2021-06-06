import { Dialog, Loading } from 'quasar'


export function showErorrMessage(error) {
    Loading.hide()
    Dialog.create({
        title: 'Error',
        message: error.message
    })
}