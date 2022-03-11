let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let map = 
[
    [0, 0, 0, -1, 0, 0, -1, 0, -1, 0, -1, 0],
    [-1, -1, 0, -1, -1, 0, 0, 0, 0, 0, -1, 0],
    [0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0],
    [0, -1, -1, 0, -1, 0, -1, 0, -1, -1, -1, 0],
    [0, 0, 0, 0, -1, 0, -1, 0, 0, 0, -1, 0],
    [0, -1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, 0, 0, -1, -1, 0, -1, 0, -1, 0],
    [0, 0, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, -1, -1, 0, 0, 0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, -1, -1, 0, -1, 0, 0, -1, 0, -1, 0],
    [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 1]
]

let playerImg = document.createElement("img");
let lavaImg = document.createElement("img");
let endImg = document.createElement("img");
lavaImg.src = "img/lava.png";
endImg.src = "img/end.jpg";
playerImg.src = "img/piu.png";

let player = new Player(playerImg, 0, 0, 40, 40, 40)
window.onload = () => 
{
    player.draw(ctx);
};
document.addEventListener("keydown", (event) => 
{
    switch (event.key) 
    {
        case "ArrowRight":
            player.moveRight();
            checkMove();
            break;
        case "ArrowLeft":
            player.moveLeft();
            checkMove();
            break;
        case "ArrowUp":
            player.moveUp();
            checkMove();
            break;
        case "ArrowDown":
            player.moveDown();
            checkMove();
            break;
    }
});

function checkMove() 
{
    let j = Number.parseInt(player.x / 40);
    let i = Number.parseInt(player.y / 40);
    if (map[i][j] === -1) 
    {
        alert("Bạn đã thua, bạn không giúp tôi đến được trái tim của cô ấy. Buồn quá!");
        player.x = 0;
        player.y = 0;
    } else if (map[i][j] === 1) 
    {
        alert("Wow, tôi đã đến được trái tim của cô ấy, cảm ơn bạn rất nhiều!!!");
        map[i][j] = 0;
    }
}

window.onload = () => 
{
    setInterval(() => 
    {
        console.log("draw");
        ctx.fillStyle = "#FFF";
        ctx.fillRect(0, 0, 480, 480);
        for (let i = 0; i < map.length; i++) 
        {
            for (let j = 0; j < map[i].length; j++) 
            {
                if (map[i][j] == -1) 
                {
                    ctx.drawImage(lavaImg, j * 40, i * 40, 40, 40);
                } 
                else if (map[i][j] == 1) 
                {
                    ctx.drawImage(endImg, j * 40, i * 40, 40, 40);
                }
            }
        }
        player.draw(ctx);
    }, 1);
}