import { Dialog } from 'quasar'


export function showErorrMessage(error) {
    Dialog.create({
        title: 'Error',
        message: error.message
    })
}