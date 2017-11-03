//初始相關物件

//工作目錄
var ptcWorkPath = "C:\\Users\\temp\\Desktop\\demo\\tr_model";

//layout名稱
var layoutModelNameExt = "new_transformer.lay";
//asm名稱
var asmModelNameExt= "tr.asm";


try {
	if(isProEEmbeddedBrowser()) {
		//alert("1");
		wpwl = pfcGetScript();
		//alert("2");
		document.pwl = wpwl;
		//alert("3");
		wpwlc = wpwl.GetPWLConstants();
		//alert("4");
		document.pwlc = wpwlc;
		//alert("5");
		wpwlf = wpwl.GetPWLFeatureConstants();
		document.pwlf = wpwlf;
		//alert("6");
		
	}
} catch (err) {
	alert("Exception caught: 1" + pfcGetExceptionType(err));
}

function rege(){           //再生功能   組態設定 regen_failure_handling  設為resolve_mode才能作用
	var asmModelNameExt= "tr.asm";


	document.pwl.pwlMdlRegenerate(asmModelNameExt);	  

	
	TRParametersLanuch();
	
}

function draw1(){          
	var drawname= "tr_cover.drw";
	//var path = "C:/Users/jack.you/Google 雲端硬碟/公司資料/FE/weblink/模組化20160831"
	
	//var path = "C:\Users\jack.you\Google 雲端硬碟\公司資料\FE\weblink\模組化20160831"    //can't work
	
	var session = pfcGetProESession();
	var getpath = session.getCurrentDirectory();   //取得工作目錄  需要先設定工作目錄 否則抓不到
	
	
	path = (getpath).replace('/\\/g','/');          //  replace('','') 只會替換第一個   replace('/  /g','') 替換所有       \\跳脫字元→\
	
	document.pwl.pwlMdlOpen(drawname,path,true);      //
	
}
function draw2(){          
	var drawname= "tank.drw";
	//var path = "C:/Users/jack.you/Google 雲端硬碟/公司資料/FE/weblink/模組化20160831"
	
	//var path = "C:\Users\jack.you\Google 雲端硬碟\公司資料\FE\weblink\模組化20160831"    //can't work
	
	var session = pfcGetProESession();
	var getpath = session.getCurrentDirectory();   //取得工作目錄  需要先設定工作目錄 否則抓不到
	
	
	path = (getpath).replace('/\\/g','/');          //  replace('','') 只會替換第一個   replace('/  /g','') 替換所有       \\跳脫字元→\//
	alert(path);
	//document.pwl.pwlMdlOpen(drawname,path,true);      //
	
}
//讀取模型        工作目錄位置/指定位置
function test(){          
	
	var drawname= "tr.asm";
	
	var session = pfcGetProESession();
	var getpath = session.getCurrentDirectory();   //取得工作目錄  需要先設定工作目錄 否則抓不到
	//var path = "C:\\Users\\jack.you\\Google 雲端硬碟\\公司資料\\FE\\WebLink\\模組化標準型20160831\\";    //    \→\\跳脫字元
	var path1 = "C:/Users/jack.you/Google 雲端硬碟/公司資料/FE/WebLink/模組化標準型20160831/";
	//path1 = (path).replace('/\\/g','/');          //  replace('','') 只會替換第一個   replace('/  /g','') 替換所有       \\跳脫字元→\//
	var win = document.pwl.pwlMdlOpen(drawname,path1,true);      // pwlMdlOpen回傳目前Creo視窗ID值 = -1
	document.pwl.pwlWindowActivate(parseInt(win.windowID));
	
	
}
//拭除指定模型
function test1(){          
	
	var drawname= "tr.asm";
	var win = document.pwl.pwlWindowActiveGet();      //定義目前啟動視窗變數
	document.pwl.pwlWindowClose(parseInt(win.windowID));
	var win = document.pwl.pwlMdlErase(drawname);      
	
	
	
}
function test2(){          
	
	var ModelType = [5];
	alert(parseInt("PWL_ASSEMBLY"))
	for (i = 0 ; i < 1 ; i ++)
		{
		var Typelist = document.pwl.pwlSessionMdlsGet(PWL_ASSEMBLY);
		for(j = 0 ; j < Typelist.NumMdls ; j++)
			{
			alert(Typelist.MdlNameExt.Item(j));
			}	
		}
	

}

function TRParametersSet2() {
	//"pwlParameterValueSet"
	// 取得表單名稱為form1的表單集合
	var oform = document.forms["tankForm"];  //需與網頁form name相同
 
	
	var ret;
	var FunctionName;
	var FeatureID;
	
	//Parameter Type: PWL_MODEL, PWL_FEATURE
	var ItemType = document.pwl.eval("PWL_MODEL");
	if (parseInt(ItemType) === parseInt(document.pwlc.PWL_MODEL)) {
		FeatureID = -1;
		ret = document.pwl.pwlMdlParametersGet(layoutModelNameExt);
		FunctionName = "pwlMdlParametersGet";
	}
	if (!ret.Status) {
		alert(FunctionName + " failed (" + ret.ErrorCode + ")");
		return;
	}
	
	for (var i = 0; i < ret.NumParams; i++) {
		var objParameterName = ret.ParamNames.Item(i);

		
		
		//以元素ID存取值
		var obj = oform.elements[objParameterName];
		
		if(typeof obj == 'undefined' || obj == null){
			//若input物件不存在, 直接到下一個迴圈, 處理下一個變數
			continue;
		}
		
		var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
				FeatureID, objParameterName);
		if (!val_ret.Status) {
			alert("pwlParameterValueGet failed (" + val_ret.ErrorCode + ")" + objParameterName);
			return;
		}
		
		var answer = "Undefined";
		if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {
			answer = val_ret.ParamDoubleVal;
		} else if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_STRING)) {
			answer = val_ret.ParamStringVal;
		} else if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_INTEGER)) {
			answer = val_ret.ParamIntVal;
		} else if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_BOOLEAN)) {
			answer = (val_ret.ParamBooleanVal) ? "true" : "false";
		}
		
		var objParameterValue = answer;		
		oform.elements[objParameterName].value = answer;
	}	
}

function TRParametersSave() {
	//"pwlParameterValueSet"
	// 取得表單名稱為form1的表單集合
	var oform = document.forms["tankForm"]; 
	
	// 表單和欄位都沒有指定name或id屬性，
	// 可使用forms與elements的index位置存取欄位
	
	//都是實數flot, ValueType: PWL_VALUE_BOOLEAN, PWL_VALUE_DOUBLE, PWL_VALUE_INTEGER, PWL_VALUE_STRING
	var ValueType = document.pwl.eval("PWL_VALUE_DOUBLE");
	
	var lengthCount = oform.elements.length;
	//alert(lengthCount);
	//Parameter Type: PWL_MODEL, PWL_FEATURE
	var ItemType = document.pwl.eval("PWL_MODEL");
	var featureID;
	if (ItemType === document.pwlc.PWL_MODEL) {
		featureID = -1;
	} else {
		//若ItemType是PWL_FEATURE, 則featureID為輸入的【featureID】整數
		//featureID = parseInt(document.set_value.FeatureID.value);
	}
	var IntValue;
	var StringValue;
	var BoolValue;
	

	
	for(var idx = 0; idx < lengthCount; idx++) {
		var obj1 = oform.elements[idx];
		if (obj1.type == "text") {
			//輸入為text類型
			var objParameterName = obj1.name;
			var objParameterValue = obj1.value;
			
			//都是實數flot	
			var FloatValue = parseFloat(objParameterValue);
			if (isNaN(FloatValue)) {
				FloatValue = 0.0;
			}
			var ret = document.pwl.pwlParameterValueSet(
					layoutModelNameExt, ItemType, featureID,
					objParameterName, ValueType, IntValue,
					FloatValue, StringValue, BoolValue);
			if (!ret.Status) {
				alert("pwlParameterValueSet failed (" + ret.ErrorCode + "):" + objParameterName);
				return;
			}
		}

	}
	//防呆  數值定義  格式為tankForm.name.value
	/*
	{
	var a=tankForm.HV_FLANGE_3_X.value;
	var b=tankForm.HV_FLANGE_3_Y.value;
	
	var c=tankForm.HV_CGT_1_X.value;
	var d=tankForm.HV_CGT_1_Y.value;
	
	var e=tankForm.LV_MH_1_X.value;
	var f=tankForm.LV_MH_1_Y.value;
	
	var g=tankForm.LV_BCT_2_X.value;
	var h=tankForm.LV_BCT_2_Y.value;
	
	var i=tankForm.COVER_T.value;
	
	var j=a-c
	//防呆範圍限制
	//
	
	if(a>2010){alert('Error!HV側法蘭套管箱 x 過長');
		}
		if(a<0){alert('Error!HV側法蘭套管箱 x 過短');
		}
	
	if(b>849){alert('Error!HV側法蘭套管箱 y 過長');
		}
		if(b<0){alert('Error!HV側法蘭套管箱 y 過短');
		}
	//
	
	if(c>3125){alert('Error!HV側鐵心接地箱 x 過長');
		}
		if(c<0){alert('Error!HV側鐵心接地箱 x 過短');
		}
	if(d>325){alert('Error!HV側鐵心接地箱 y 過長');
		}
		if(d<0){alert('Error!HV側鐵心接地箱 y 過短');
		}
	//
	if(e>3040){alert('Error!LV人手孔方向&距離 x 過長');
		}
		if(e<0){alert('Error!LV人手孔方向&距離 x 過短');
		}
	if(f>880){alert('Error!LV人手孔方向&距離 y 過長');
		}
		if(f<0){alert('Error!LV人手孔方向&距離 y 過短');
		}
	//
	if(g>2000){alert('Error!LV側BCT端子箱超出上蓋邊界');
		}
		if(g<0){alert('Error!LV側BCT端子箱 x 過短');
		}
	if(h>990){alert('Error!LV側BCT端子箱 y 過長');
		}
		if(h<0){alert('Error!LV側BCT端子箱 y 過短');
		}
	//
	

	if(i<3){alert('Error!\n上蓋厚度過薄\n依過去經驗\n抽真空時強度會不足\請重新設定');
		}

	//

	

	//if(j<=100){alert('Error!\nHV側法蘭套管箱與HV側鐵心接地箱水平方向干涉');
	//	}

	//
		
	}
	/*
	/*
		{	 
			var x=6*tankForm.GAP.value;
			var y=tankForm.HEIGHT.value;
			if( x >= y ){ 
				alert('nogo');
				}else{
				alert('go');
				}
		}
	*/
	
}



function TRParametersLanuch() {
  var ret = document.pwl.pwlMdlOpen(asmModelNameExt, ptcWorkPath, true);
  if (!ret.Status) {
      if (ret.ErrorCode == -4 && document.main.ModelPath.value == "")
    	  return ;
      else {
    	  alert("pwlMdlOpen failed (" + ret.ErrorCode + ")");
    	  return ;
    }
  }
}

function WlParametersGet()
//Get the parameter list from the model or feature.
{
	var ret;
	var FunctionName;
	var ItemType;
	var FeatureID;
	if (document.list_parm.ModelNameExt.value == "") {
		return;
	}
	ItemType = document.pwl
			.eval(document.list_parm.ParmType.options[document.list_parm.ParmType.selectedIndex].value);
	if (parseInt(ItemType) == parseInt(document.pwlc.PWL_FEATURE)) {
		if (document.list_parm.FeatureID.value == "") {
			return;
		}
		FeatureID = parseInt(document.list_parm.FeatureID.value);
		if (isNaN(FeatureID)) {
			alert("Invalid feature ID!");
			return;
		}
		ret = document.pwl.pwlFeatureParametersGet(
				document.list_parm.ModelNameExt.value,
				parseInt(document.list_parm.FeatureID.value));
		FunctionName = "pwlFeatureParametersGet";
	} else {
		FeatureID = -1;
		ret = document.pwl
				.pwlMdlParametersGet(document.list_parm.ModelNameExt.value);
		FunctionName = "pwlMdlParametersGet";
	}
	if (!ret.Status) {
		alert(FunctionName + " failed (" + ret.ErrorCode + ")");
		return;
	}
	document.list_parm.Parameters.value = "";
	for (var i = 0; i < ret.NumParams; i++) {
		var val_ret = document.pwl.pwlParameterValueGet(
				document.list_parm.ModelNameExt.value, parseInt(ItemType),
				FeatureID, ret.ParamNames.Item(i));
		if (!val_ret.Status) {
			alert("pwlParameterValueGet failed (" + val_ret.ErrorCode + ")");
			return;
		}
		var answer = "Undefined";
		if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {
			answer = val_ret.ParamDoubleVal;
		} else if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_STRING)) {
			answer = val_ret.ParamStringVal;
		} else if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_INTEGER)) {
			answer = val_ret.ParamIntVal;
		} else if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_BOOLEAN)) {
			answer = (val_ret.ParamBooleanVal) ? "true" : "false";
		}
		document.list_parm.Parameters.value += ret.ParamNames.Item(i) + ": "
				+ answer + "\n";
	}
}

function WlParameterSetValue(FunctionName)
// Set a parameter or create a new parameter, depending on the function
// name.
{
	var ItemType;
	var StringValue = document.set_value.Value.value;
	var FloatValue = parseFloat(document.set_value.Value.value);
	var IntValue = parseInt(document.set_value.Value.value);
	var BoolValue = (document.set_value.Value.value.toLowerCase() == "true") ? true
			: false;
	var ValueType = document.pwl
			.eval(document.set_value.ValueType.options[document.set_value.ValueType.selectedIndex].value);
	// In order to create usable trail file FloatValue cannot be NaN
	if (isNaN(FloatValue)) {
		FloatValue = 1.1;
	}
	if (isNaN(IntValue)) {
		IntValue = -5;
	}
	ItemType = document.pwl
			.eval(document.set_value.ParmType.options[document.set_value.ParmType.selectedIndex].value);
	if (ItemType == document.pwlc.PWL_MODEL)
		featureID = -1;
	else
		featureID = parseInt(document.set_value.FeatureID.value);
	if (FunctionName == "pwlParameterCreate") {
		var ret = document.pwl.pwlParameterCreate(
				document.set_value.ModelNameExt.value, ItemType, featureID,
				document.set_value.Parameter.value, ValueType, IntValue,
				FloatValue, StringValue, BoolValue);
	} else { //pwlParameterValueSet
		var ret = document.pwl.pwlParameterValueSet(
				document.set_value.ModelNameExt.value, ItemType, featureID,
				document.set_value.Parameter.value, ValueType, IntValue,
				FloatValue, StringValue, BoolValue);
	}
	if (!ret.Status) {
		alert(FunctionName + " failed (" + ret.ErrorCode + ")");
		return;
	}
}