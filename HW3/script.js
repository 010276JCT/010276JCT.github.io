// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
//let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 30, color1 = "#FFC408";
//let x2 = canvas.width, y2 = 0, dx2 = -5, dy2 = 5, r2 = 30, color2 = "#6E75A4";
let x=[0,canvas.width,0], y=[0,0,canvas.height];
let dx=[5,-5,5],dy=[5,-5,5];
let r=[30,30,30], color=["#FFC408","#BDC0BA","#58B2DC"];
let N=3;
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
for(let i=0;i<N;i++)
  {
    x[i]+=dx[i];
    y[i]+=dy[i];
  }
    //x1 = x1 + dx1;
    //y1 = y1 + dy1;
    //x2 = x2 + dx2;
    //y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)

  for(let i = 0; i < N; i++)
  {
      if(x[i]<0|| x[i]>canvas.width) dx[i]=-dx[i];
      if(y[i]<0|| y[i]>canvas.height) dy[i]=-dy[i];
  }
  //分開列式才不會讓i和j互相抵消
  for(let i=0;i<N;i++)
    for(let j=0;j<N;j++)
      {
        if((x[i]-x[j])*(x[i]-x[j])+(y[i]-y[j])*(y[i]-y[j])<(r[i]+r[j])*(r[i]+r[j]))
          [dx[i],dx[j],dy[i],dy[j]]=[dx[j],dx[i],dy[j],dy[i]];
      }
  //if(x1<0 || x1>canvas.width)  dx1=-dx1;
  //if(y1<0 || y1>canvas.height)  dy1=-dy1;
  //if(x2<0 || x2>canvas.width)  dx2=-dx2;
  //if(y2<0 || y2>canvas.height)  dy2=-dy2;
  //if((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)<(r1+r2)*(r1+r2))
   // [dx1,dx2,dy1,dy2]=[dx2,dx1,dy2,dy1];

    //drawBall(x1, y1, r1, color1);
    //drawBall(x2, y2, r2, color2); 
  //畫兩顆球
    for(let i=0;i<N;i++)
      drawBall(x[i], y[i], r[i], color[i]);
  requestAnimationFrame(draw);
}
draw();