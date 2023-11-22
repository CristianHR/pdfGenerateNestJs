import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { readFileSync } from 'fs';
import * as fs from 'fs-extra';
import puppeteer from 'puppeteer';
import Handlebars from "handlebars";
import moment from 'moment';

@Injectable()
export class AppService {
  data:any = {
    id: {
      name: {
        fistName: "Cristian",
        lastName: "Hilario Rentera",
      },
      birthday: '15/02'
    }, 
    shots: [  {
      type: 'heardWorm',
      date: "2017-07-27"
    }]
  };
  contenido = `
  <style>

  @font-face
    {font-family:Wingdings;
    panose-1:5 0 0 0 0 0 0 0 0 0;}
  @font-face
    {font-family:"Cambria Math";
    panose-1:2 4 5 3 5 4 6 3 2 4;}
  @font-face
    {font-family:Calibri;
    panose-1:2 15 5 2 2 2 4 3 2 4;}
  @font-face
    {font-family:Tahoma;
    panose-1:2 11 6 4 3 5 4 4 2 4;}
  /* Style Definitions */
  p.MsoNormal, li.MsoNormal, div.MsoNormal
    {margin-top:0in;
    margin-right:0in;
    margin-bottom:10.0pt;
    margin-left:0in;
    line-height:115%;
    font-size:11.0pt;
    font-family:"Calibri",sans-serif;}
  a:link, span.MsoHyperlink
    {color:blue;
    text-decoration:underline;}
  p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
    {mso-style-link:"P�rrafo de lista Car";
    margin-top:0in;
    margin-right:0in;
    margin-bottom:10.0pt;
    margin-left:.5in;
    line-height:115%;
    font-size:11.0pt;
    font-family:"Calibri",sans-serif;}
  p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
    {mso-style-link:"P�rrafo de lista Car";
    margin-top:0in;
    margin-right:0in;
    margin-bottom:0in;
    margin-left:.5in;
    line-height:115%;
    font-size:11.0pt;
    font-family:"Calibri",sans-serif;}
  p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
    {mso-style-link:"P�rrafo de lista Car";
    margin-top:0in;
    margin-right:0in;
    margin-bottom:0in;
    margin-left:.5in;
    line-height:115%;
    font-size:11.0pt;
    font-family:"Calibri",sans-serif;}
  p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
    {mso-style-link:"P�rrafo de lista Car";
    margin-top:0in;
    margin-right:0in;
    margin-bottom:10.0pt;
    margin-left:.5in;
    line-height:115%;
    font-size:11.0pt;
    font-family:"Calibri",sans-serif;}
  span.PrrafodelistaCar
    {mso-style-name:"P�rrafo de lista Car";
    mso-style-link:"P�rrafo de lista";}
  .MsoChpDefault
    {font-family:"Calibri",sans-serif;}
  .MsoPapDefault
    {margin-bottom:10.0pt;
    line-height:115%;}
  /* Page Definitions */
  @page WordSection1
    {size:595.35pt 841.95pt;
    margin:14.2pt 85.05pt 85.05pt 85.05pt;}
  div.WordSection1
    {page:WordSection1;}
  /* List Definitions */
  ol
    {margin-bottom:0in;}
  ul
    {margin-bottom:0in;}

    background-image: url("data:image/png;base64,BINARY_CHUNKS");

</style>


<div class=WordSection1>

  <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=711
  style='width:533.05pt;margin-left:0pt;border-collapse:collapse;
  border:none'>
  <tr style='height:56.4pt'>
    <td width=538 style='width:403.8pt;border:solid windowtext 1.0pt;padding:
    0in 5.4pt 0in 5.4pt;height:56.4pt'>
    <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
    line-height:normal'><b><span style='font-size:14.0pt;font-family:"Arial",sans-serif'>Solicitud
    de Asignación de Casilla Electrónica </span></b></p>
    </td>
    <td width=172 valign=top style='width:129.25pt;border:solid windowtext 1.0pt;
    border-left:none;padding:0in 5.4pt 0in 5.4pt;height:56.4pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='position:absolute;z-index:-1895816192;margin-left:21px;margin-top:
    11px;width:111px;height:57px'><img width=111 height=57
    src="data:image/png;base64,${
      readFileSync(process.cwd()+'\\templates\\pdf\\JAACTD-Formulario-de-Solicitud_archivos\\image001.png').toString('base64')
    }"></span></p>
    </td>
  </tr>
  </table>

  <p class=MsoNormal><span style='font-size:1.0pt;line-height:115%;font-family:
  "Arial",sans-serif'>&nbsp;</span></p>

  <table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 align=left
  width=708 style='width:531.35pt;border-collapse:collapse;border:none;
  margin-left:4.8pt;margin-right:4.8pt'>
  <tr style='height:30.65pt'>
    <td width=708 style='width:531.35pt;padding:0in 5.4pt 0in 5.4pt;height:30.65pt'>
    <p class=MsoNormal style='margin-bottom:0in;text-align:justify;line-height:
    normal'><span style='font-size:10.0pt;font-family:"Arial",sans-serif'>Por
    medio del presente, solicito la asignación de casilla electrónica de la ONPE,
    para la notificación de los actos administrativos, actuaciones
    administrativas y documentos relacionados que deban ser notificados a través
    del Sistema de Notificaciones Electrónicas SISEN-ONPE.</span></p>
    </td>
  </tr>
  </table>

  <p class=MsoNormal><span style='font-size:1.0pt;line-height:115%;font-family:
  "Arial",sans-serif'>&nbsp;</span></p>

  <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 align=left
  width=702 style='width:526.25pt;border-collapse:collapse;border:none;
  margin-left:4.8pt;margin-right:4.8pt'>
  <tr style='height:25.1pt'>
    <td width=328 style='width:245.75pt;border:solid windowtext 1.0pt;padding:
    0in 5.4pt 0in 5.4pt;height:25.1pt'>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:8.55pt;line-height:normal'><span style='position:absolute;
    z-index:251698176;left:0px;margin-left:121px;margin-top:0px;width:27px;
    height:25px'><img width=27 height=25
    src="JAACTD-Formulario-de-Solicitud_archivos/image002.png"></span><b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Persona Natural</span></b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    (Llenar campo 1)</span></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:8.55pt;line-height:normal'><span style='font-size:8.0pt;
    font-family:"Arial",sans-serif'>&emsp;&emsp; (Marcar x)</span></p>
    </td>
    <td width=374 style='width:280.5pt;border:solid windowtext 1.0pt;border-left:
    none;padding:0in 5.4pt 0in 5.4pt;height:25.1pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='position:absolute;z-index:251699200;margin-left:109px;margin-top:0px;
    width:27px;height:25px'><img width=27 height=25
    src="JAACTD-Formulario-de-Solicitud_archivos/image002.png"></span><b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Persona Jurídica</span></b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&emsp;&emsp;&emsp;&emsp;&emsp; (Llenar
    campo 2)</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&emsp;&emsp; (Marcar x)</span></p>
    </td>
  </tr>
  </table>

  <p class=MsoNormal><span style='font-size:1.0pt;line-height:115%;font-family:
  "Arial",sans-serif'>&nbsp;</span></p>

  <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=711
  style='width:533.2pt;margin-left:0pt;border-collapse:collapse;border:
  none'>
  <tr style='height:8.45pt'>
    <td width=711 colspan=6 style='width:533.2pt;border:solid windowtext 1.0pt;
    background:#BFBFBF;padding:0in 5.4pt 0in 5.4pt;height:8.45pt'>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:17.5pt;line-height:normal'><b><span
    style='font-size:6.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:24.4pt;text-indent:-21.25pt;line-height:normal'><b><span
    style='font-size:10.0pt;font-family:"Arial",sans-serif'>1.<span
    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></b><b><span
    style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>SOLO EN
    CASO DE SER PERSONA NATURAL </span></b><span style='font-size:10.0pt;
    font-family:"Arial",sans-serif;color:black'>(</span><span style='font-size:
    9.0pt;font-family:"Arial",sans-serif;color:black'>Se deberá llenar con letra
    imprenta, mayúscula, legible)</span></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:24.4pt;line-height:normal'><b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>* </span></b><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif;color:black'>Campo
    Obligatorio</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:3.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
  </tr>
  <tr style='height:27.9pt'>
    <td width=399 colspan=4 valign=top style='width:299.15pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:27.9pt'>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:3.15pt;line-height:normal'><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>Nombres y apellidos del titular:</span></p>
    </td>
    <td width=312 colspan=2 valign=top style='width:234.05pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:27.9pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Número de DNI/CE del
    titular:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr>
    <td width=399 colspan=4 valign=top style='width:299.15pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt'>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Teléfono celular del titular*:
    </span></p>
    </td>
    <td width=312 colspan=2 valign=top style='width:234.05pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt'>
    <p class=MsoListParagraphCxSpMiddle style='margin:0in;text-indent:7.1pt;
    line-height:normal'><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>Correo
    electrónico del titular*:</span></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:17.5pt;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>�</span></p>
    </td>
  </tr>
  <tr>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Domicilio del titular
    (Avenida, Calle, Jirón, Pasaje, Número, Departamento, Interior,
    Urbanización):</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:8.5pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:8.5pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:18.95pt'>
    <td width=237 colspan=2 valign=top style='width:177.7pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:18.95pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Distrito:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
    <td width=237 colspan=3 valign=top style='width:177.75pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:18.95pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Provincia:</span></p>
    </td>
    <td width=237 valign=top style='width:177.75pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:18.95pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Departamento:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:47.5pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border-top:none;
    border-left:solid windowtext 1.0pt;border-bottom:none;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:47.5pt'>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='position:absolute;z-index:251720704;left:0px;margin-left:514px;
    margin-top:37px;width:179px;height:21px'><img width=179 height=21
    src="JAACTD-Formulario-de-Solicitud_archivos/image003.png"
    alt="INDICAR EL PROCESO ELECTORAL"></span><span style='position:absolute;
    z-index:251709440;left:0px;margin-left:0px;margin-top:9px;width:432px;
    height:30px'><img width=432 height=30
    src="JAACTD-Formulario-de-Solicitud_archivos/image004.png"
    alt="�Es usted candidato a un proceso electoral? (marcar X seg�n corresponda)"></span>
    <table cellpadding=0 cellspacing=0>
    <tr>
      <td width=659 height=0></td>
    </tr>
    <tr>
      <td></td>
      <td><img width=31 height=31
      src="JAACTD-Formulario-de-Solicitud_archivos/image005.png"></td>
    </tr>
    </table>
    <br clear=ALL>
    <span style='position:absolute;z-index:-1895767040;left:0px;margin-left:437px;
    margin-top:36px;width:34px;height:19px'><img width=34 height=19
    src="JAACTD-Formulario-de-Solicitud_archivos/image006.png" alt="SI "></span><span
    style='position:absolute;z-index:-1895764992;left:0px;margin-left:472px;
    margin-top:36px;width:35px;height:19px'><img width=35 height=19
    src="JAACTD-Formulario-de-Solicitud_archivos/image007.png" alt=NOO></span>
    <table cellpadding=0 cellspacing=0>
    <tr>
      <td width=473 height=0></td>
    </tr>
    <tr>
      <td></td>
      <td><img width=32 height=29
      src="JAACTD-Formulario-de-Solicitud_archivos/image008.png"></td>
    </tr>
    </table>
    <br clear=ALL>
    <span style='position:absolute;z-index:251701248;left:0px;margin-left:442px;
    margin-top:9px;width:32px;height:29px'><img width=32 height=29
    src="JAACTD-Formulario-de-Solicitud_archivos/image009.png"></span><span
    style='position:absolute;z-index:251711488;left:0px;margin-left:521px;
    margin-top:8px;width:172px;height:29px'><img width=172 height=29
    src="JAACTD-Formulario-de-Solicitud_archivos/image010.png"></span></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='position:absolute;z-index:251707392;left:0px;margin-left:-3px;
    margin-top:10px;width:655px;height:37px'><img width=655 height=37
    src="JAACTD-Formulario-de-Solicitud_archivos/image011.png"
    alt="AUTORIZACIÓN EXPRESA PARA RECIBIR LA NOTIFICACIÓN DE COMUNICACIONES POR CORREO ELECTRONICO  (Marcar X) "></span><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>��������������������������������������������������������������������������������������������������������������������������������������������������������������� </span></b></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='position:relative;z-index:251672576;left:-4px;top:38px;width:706px;
    height:84px'><img width=706 height=46
    src="JAACTD-Formulario-de-Solicitud_archivos/image012.png"
    alt="Me comprometo a dar acuse de recibo a la notificaci�n del acto administrativo u actuaci�n administrativa, dentro de los dos (02) d�as h�biles contados desde el d�a siguiente de efectuado el acto de notificaci�n v�a correo electr�nico, exclusivamente para el tr�mite de la creaci�n de casilla electr�nica. Asimismo, me someto a los t�rminos y condiciones legales establecidas en el Reglamento del SISEN ONPE. "></span><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
  </tr>
  <tr style='height:14.25pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:14.25pt'>
    <p class=MsoListParagraph align=center style='margin:0in;text-align:center;
    line-height:normal'><b><span style='font-size:8.5pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
  </tr>
  <tr style='height:17.65pt'>
    <td width=711 colspan=6 style='width:533.2pt;border-top:none;border-left:
    solid windowtext 1.0pt;border-bottom:none;border-right:solid windowtext 1.0pt;
    background:#BFBFBF;padding:0in 5.4pt 0in 5.4pt;height:17.65pt'><br clear=ALL>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:24.4pt;text-indent:-21.25pt;line-height:normal'><b><span
    style='font-size:10.0pt;font-family:"Arial",sans-serif'>2.<span
    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></b><b><span
    style='font-size:10.0pt;font-family:"Arial",sans-serif;color:black'>SOLO EN
    CASO DE SER PERSONA JURÍDICA</span></b><b><span style='font-family:"Arial",sans-serif;
    color:black'> </span></b><span style='font-size:10.0pt;font-family:"Arial",sans-serif;
    color:black'>(</span><span style='font-size:9.0pt;font-family:"Arial",sans-serif;
    color:black'>Se deberá llenar con letra imprenta, mayúscula, legible)</span></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:24.4pt;line-height:normal'><b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>* </span></b><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif;color:black'>Campo
    Obligatorio</span></b></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:17.5pt;line-height:normal'><b><span
    style='font-size:1.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
  </tr>
  <tr style='height:19.75pt'>
    <td width=399 colspan=4 valign=top style='width:299.15pt;border:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Denominación o Razón
    Social:</span></p>
    <p class=MsoListParagraphCxSpMiddle style='margin:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    <p class=MsoListParagraphCxSpLast style='margin:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
    <td width=312 colspan=2 valign=top style='width:234.05pt;border:solid windowtext 1.0pt;
    border-left:none;padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;Número de RUC:</span></p>
    <p class=MsoListParagraph style='margin:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:31.45pt'>
    <td width=399 colspan=4 valign=top style='width:299.15pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:31.45pt'>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Teléfono fijo y/o
    celular*: </span></p>
    </td>
    <td width=312 colspan=2 valign=top style='width:234.05pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:31.45pt'>
    <p class=MsoListParagraphCxSpLast style='margin:0in;text-indent:7.1pt;
    line-height:normal'><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>Correo
    Electrónico*:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:31.4pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:31.4pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Domicilio: (Avenida,
    Calle, Jirón, Pasaje, Número, Departamento, Interior, Urbanización):</span></p>
    </td>
  </tr>
  <tr style='height:19.75pt'>
    <td width=200 valign=top style='width:150.35pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Distrito:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
    <td width=198 colspan=3 valign=top style='width:148.8pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;margin-bottom:
    0in;margin-left:3.15pt;line-height:normal'><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>Provincia:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
    <td width=312 colspan=2 valign=top style='width:234.05pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Departamento:</span></p>
    <p class=MsoListParagraph style='margin:0in;text-indent:7.1pt;line-height:
    normal'><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:13.75pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:13.75pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Número de Partida*:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:13.95pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:13.95pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Asiento Registral*:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:15.8pt'>
    <td width=711 colspan=6 style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;background:#F0F0F0;padding:0in 5.4pt 0in 5.4pt;height:15.8pt'>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:31.5pt;text-indent:-28.35pt;line-height:normal'><b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif;color:black'>2.1 &nbsp;&nbsp;&nbsp;EN
    MI CALIDAD DE:&nbsp; </span></b><span style='font-size:9.0pt;font-family:"Arial",sans-serif;
    color:black'>(Marcar X)</span></p>
    </td>
  </tr>
  <tr style='height:33.25pt'>
    <td width=355 colspan=3 valign=top style='width:266.6pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:33.25pt'>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='position:relative;z-index:251683840'><span style='left:0px;position:
    absolute;left:291px;top:-1px;width:24px;height:20px'><img width=24 height=20
    src="JAACTD-Formulario-de-Solicitud_archivos/image013.png"></span></span><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Representante Legal (<b>Institución
    Pública/Privada</b>)�� </span></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:3.3pt;line-height:normal'><b><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
    <td width=355 colspan=3 valign=top style='width:266.6pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:33.25pt'>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='position:absolute;z-index:251685888;left:0px;margin-left:281px;
    margin-top:12px;width:24px;height:20px'><img width=24 height=20
    src="JAACTD-Formulario-de-Solicitud_archivos/image014.png"></span></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Personero Legal
    Titular (<b>Organización Política</b>)</span><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'> </span></p>
    </td>
  </tr>
  <tr style='height:19.75pt'>
    <td width=355 colspan=3 valign=top style='width:266.6pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:3.15pt;line-height:normal'><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>Nombres y Apellidos:</span></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:3.3pt;line-height:normal'><b><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:3.3pt;line-height:normal'><b><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
    <td width=355 colspan=3 valign=top style='width:266.6pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Número de DNI/CE:</span></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:3.3pt;line-height:normal'><b><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
  </tr>
  <tr style='height:31.8pt'>
    <td width=237 colspan=2 valign=top style='width:177.7pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:31.8pt'>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:3.15pt;line-height:normal'><span style='font-size:9.0pt;
    font-family:"Arial",sans-serif'>Teléfono celular*:</span></p>
    </td>
    <td width=237 colspan=3 valign=top style='width:177.75pt;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:31.8pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Correo Electrónico*:</span></p>
    </td>
    <td width=237 valign=top style='width:177.75pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:31.8pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Asiento Registral*:</span></p>
    </td>
  </tr>
  <tr style='height:15.35pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.35pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Para ser llenado
    exclusivamente en el caso de Organización Política, se debe indicar los datos
    personales de los afiliados con los siguientes cargos, para el acceso
    múltiple a la casilla electrónica:</span></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
    </td>
  </tr>
  <tr style='height:15.35pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.35pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>�</span></p>
    <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
    style='border-collapse:collapse;border:none'>
    <tr style='height:8.45pt'>
      <td width=127 valign=top style='width:95.05pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:8.45pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=180 valign=top style='width:134.7pt;border:solid windowtext 1.0pt;
      border-left:none;padding:0in 5.4pt 0in 5.4pt;height:8.45pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><b><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>Tesorero*</span></b></p>
      </td>
      <td width=208 valign=top style='width:156.15pt;border:solid windowtext 1.0pt;
      border-left:none;padding:0in 5.4pt 0in 5.4pt;height:8.45pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><b><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>Representante
      Legal*</span></b></p>
      </td>
      <td width=181 valign=top style='width:136.0pt;border:solid windowtext 1.0pt;
      border-left:none;padding:0in 5.4pt 0in 5.4pt;height:8.45pt'>
      <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
      line-height:normal'><b><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>Presidente</span></b></p>
      </td>
    </tr>
    <tr style='height:12.2pt'>
      <td width=127 valign=top style='width:95.05pt;border:solid windowtext 1.0pt;
      border-top:none;padding:0in 5.4pt 0in 5.4pt;height:12.2pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>Nombres y apellidos:</span></p>
      </td>
      <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:12.2pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=208 valign=top style='width:156.15pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:12.2pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=181 valign=top style='width:136.0pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:12.2pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
    </tr>
    <tr>
      <td width=127 valign=top style='width:95.05pt;border:solid windowtext 1.0pt;
      border-top:none;padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>Número de DNI/CE:</span></p>
      </td>
      <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=208 valign=top style='width:156.15pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=181 valign=top style='width:136.0pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
    </tr>
    <tr>
      <td width=127 valign=top style='width:95.05pt;border:solid windowtext 1.0pt;
      border-top:none;padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>Teléfono celular:</span></p>
      </td>
      <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=208 valign=top style='width:156.15pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=181 valign=top style='width:136.0pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
    </tr>
    <tr style='height:12.65pt'>
      <td width=127 valign=top style='width:95.05pt;border:solid windowtext 1.0pt;
      border-top:none;padding:0in 5.4pt 0in 5.4pt;height:12.65pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>Correo electrónico:</span></p>
      </td>
      <td width=180 valign=top style='width:134.7pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:12.65pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=208 valign=top style='width:156.15pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:12.65pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=181 valign=top style='width:136.0pt;border-top:none;border-left:
      none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:12.65pt'>
      <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
    </tr>
    </table>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'></p>
    </td>
  </tr>
  <tr style='height:19.75pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border-top:none;
    border-left:solid windowtext 1.0pt;border-bottom:none;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:21.3pt;text-indent:-21.3pt;line-height:normal;text-autospace:
    none'><b><span style='font-size:1.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:21.3pt;text-indent:-21.3pt;line-height:normal;text-autospace:
    none'><b><span style='font-size:3.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:21.3pt;text-indent:-21.3pt;line-height:normal;text-autospace:
    none'><b><span style='font-size:8.5pt;font-family:"Arial",sans-serif'>NOTA:</span></b></p>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:24.4pt;text-align:justify;text-indent:-24.4pt;
    line-height:normal;text-autospace:none'><b><span style='font-size:8.0pt;
    font-family:"Arial",sans-serif'><span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>I.<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span></b><b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Si es una Institución
    Pública/Privada, la casilla electrónica es de exclusiva administración del
    Representante Legal de la misma.</span></b></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:24.4pt;text-align:justify;text-indent:-24.4pt;
    line-height:normal;text-autospace:none'><b><span style='font-size:8.0pt;
    font-family:"Arial",sans-serif'><span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
    </span>II.<span style='font:7.0pt "Times New Roman"'>&nbsp; </span></span></b><b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>Si es una Organización<span
    style='letter-spacing:.05pt'> </span>Política, la casilla electrónica es de
    exclusiva administración del Personero Legal (Titular), inscrito en el
    Registro de Organizaciones Políticas - ROP - del Jurado Nacional de
    Elecciones - JNE.</span></b></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:24.4pt;text-align:justify;line-height:normal;
    text-autospace:none'><b><span style='font-size:2.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
    margin-left:10.25pt;text-align:justify;text-indent:-10.25pt;line-height:normal;
    text-autospace:none'>
      <span lang=ES style='font-family:Wingdings;letter-spacing:
      -.05pt'>§<span style='font:7.0pt "Times New Roman"'> </span>
      </span>
  <b>
      <span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'>
    En ambos casos se deberá
    adjuntar una copia<span style='letter-spacing:-.15pt'> simple </span>del <span
    style='letter-spacing:-.15pt'>documento que acredite</span> su<span
    style='letter-spacing:-.05pt'> </span>representación (de ser el</span>
    </b>

    <b><span
    style='font-size:9.0pt;font-family:"Arial",sans-serif'> caso), <span
    style='letter-spacing:-.15pt'>la misma que tiene carácter de declaración
    jurada, y se encuentra sujeta a los principios de presunción de veracidad y
    privilegio de controles posteriores, conforme el artículo IV del Texto único Ordenado
    de la Ley del Procedimiento Administrativo General.</span> </span></b></p>
    </td>
  </tr>
  <tr style='height:42.35pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border-top:none;
    border-left:solid windowtext 1.0pt;border-bottom:none;border-right:solid windowtext 1.0pt;
    padding:0in 5.4pt 0in 5.4pt;height:42.35pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
    style='position:relative;z-index:251688960;left:-1px;top:9px;width:693px;
    height:76px'><img width=693 height=67
    src="JAACTD-Formulario-de-Solicitud_archivos/image015.png"
    alt="Me comprometo a dar acuse de recibo a la notificación del acto administrativo, dentro de los dos (02) d�as h�biles contados desde el d�a siguiente de efectuado el acto de notificaci�n v�a correo electr�nico, exclusivamente para el tr�mite de la creaci�n de casilla electr�nica. Asimismo, me someto a los t�rminos y condiciones legales establecidas en el Reglamento del SISEN ONPE. &#13;&#10;&#13;&#10;"></span><span
    style='position:absolute;z-index:251703296;margin-left:662px;margin-top:9px;
    width:32px;height:29px'><img width=32 height=29
    src="JAACTD-Formulario-de-Solicitud_archivos/image009.png"></span><span
    style='position:absolute;z-index:251689984;margin-left:1px;margin-top:7px;
    width:649px;height:37px'><img width=649 height=37
    src="JAACTD-Formulario-de-Solicitud_archivos/image016.png"
    alt="AUTORIZACI�N EXPRESA PARA RECIBIR LA NOTIFICACI�N DE COMUNICACIONES POR CORREO ELECTRONICO  (Marcar X)&#13;&#10;&#13;&#10;"></span></p>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:3.15pt;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:4.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:4.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:4.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:4.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
    style='font-size:4.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
  </tr>
  <tr style='height:84.75pt'>
    <td width=711 colspan=6 valign=top style='width:533.2pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:84.75pt'>
    <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>&nbsp;</p>
    <br clear=ALL>
    <table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 width=699
    style='width:524.5pt;border-collapse:collapse;border:none'>
    <tr style='height:16.65pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;border:none;
      border-top:solid white 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:16.65pt'>
      <p class=MsoNormal style='margin-top:0in;margin-right:-.05pt;margin-bottom:
      0in;margin-left:0in;text-align:justify;line-height:normal;text-autospace:
      none'><a name="_Hlk141086471"><b><span style='font-size:6.0pt;font-family:
      "Arial",sans-serif'>En<span style='letter-spacing:-.2pt'> </span>tal<span
      style='letter-spacing:-.2pt'> </span>sentido,<span style='letter-spacing:
      -.05pt'> </span>estoy de acuerdo con<span style='letter-spacing:.05pt'> los
      siguientes</span><span style='letter-spacing:-.1pt'> </span>Términos<span
      style='letter-spacing:-.15pt'> </span>y<span style='letter-spacing:-.1pt'> </span>Condiciones:</span></b></a></p>
      </td>
    </tr>
    <tr style='height:18.45pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:18.45pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:14.15pt;text-align:justify;text-indent:
      -14.15pt;line-height:107%'><span style='font-size:7.5pt;line-height:107%;
      font-family:"Arial",sans-serif'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El Sistema de Notificaciones Electrónicas SISEN-ONPE </span><span
      lang=ES style='font-size:6.0pt;line-height:107%;font-family:"Arial",sans-serif'>es
      un sistema informático que permite realizar la transmisión y almacenamiento
      de actos administrativos, actuaciones administrativas y otras
      comunicaciones que deban ser notificados por la ONPE hacia los usuarios del
      sistema.</span></p>
      </td>
    </tr>
    <tr style='height:18.45pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:18.45pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>Solamente se asigna una casilla electrónica por persona
      natural o persona jurídica.</span></p>
      </td>
    </tr>
    <tr style='height:18.45pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:18.45pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito toma conocimiento que, de encontrarse
      conforme la solicitud recibirá gratuitamente su código de Usuario y
      contraseña de acceso a la casilla electrónica los cuales son de carácter
      estrictamente personales.</span></p>
      </td>
    </tr>
    <tr style='height:22.0pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:22.0pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito tiene conocimiento que para acceder a su
      casilla electrónica debe contar con un dispositivo informático conectado a
      Internet y configurado para acceder a los navegadores: Mozilla Firefox,
      Google Chrome y Microsoft Edge, en sus versiones actualizadas.</span></p>
      </td>
    </tr>
    <tr style='height:16.7pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:16.7pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito se compromete a no ceder ni transferir bajo
      ninguna modalidad ni circunstancia, el uso de la contraseña de su casilla
      electrónica que la ONPE le asigne; siendo, en todo caso, único responsable
      del empleo que terceras personas pudieran darle. </span></p>
      </td>
    </tr>
    <tr style='height:25.6pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:25.6pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito acepta que constituye exclusiva
      responsabilidad de su persona, omitir (por cualquier circunstancia) y
      revisar periódicamente su casilla electrónica a fin de tomar conocimiento
      oportuno de las notificaciones electrónicas remitidas por la ONPE.</span></p>
      </td>
    </tr>
    <tr style='height:27.4pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:27.4pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito es responsable de conocer y dar
      cumplimiento a las disposiciones contenidas en el "Reglamento del Sistema
      de Notificaciones Electrónicas - SISEN-ONPE", al cual podrá acceder a
      través de la plataforma del SISEN-ONPE </span><a
      href="https://casillaelectronica.onpe.gob.pe/#/login"><span
      style='font-size:6.0pt;line-height:107%;font-family:"Arial",sans-serif'>https://casillaelectronica.onpe.gob.pe/#/login</span></a><span
      style='font-size:6.0pt;line-height:107%;font-family:"Arial",sans-serif'>.</span></p>
      </td>
    </tr>
    <tr style='height:22.1pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:22.1pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito tiene conocimiento que por cada acto de
      notificación, el SISEN-ONPE remite un mensaje de alerta informativa al
      correo electrónico y al teléfono celular registrado para tal fin, a través
      de los cuales se comunica el depósito de un acto administrativo o </span><span
      lang=ES style='font-size:6.0pt;line-height:107%;font-family:"Arial",sans-serif'>actuación
      administrativa </span><span style='font-size:6.0pt;line-height:107%;
      font-family:"Arial",sans-serif'>en la casilla electrónica, de conformidad a
      lo establecido en la norma.</span></p>
      </td>
    </tr>
    <tr style='height:41.15pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:41.15pt'>
      <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span lang=ES style='font-size:7.5pt;line-height:107%;
      font-family:"Arial",sans-serif'>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito tiene conocimiento que la acción de acceder
      al enlace contenido en el mensaje de alerta de notificación remitido a su
      correo electrónico y su teléfono celular, se constituye como acuse de
      recibo.</span></p>
      <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;line-height:107%'><span
      lang=ES style='font-size:6.0pt;line-height:107%;font-family:"Arial",sans-serif'>En
      caso de haber transcurrido el plazo de cinco (05) días hábiles siguientes a
      la notificación efectuada y no haber accedido al mensaje de notificación
      (alerta) se tendrá por válidamente notificado, surtiendo los efectos
      legales del acto depositado a partir del primer día hábil siguiente.</span></p>
      </td>
    </tr>
    <tr style='height:24.75pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:24.75pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span style='font-size:7.5pt;line-height:107%;font-family:
      "Arial",sans-serif'>10.<span style='font:7.0pt "Times New Roman"'> </span></span><span
      style='font-size:6.0pt;line-height:107%;font-family:"Arial",sans-serif'>El
      suscrito toma conocimiento que el cómputo de plazos expresados en días se
      inicia el día en que la notificación vía casilla electrónica adquiere
      eficacia, salvo que en el acto administrativo o actuación administraba
      notificada se señale una fecha posterior. </span></p>
      </td>
    </tr>
    <tr style='height:19.45pt'>
      <td width=699 colspan=2 valign=top style='width:524.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:19.45pt'>
      <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:107%'><span lang=ES style='font-size:7.5pt;line-height:107%;
      font-family:"Arial",sans-serif'>11.<span style='font:7.0pt "Times New Roman"'>
      </span></span><span style='font-size:6.0pt;line-height:107%;font-family:
      "Arial",sans-serif'>El suscrito brinda su consentimiento para el
      tratamiento de sus datos personales, según lo dispuesto por la Ley n.°
      29733, Ley de Protección de Datos Personales y su Reglamento, aprobado por
      Decreto Supremo n.° 003-2013-JUS, los cuales serán empleados para todos los
      procedimientos y servicios realizados ante y por la ONPE. </span></p>
      </td>
    </tr>
    <tr style='height:89.9pt'>
      <td width=350 valign=top style='width:262.25pt;border:none;border-right:
      solid windowtext 1.0pt;padding:0in 5.4pt 0in 5.4pt;height:89.9pt'>
      <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
      margin-bottom:0in;margin-left:11.9pt;text-align:justify;text-indent:-11.9pt;
      line-height:normal;text-autospace:none'><span style='font-size:7.5pt;
      font-family:"Arial",sans-serif'>12.<span style='font:7.0pt "Times New Roman"'>
      </span></span><span style='font-size:6.0pt;font-family:"Arial",sans-serif'> El
      Usuario deberá adjuntar a la solicitud una fotografía nítida mostrando el
      original de su DNI o CE, </span><span style='font-size:6.0pt;font-family:
      "Arial",sans-serif'>debiendo sostenerlo al costado de su rostro, procurando
      que se aprecien sus datos</span><span style='font-size:6.0pt;font-family:
      "Arial",sans-serif'> (ver imagen), <u>impresa</u> (si la solicitud es
      presentada mediante Mesa de Partes Física) o en <u>formato JPG/PDF</u> (si
      la solicitud es presentada mediante Mesa de Partes Virtual Externa). </span></p>
      <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:
      0in;margin-bottom:0in;margin-left:11.9pt;text-align:justify;line-height:
      normal;text-autospace:none'><span style='font-size:6.0pt;font-family:"Arial",sans-serif'>Dicha
      fotografía es solo para fines de verificación y deberá contar con las
      siguientes especificaciones:</span></p>
      <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:
      0in;margin-bottom:0in;margin-left:11.9pt;text-align:justify;line-height:
      normal;text-autospace:none'><span style='font-size:6.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:
      0in;margin-bottom:0in;margin-left:11.9pt;text-align:justify;line-height:
      normal;text-autospace:none'><span style='font-size:6.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      </td>
      <td width=350 valign=top style='width:262.25pt;border:solid windowtext 1.0pt;
      border-left:none;padding:0in 5.4pt 0in 5.4pt;height:89.9pt'>
      <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
      margin-bottom:8.0pt;margin-left:15.85pt;text-align:justify;line-height:
      107%'><span style='position:absolute;z-index:-1895760896;left:0px;
      margin-left:2px;margin-top:15px;width:93px;height:90px'><img width=93
      height=90 src="JAACTD-Formulario-de-Solicitud_archivos/image017.jpg"></span><span
      style='position:absolute;z-index:251723776;left:0px;margin-left:93px;
      margin-top:3px;width:223px;height:115px'><img width=223 height=115
      src="JAACTD-Formulario-de-Solicitud_archivos/image018.png"
      alt="- La foto se debe tomar de frente, sin lentes, con el rostro descubierto, y de preferencia debe tener fondo claro.&#13;&#10;- La foto no debe tener retoques.&#13;&#10;- La foto debe ser n�tida sin sombras.&#13;&#10;- La foto no debe contener im�genes con fines electorales (ejemplo: polo con el n�mero del candidato, nombre de la Organizaci�n Pol�tica, etc.)&#13;&#10;"></span></p>
      </td>
    </tr>
    </table>
    <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:15.9pt;text-align:justify;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>�������������������������������
    </span></b></p>
    <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
    margin-bottom:0in;margin-left:15.9pt;text-align:justify;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 align=left
    style='border-collapse:collapse;border:none;margin-left:4.8pt;margin-right:
    4.8pt'>
    <tr style='height:20.95pt'>
      <td width=239 valign=top style='width:179.1pt;padding:0in 5.4pt 0in 5.4pt;
      height:20.95pt'>
      <p class=MsoListParagraphCxSpMiddle style='margin:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></p>
      <p class=MsoListParagraphCxSpLast style='margin:0in;line-height:normal'><span
      style='font-size:9.0pt;font-family:"Arial",sans-serif'>Fecha: �______ /
      ______ / ______</span></p>
      </td>
    </tr>
    </table>
    <table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 align=left
    style='border-collapse:collapse;border:none;margin-left:4.8pt;margin-right:
    4.8pt'>
    <tr style='height:12.75pt'>
      <td width=257 valign=top style='width:192.5pt;border:none;border-top:solid windowtext 1.0pt;
      padding:0in 5.4pt 0in 5.4pt;height:12.75pt'>
      <p class=MsoListParagraph align=center style='margin:0in;text-align:center;
      line-height:normal'><b><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>FIRMA
      DEL USUARIO</span></b></p>
      </td>
    </tr>
    <tr style='height:12.75pt'>
      <td width=257 valign=top style='width:192.5pt;padding:0in 5.4pt 0in 5.4pt;
      height:12.75pt'>
      <p class=MsoListParagraph align=center style='margin:0in;text-align:center;
      line-height:normal'><span style='font-size:9.0pt;font-family:"Arial",sans-serif'>(Solicitante)</span></p>
      </td>
    </tr>
    </table>
    <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;margin-bottom:
    0in;margin-left:15.9pt;text-align:justify;line-height:normal'><b><span
    style='font-size:8.0pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    <p class=MsoNormal style='margin-bottom:0in;text-align:justify;line-height:
    normal'><b><span style='font-size:7.5pt;font-family:"Arial",sans-serif'>&nbsp;</span></b></p>
    </td>
  </tr>
  <tr height=0>
    <td width=209 style='border:none'></td>
    <td width=36 style='border:none'></td>
    <td width=121 style='border:none'></td>
    <td width=47 style='border:none'></td>
    <td width=70 style='border:none'></td>
    <td width=232 style='border:none'></td>
  </tr>
  </table>

  <p class=MsoNormal><span style='font-size:10.0pt;line-height:115%;font-family:
  "Arial",sans-serif'>&nbsp;</span></p>

</div>

  `;

  getHello(): string {
    return 'Hello vdsfds Worls fromd NESTs!';
  }

  async generatePdf(): Promise<Buffer>{
    console.log('Generating PDF ...');
    
    const browser = await puppeteer.launch({
      headless: "new",
      defaultViewport: {
        //width: 842, 
        //height: 595,
        width: 1000, 
        height: 2500,
        //deviceScaleFactor: 1,
        //isMobile: true, 
        hasTouch: false, 
        isLandscape: false
      }
    });
    const page = await browser.newPage();
    //await page.setContent('<h1>Demo PDF</h1>')
    const content = await this.compile('JAACTD-Formulario-de-Solicitud', this.data)
    //const content = await this.compile('solicitud-asignacion-casilla-electronica', this.data)
    //await page.setContent('<h1>Demo PDF</h1>');
    await page.setContent(this.contenido);
    
    await page.emulateMediaType("screen");
    
    const pdf = await page.pdf({
      format: "A4",
      // verificar si el archivo pdf existe sino arrojará un error
      path: 'mydemo9.pdf',
      landscape: true, // default false
      printBackground: true, 
      preferCSSPageSize: true,
      scale: 1.18, // 1.2
      //margin: {
        //left: "0.5cm",
        //top: "2cm",
        //right: "0.5cm",
        //bottom: "2cm"
      //},
      margin: {
        left: "5",
        top: "5",
        right: "0.0cm",
        bottom: "0cm"
      }
      //displayHeaderFooter: true,
      // no admite rutas de imagenes, se le pasa mediante base64
      //headerTemplate: `<div style="font-size:30px">This is a header</div>`,
      //footerTemplate: `<div style="font-size:30px">This is a fooder</div>`
    }); 
    
    await browser.close();
    console.log('Generated PDF');
    return pdf;
  }

  async compile(templateName:string, data:any){
    const filePath = path.join(process.cwd(), 'templates/pdf',  `${templateName}.hbs`);
    const html = await fs.readFile(filePath, 'utf-8');
    return Handlebars.compile(html)(data)
  }
/*
  async generatePdfAndSearch(): Promise<Buffer>{

    Handlebars.registerHelper('dateFormat', function(value, format){
      return moment(value).format(format);
    });


    const browser = await puppeteer.launch({
      headless: "new",
      defaultViewport: {
        width: 750, 
        height: 500,
        deviceScaleFactor: 1,
        isMobile: true, 
        hasTouch: false, 
        isLandscape: false
      }
    });
    const page = await browser.newPage();
    await page.goto("https://www.google.com", {
      waitUntil: "networkidle0"
    }); 

    await page.emulateMediaType("screen"); 
    
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true, 
      margin: {
        left: "0.5cm",
        top: "2cm",
        right: "0.5cm",
        bottom: "2cm"
      },
      displayHeaderFooter: true,
      // no admite rutas de imagenes, se le pasa mediante base64
      headerTemplate: '<p style="font-size. 30px">This is a header</p>',
      footerTemplate: '<p>This is a fooder</p>'
    }); 

    await browser.close();
    return pdf;
  }*/

}
