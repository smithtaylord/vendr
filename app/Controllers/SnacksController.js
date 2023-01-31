import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { setText } from "../Utils/Writer.js";

function _drawMoney() {
    let money = appState.money
    let template = 'Total Money: $0.00'
    for (let i = 0; i < money; i++) {
        template = `Total Money: $${money}`
    }
    setText('money', template)
}

function_drawSnacks(){


}
export class SnacksController {
    constructor() {
        _drawMoney()
        appState.on('money', _drawMoney)
    }

    addMoney() {
        snacksService.addMoney()

    }


}