export class LikeComponent {

    constructor(public _likesCount: number, public _isSelected: boolean) {

    }

    onClick() {
        this._isSelected = !this._isSelected;
        this._likesCount += this._isSelected ? -1 : 1;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }

}