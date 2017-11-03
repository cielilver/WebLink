var ret;
var FunctionName;
var FeatureID;
var value = ' ';
var temp = [];	
//Parameter Type: PWL_MODEL, PWL_FEATURE
var ItemType = document.pwl.eval("PWL_MODEL");
	if (parseInt(ItemType) === parseInt(document.pwlc.PWL_MODEL)) {
		FeatureID = -1;
		ret = document.pwl.pwlMdlParametersGet(layoutModelNameExt);
		FunctionName = "pwlMdlParametersGet";
	}	
function test(){


var p ={  1 : 'HV_FC_1', 
		  2 : 'HV_F_1_S', 
		  3 : 'HV_FLANGE_1_XP',
		  4 : 'HV_FLANGE_1_DIS', 
		  5 : 'HV_FLANGE_1_X', 
		  6 : 'HV_FLANGE_1_Y', 
		  7 : 'HV_FLANGE_1_H',
		  8 : 'HV_CAS_SW', 
		  9 : 'HV_CAS_H',
		  10 : 'HV_CAS_B', 
		  11 : 'HV_CAS_BH',
		  12 : 'HV_CAS_BD'}; 
	
for (i=0 ; i<12 ; i++){
	temp[i] = Gap(p[i+1]);
	alert(temp[i]);
}	
	
	
	
}

function Gap (pname){


	if (!ret.Status) {
		alert(FunctionName + " failed (" + ret.ErrorCode + ")");
		return;
	}
	var parameter = {HV_FC_1 : '公稱直徑',
					 HV_F_1_S : '法蘭種類',
					 HV_FLANGE_1_XP : '法蘭位置',
					 HV_FLANGE_1_DIS : '法蘭距離X',
					 HV_FLANGE_1_X : 'HV套管間距',
					 HV_FLANGE_1_Y : '法蘭距離Y',
					 HV_FLANGE_1_H : '法蘭高度',
					 HV_CAS_SW : '套管箱開關',
					 HV_CAS_H : '套管箱高度',
					 HV_CAS_B : 'BCT型式',
					 HV_CAS_BH : 'BCT高度',
					 HV_CAS_BD : 'BCT深度'};
					 		 
				 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),FeatureID, pname);
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	//alert(value);
	//I1.document.writeln(parameter[pname]+'\t'+value);				
	return value.toString();  //value = val_ret.ParamDoubleVal 回傳述值非字串 需轉換
}


function openPdf(){
	

pdfMake.fonts={
				msyh: {    
						normal: 'chinese.msyh.ttf',
						bold: 'chinese.msyh.ttf',
						italics: 'chinese.msyh.ttf',
						bolditalics: 'chinese.msyh.ttf'
				}
}

var docDefinition = {
	content: [
		{	
			/*
			alignment: 'justify',//左右對齊
			columns: [
				{	width: 'auto',
					table:{
						width:['auto','auto','auto'],
						body:[
							[{ text: '名稱', style: 'tableHeader', alignment: 'center' }, { text: '參數設計項目', style: 'tableHeader', alignment: 'center',colSpan:2 },{}],
							[{ text: '\n\n\nHV側法蘭', style: 'tableHeader', alignment: 'center',rowSpan:7 }, { text: '公稱直徑', style: 'tableHeader', alignment: 'center' }, { text: Gap('HV_FC_1'), style: 'tableHeader', alignment: 'center' }],
							[{}, { text: '法蘭種類', style: 'tableHeader', alignment: 'center' }, { text: Gap('HV_F_1_S') , style: 'tableHeader', alignment: 'center' }],
							[{}, { text: '法蘭位置', style: 'tableHeader', alignment: 'center' }, { text: Gap('HV_FLANGE_1_XP'), style: 'tableHeader', alignment: 'center' }],
							[{}, { text: '法蘭距離X', style: 'tableHeader', alignment: 'center' }, { text: Gap('HV_FLANGE_1_DIS'), style: 'tableHeader', alignment: 'center' }],
							[{}, { text: 'HV套管間距', style: 'tableHeader', alignment: 'center' }, { text: Gap('HV_FLANGE_1_X'), style: 'tableHeader', alignment: 'center' }],
							[{}, { text: '法蘭距離Y', style: 'tableHeader', alignment: 'center' }, { text: Gap('HV_FLANGE_1_Y'), style: 'tableHeader', alignment: 'center' }],
							[{}, { text: '法蘭高度', style: 'tableHeader', alignment: 'center' }, { text: Gap('HV_FLANGE_1_H'), style: 'tableHeader', alignment: 'center' }]
										
						]
						
					},
					//layout: 'noBorders'				
				},
				{	width: 'auto',
					table:{
							width:['auto','auto'],
							body:[
								[{ text: '套管安全距離確認', style: 'tableHeader', alignment: 'center',colSpan:2 },{}],
								[{ text: '標準:', style: 'tableHeader', alignment: 'center'}, { text: document.getElementById('BIL_STANDARD').value, style: 'tableHeader', alignment: 'center' }],
								[{ text: 'BIL等級:', style: 'tableHeader', alignment: 'center'}, { text: document.getElementById('IEC_BIL').value, style: 'tableHeader', alignment: 'center' }],
								[{ text: 'BCT外徑:', style: 'tableHeader', alignment: 'center'}, { text: document.getElementById('BCT_D').value, style: 'tableHeader', alignment: 'center' }]
		
							]
							
						},
						//layout: 'noBorders'
				}
			]
			*/	
		},
		{text: document.getElementById('data').value, style: 'tableHeader', alignment: 'left'}

	],

	styles :{
		header:{
			fontSize: 30,
			color:'red'
		}
	},
	  // a string or { width: number, height: number }
  defaultStyle: {
		font: 'msyh',
		columnGap: 40
	},
  pageSize: 'A4',

  // by default we use portrait, you can change it to landscape if you wish
  pageOrientation: 'portrait',

  // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
  //pageMargins: [ 40, 60, 40, 60 ],
  
};
 //pdfMake.createPdf(docDefinition).open();
 pdfMake.createPdf(docDefinition).download('test.pdf');

 /*
 var myObject, f;
 myObject = new ActiveXObject("Scripting.FileSystemObject");
 f =   myObject.GetFile(pdfMake.createPdf(docDefinition));
 f.Move("D://");
*/
 

}




function image(tt){
var base64;
function encodeImage(src, callback) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        img = new Image();
    
      img.onload = function(){
        canvas.width  = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        callback(canvas.toDataURL());
      }
      img.src = src;;
}
function a(callback){
	encodeImage(tt, function(encodedImage) { 
    document.getElementById('data').value = encodedImage;
    var oImg=document.createElement("img");
    oImg.setAttribute('src', encodedImage);
    //document.body.appendChild(oImg);
	base64 = encodedImage;
	//console.log(base64);
	callback();
	
});
}


function b(){
	alert(base64);
	var f = document.createElement("a");
    f.setAttribute('href', base64);
	f.text = base64;
	document.body.appendChild(f);
}

a(b);
}

function tt(){
	if(document.getElementById('HV_FLANGE_1_DIS').value < 1500){
		document.getElementById('data').value = document.getElementById('data').value +document.getElementById('HV_FLANGE_1_DIS').value+'\n';
	}
	
	
}