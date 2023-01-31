import { appState } from "../AppState.js"

class SnacksService {
    addMoney() {
        appState.money += .25
        console.log('You now have this much money', appState.money);
    }

    purchaseSnack(name) {
        let currentSnack = appState.snacks.find(s => s.name == name)
        appState.money -= currentSnack.price

    }

}


export const snacksService = new SnacksService()