/* Supplied browser support. Students are NOT assessed on this file.
   This is an original tiny helper, not the CodeHS graphics library. */
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
var command = ''; // Set by the controls before takeTurn() runs.
function clearBoard() { ctx.fillStyle='#101e31'; ctx.fillRect(0,0,640,640); }
function box(x,y,w,h,colour) {ctx.fillStyle=colour;ctx.fillRect(x,y,w,h);}
function text(value,x,y,size,colour) {ctx.fillStyle=colour;ctx.font='bold '+size+'px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(value,x,y);}
function cell(column,row,label,colour) {box(20+column*100,20+row*100,94,94,colour);text(label,67+column*100,67+row*100,18,'#ffffff');}
function robot(column,row) {cell(column,row,'BOT','#146958');text('•  •',67+column*100,48+row*100,20,'#aaffea');}
function say(value) {document.getElementById('status').textContent=value;}
function stats(value) {document.getElementById('stats').textContent=value;}
function randomInt(low,high) {return Math.floor(Math.random()*(high-low+1))+low;}
function door(number,label,colour) {box(35+number*200,175,170,280,colour);text(label,120+number*200,300,24,'#fff');text(number+1,120+number*200,380,28,'#fff');}
function lamp(number,lit) {box(52+number*55,510,36,36,lit?'#58e0c0':'#34465e');}
function dispatch(value) {command=value;takeTurn();}
document.querySelectorAll('[data-command]').forEach(button=>button.addEventListener('click',()=>dispatch(button.dataset.command)));
document.getElementById('restart').addEventListener('click',()=>{start();draw();});
document.addEventListener('keydown',event=>{
  if(event.target.closest('button,input,textarea,select')) return;
  const mapping={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right','1':'left','2':'middle','3':'right'};
  if(mapping[event.key] && document.querySelector('[data-command="'+mapping[event.key]+'"]')) {event.preventDefault();dispatch(mapping[event.key]);}
});
window.addEventListener('error',event=>say('Code error: '+event.message+' — check game.js and your browser console.'));
