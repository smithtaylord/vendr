import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"

class SnacksService {
    addMoney() {
        appState.money += .25
        // console.log('You now have this much money', appState.money);
    }

    purchaseSnack(name) {
        // let currentSnack = appState.snacks.find(s => s.name == name)
        // @ts-ignore
        let currentSnack = appState.snacks.find(s => s.name == name)
        // @ts-ignore
        if (currentSnack.price > appState.money) {
            Pop.toast('Woah! You don\'t have enough money for that!', 'warning', 'center', 3000, true)
        } else {
            // @ts-ignore
            appState.money -= currentSnack.price
            // @ts-ignore
            Pop.toast(`${currentSnack.emoji} ${currentSnack?.name} has been sold!`, 'success', 'center', 3000, false)

        }



    }

}


export const snacksService = new SnacksService()