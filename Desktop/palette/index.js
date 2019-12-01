const draw = (frame) => {
    const canvasElement = document.getElementById("canvas");
    if (canvasElement.getContext) {
        const ctx = canvasElement.getContext('2d');

        frame.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                ctx.fillStyle = `rgba(${column.join(",")})`;
                ctx.fillRect = (columnIndex+32, rowIndex+32, 32, 32)
            })
        });
    }
};

const smallDraw = (frame) => {
    const canvasElement = document.getElementById("canvas");
    if (canvasElement.getContext) {
        const ctx = canvasElement.getContext('2d');
        frame.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                ctx.fillStyle = "#" + column;
                ctx.fillRect = (columnIndex+4, rowIndex+4, 4, 4)
            })
        });
    }
};

document.getElementById("draw").addEventListener("click", () => {
    draw(largeFrame);
})