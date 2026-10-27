import jsPDF from "jspdf";
export function exportPdf({width,depth,height,holes}:{width:number,depth:number,height:number,holes:number}) {
  const pdf=new jsPDF({orientation:"landscape",unit:"mm",format:"a4"});
  pdf.setFont("helvetica","bold");pdf.setFontSize(16);pdf.text("TecniCAD 3D — PLANO TÉCNICO",15,15);
  pdf.setFont("helvetica","normal");pdf.setFontSize(9);pdf.text("Placa perforada · Unidades: mm · Escala: 1:1",15,21);
  const drawView=(x:number,y:number,w:number,h:number,title:string)=>{pdf.setDrawColor(70);pdf.rect(x,y,w,h);pdf.setFontSize(10);pdf.text(title,x+3,y+6);pdf.setDrawColor(30);const s=Math.min((w-30)/width,(h-25)/depth);const rw=width*s,rh=depth*s;pdf.rect(x+(w-rw)/2,y+12+(h-18-rh)/2,rw,rh);};
  drawView(15,30,80,65,"FRONTAL");drawView(105,30,100,65,"SUPERIOR");drawView(215,30,65,65,"LATERAL");
  pdf.rect(15,105,265,75);pdf.setFontSize(11);pdf.text("DATOS DE LA PIEZA",20,114);pdf.setFontSize(9);pdf.text(`Ancho: ${width} mm`,20,124);pdf.text(`Profundidad: ${depth} mm`,20,131);pdf.text(`Espesor: ${height} mm`,20,138);pdf.text(`Agujeros: ${holes}`,20,145);pdf.rect(205,150,70,30);pdf.setFontSize(8);pdf.text("TECNICAD 3D",210,160);pdf.text("PLANO A4 HORIZONTAL",210,166);pdf.save("tecnicad-plano.pdf");
}