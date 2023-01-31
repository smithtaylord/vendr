import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawMoney() {
    let money = appState.money
    let template = 'Total Money: $0.00'
    for (let i = 0; i < money; i++) {
        template = `Total Money: $${money}`
    }
    setText('money', template)
}

function _drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(s => template += s.Template)
    setHTML('snacks', template)

}
export class SnacksController {
    constructor() {
        _drawMoney()
        _drawSnacks()
        appState.on('money', _drawMoney)
    }

    addMoney() {
        snacksService.addMoney()
    }

    purchaseSnack(name) {
        console.log('you purchased', name);
        let money = appState.money
        let currentSnack = appState.snacks.find(s => s.name == name)
        if (currentSnack.price > money) {
            Pop.toast('You need more money', 'error', 'center', 3000, true)
        } else {
            snacksService.purchaseSnack(name)
        }

    }


}