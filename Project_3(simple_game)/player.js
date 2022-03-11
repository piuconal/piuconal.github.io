class Player 
{
    constructor(img, x, y, width, height, step) 
    {
        this.x = x;
        this.y = y;
        this.img = img;
        this.width = width;
        this.height = height;
        this.step = step;
    }
    draw = (ctx) => 
    {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    moveRight = () => 
    {
        let newX = this.x + this.step;
        if (newX < 480) 
        {
            this.x += this.step;
        }
    }
    moveLeft = () => 
    {
        let newX = this.x - this.step;
        if (newX >= 0) 
        {
            this.x -= this.step;
        }
    }
    moveUp = () => 
    {
        let newY = this.y - this.step;
        if (newY >= 0) 
        {
            this.y -= this.step;
        }
    }
    moveDown = () => 
    {
        let newY = this.y + this.step;
        if (newY < 480) 
        {
            this.y += this.step;
        }
    }
}