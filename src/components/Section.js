export default class Section {
    constructor ({ renderer }, containerSelector) {
        this._renderer = renderer
        this._contaiter = document.querySelector(containerSelector)
    }
    render(arr) {
        arr.forEach(item => {
        this._renderer(item)            
        })
    }
    addItem(element) {
        this._contaiter.prepend(element)
    }
}