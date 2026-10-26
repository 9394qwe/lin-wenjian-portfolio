const zoomViewer=document.querySelector('.zoom-viewer');
const zoomCanvas=zoomViewer.querySelector('.zoom-canvas');
const zoomImage=zoomCanvas.querySelector('img');
const zoomLevel=zoomViewer.querySelector('.zoom-level');
const galleryMainImage=document.querySelector('.gallery-stage img');
let zoomScale=1,zoomX=0,zoomY=0,dragging=false,dragStartX=0,dragStartY=0;

function applyZoom(){zoomImage.style.transform=`translate(${zoomX}px,${zoomY}px) scale(${zoomScale})`;zoomLevel.textContent=`${Math.round(zoomScale*100)}%`}
function resetZoom(){zoomScale=1;zoomX=0;zoomY=0;applyZoom()}
function openPortfolioZoom(src,alt){zoomImage.src=src;zoomImage.alt=alt||'作品细节放大查看';resetZoom();zoomViewer.showModal()}
window.openPortfolioZoom=openPortfolioZoom;

galleryMainImage.addEventListener('click',(event)=>{event.stopPropagation();openPortfolioZoom(galleryMainImage.dataset.full||galleryMainImage.src,galleryMainImage.alt)});
document.addEventListener('click',event=>{const image=event.target.closest?.('[data-case-zoom]');if(image&&!image.closest('.flat-preview')){event.stopPropagation();openPortfolioZoom(image.dataset.full||image.src,image.alt)}});
document.addEventListener('click',event=>{const preview=event.target.closest?.('.flat-preview');if(preview){event.stopPropagation();const image=preview.querySelector('img');openPortfolioZoom(image.dataset.full||image.src,image.alt)}});
zoomCanvas.addEventListener('wheel',(event)=>{event.preventDefault();const factor=event.deltaY<0?1.12:0.89;zoomScale=Math.min(6,Math.max(1,zoomScale*factor));if(zoomScale===1){zoomX=0;zoomY=0}applyZoom()},{passive:false});
zoomCanvas.addEventListener('click',(event)=>{if(event.target===zoomCanvas)zoomViewer.close()});
zoomCanvas.addEventListener('pointerdown',(event)=>{if(zoomScale<=1)return;dragging=true;dragStartX=event.clientX-zoomX;dragStartY=event.clientY-zoomY;zoomCanvas.classList.add('dragging');zoomCanvas.setPointerCapture(event.pointerId)});
zoomCanvas.addEventListener('pointermove',(event)=>{if(!dragging)return;zoomX=event.clientX-dragStartX;zoomY=event.clientY-dragStartY;applyZoom()});
function stopDragging(){dragging=false;zoomCanvas.classList.remove('dragging')}
zoomCanvas.addEventListener('pointerup',stopDragging);zoomCanvas.addEventListener('pointercancel',stopDragging);
zoomViewer.querySelector('.zoom-reset').addEventListener('click',resetZoom);
zoomViewer.querySelector('.zoom-close').addEventListener('click',()=>zoomViewer.close());
zoomViewer.addEventListener('close',resetZoom);

const galleryStage=document.querySelector('.gallery-stage');

galleryStage.addEventListener('click',(event)=>{
  if(event.target===galleryStage)document.querySelector('.project-gallery').close();
});
