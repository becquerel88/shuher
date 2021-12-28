function startDrag(pointer, targets) {
    this.dragObject = targets[0];

    if (!this.dragObject) return; // if object interactive is false, skip it 
    this.input.off('pointerdown', this.startDrag, this);
    this.isMovingMouse = true;
    this.input.on('pointermove', doDrag, this);
    this.input.on('pointerup', stopDrag, this);

}

function doDrag(pointer) {
    this.dragObject.x = pointer.x;
    this.dragObject.y = pointer.y;

    // set bounds for gamescene
    if (pointer.y >= 1200) {
        this.dragObject.y = 1200;
    }
    
}

function stopDrag() {
    this.input.on('pointerdown', startDrag, this);
    this.input.off('pointermove', doDrag, this);
    this.input.off('pointerup', stopDrag, this);
    this.isMovingMouse = false;
}

export default startDrag;