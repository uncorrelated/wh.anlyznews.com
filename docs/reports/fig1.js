function drawShape(){
    const canvas = document.getElementById('fig-1');
    if(null==canvas)
        return;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    var cw = 300; var ch = 150;
    var bw = cw/(2*3); var bh = bw;
    var x = bw / 2;
    var y = (ch - bh)/2 - bh/2;
    ctx.font = "bold 50% 'Courier New'";
    var dx = cw/500;
    var arrow_shape = [0, 5*dx, -20*dx, 5*dx, -20*dx, 15*dx];

    var filetypes = [".Rmd", ".md", ".html"];
    var filetype_colors = ["darkred", "black", "darkblue"];

    for(var i=0; i<3; i++){
        ctx.fillStyle = filetype_colors[i];
        ctx.fillRect(x, y, bw, bh);
        ctx.fillStyle = 'white';
        const m = ctx.measureText(filetypes[i]);
        ctx.fillText(filetypes[i], x + (bw - m.width)/2, y + (bh - m.actualBoundingBoxAscent)/2 + m.actualBoundingBoxAscent);
        x += 2*bw;
    }

    var tooltypes = ["Knitr", "Pandoc"];
    var tooltypes_color = ["darkred", "darkblue"];

    for(var i=1; i<3; i++){
        x = bw / 2 + 2 * bw * i;
        var c = ctx.createLinearGradient(x - bw, 150, x, 150);
        c.addColorStop(0.0, filetype_colors[i - 1]);
        c.addColorStop(1.0, filetype_colors[i]);
        ctx.fillStyle = c;
        // 右矢印
        ctx.beginPath();
        ctx.arrow(x - bw + cw/100, y + bh/2, x - cw/100, y + bh/2, arrow_shape);
        ctx.fill();
        // 上矢印
        ctx.beginPath();
        ctx.arrow(x - bw/2, y + 1.25*bh, x - bw/2, y + bh/2 + 5*dx, arrow_shape);
        ctx.fill();
        // 文字
        ctx.fillStyle = tooltypes_color[i - 1];
        const m = ctx.measureText(tooltypes[i - 1]);
        ctx.fillText(tooltypes[i - 1], x - bw + (bw - m.width)/2, y + bh + (bh - m.actualBoundingBoxAscent)/2 + m.actualBoundingBoxAscent);
    }
}

drawShape();