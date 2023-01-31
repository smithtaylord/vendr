

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.emoji = data.emoji
    }

    get Template() {
        return `
        <div class="col-4 my-3">
        <div class="card shadow bg-dark" id="">
        <h1 class="text-center py-3 emoji-lg selectable" onclick="app.snacksController.purchaseSnack('${this.name}')">${this.emoji}</h1>
        <div class="card-body bg-info text-light text-center">
        <h3>${this.name} | $${this.price} </h3>
        </div>
        </div>
        </div>
`

    }
}