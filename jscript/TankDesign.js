/*-----------------------------------------------------------------------------*/
//初始相關物件

//工作目錄
var ptcWorkPath = "C:\\Users\\temp\\Desktop\\demo\\tr_model";   //變動不影響

//layout名稱
var layoutModelNameExt = "tr.lay";     //需與layout名稱一致
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
/*---------------------------------------------------------------------------*/
function rege(){           //再生功能   組態設定 regen_failure_handling  設為resolve_mode才能作用
	var asmModelNameExt= "tr.asm";


	document.pwl.pwlMdlRegenerate(asmModelNameExt);	  

	
	TRParametersLanuch();
	
}


function draw1(){          
	var drawname= "tr_cover.drw";
	//var path = "C:/Users/jack.you/Google 雲端硬碟/公司資料/FE/weblink/模組化20160321"
	
	//var path = "C:\Users\jack.you\Google 雲端硬碟\公司資料\FE\weblink\模組化20160321"    //can't work
	
	var session = pfcGetProESession();
	var getpath = session.getCurrentDirectory();   //取得工作目錄  需要先設定工作目錄 否則抓不到
	
	
	path = (getpath).replace('/\\/g','/');          //  replace('','') 只會替換第一個   replace('/  /g','') 替換所有       \\跳脫字元→\//
	alert(path);
	document.pwl.pwlMdlOpen(drawname,path,true);      //
	
}
function draw2(){          
	var drawname= "tank.drw";
	//var path = "C:/Users/jack.you/Google 雲端硬碟/公司資料/FE/weblink/模組化20160321"
	
	//var path = "C:\Users\jack.you\Google 雲端硬碟\公司資料\FE\weblink\模組化20160321"    //can't work
	
	var session = pfcGetProESession();
	var getpath = session.getCurrentDirectory();   //取得工作目錄  需要先設定工作目錄 否則抓不到
	
	
	path = (getpath).replace('/\\/g','/');          //  replace('','') 只會替換第一個   replace('/  /g','') 替換所有       \\跳脫字元→\
	
	document.pwl.pwlMdlOpen(drawname,path,true);      //
	
}

var temp1_name = [];
var temp1_value = [];
var temp2_name = [];
var temp2_value = [];
var drw_temp1_name = [];
var drw_temp1_value = [];
var drw_temp2_name = [];
var drw_temp2_value = [];
//var drw =['DRW_WORK_NO','DRW_CO_NO','DRW_NAME','DRW_NO','DRW_WORK_NO2','DRW_CO_NO2','DRW_NAME2','DRW_NO2'];

var f = 0;
function TRParametersSet() {
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
	//擷取layout中所有參數，存於ret物件
		ret = document.pwl.pwlMdlParametersGet(layoutModelNameExt);
		FunctionName = "pwlMdlParametersGet";
	}
	if (!ret.Status) {
		alert(FunctionName + " failed (" + ret.ErrorCode + ")");
		return;
	}
	
	
	for (var i = 0; i < ret.NumParams; i++) {
		//將ret中存放之第i個參數名稱存於objParameterName
		var objParameterName = ret.ParamNames.Item(i);

		
		
		//以元素ID存取值
		var obj = oform.elements[objParameterName];
		
		if(typeof obj == 'undefined' || obj == null){
			//若input物件不存在, 直接到下一個迴圈, 處理下一個變數
			continue;
		}
		
		//以objParameterName擷取該參數數值存於val_ret物件中
		var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
				FeatureID, objParameterName);
		if (!val_ret.Status) {
			alert("pwlParameterValueGet failed (" + val_ret.ErrorCode + ")" + objParameterName);
			return;
		}
		//比對該參數存放數值型態為何，creo參數通常為實數->  answer = val_ret.ParamDoubleVal;  將數值存於answer中
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
		//將creo參數值寫入html欄位中
		oform.elements[objParameterName].value = answer;
		
		
		
		
		/*參數寫入速度優化部分*/
		//讀取第一次數值至暫存器1//
		temp1_name.push(objParameterName);
		temp1_value.push(answer);
		
		drw_temp1_name.push(objParameterName);
		drw_temp1_value.push(answer);
		
		
	}
		//alert(drw_temp1_name[7]);
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
	
	

	
	/*
	
	for(var idx = 0; idx < lengthCount; idx++) {
		var obj1 = oform.elements[idx];

			//輸入為text類型
			var objParameterName = obj1.name;
			var objParameterValue = obj1.value;

			
			//都是實數flot	
			var FloatValue = parseFloat(objParameterValue);
			if (isNaN(FloatValue)) {
				FloatValue = 0.0;
			}
			
						
			temp2_name[idx] = obj1.name;
			temp2_value[idx] = obj1.value;
		
			
			
			
			var ret = document.pwl.pwlParameterValueSet(
					layoutModelNameExt, ItemType, featureID,
					objParameterName, ValueType, IntValue,
					FloatValue, StringValue, BoolValue);

			if (!ret.Status) {
				//alert("pwlParameterValueSet failed (" + ret.ErrorCode + "):" + objParameterName);   //BCT警告關閉
				return;
			}
			


	}
	*/
	
	/*參數寫入速度優化部分*/
	//把暫存器1數值搬至暫存器2//
	for(i = 0 ; i < temp1_name.length ; i++){
		temp2_name[i] = temp1_name[i];
		temp2_value[i] = temp1_value[i];
		
	}
	
	for(i = 0 ; i < drw_temp1_name.length ; i++){
		drw_temp2_name[i] = drw_temp1_name[i];
		drw_temp2_value[i] = drw_temp1_value[i];
		
	}	
	

	
	//把修改後數值搬至暫存器1//
	for(var idx = 0; idx < lengthCount; idx++) {
		var obj1 = oform.elements[idx];

			//輸入為text類型
			var objParameterName = obj1.name;
			var objParameterValue = obj1.value;
	
			//都是實數flot	
			
			var FloatValue = parseFloat(objParameterValue);
			//alert(objParameterValue);
			if (isNaN(FloatValue)) {
				FloatValue = 0.0;
			}
						
			temp1_name[idx] = obj1.name;
			temp1_value[idx] = FloatValue;
			
			drw_temp1_name[idx] = obj1.name;
			drw_temp1_value[idx] = obj1.value;
	}	
	//參數數值(實數部分)//
	//比對暫存器1數值與2是否有修改，有修改部分才進行寫入動作否則則進行下一數值比對//
	for(i = 0; i < lengthCount; i++) {
		for(j = 0; j < temp1_name.length; j++){
			if(temp1_name[i] == temp2_name[j]){
				if(temp1_value[i] == temp2_value[j]) {
					continue;
				}
				else{
					//寫入有修改之參數值
					var ret = document.pwl.pwlParameterValueSet(
					layoutModelNameExt, ItemType, featureID,
					temp1_name[i], ValueType, IntValue,
					temp1_value[i], StringValue, BoolValue);	
				
				}
			}
			else{
				continue;
			}
		}
	}
	//工程圖參數數值(字串部分)//
					/*寫入工號  工號為字串與參數為實數不同暫時不可混合寫入 
					
					var ret = document.pwl.pwlParameterValueSet(
					layoutModelNameExt, ItemType, featureID,
					objParameterName, ValueType, IntValue,
					FloatValue, StringValue, BoolValue);					
					
					objParameterName = "TEST" //Weblink頁面 工號text欄位 ID
					ValueType = document.pwl.eval("PWL_VALUE_STRING") //改為String
					StringValue=document.getElementById("TEST").value //Weblink頁面欄位值
					*/

					
	for(i = 0; i < lengthCount; i++) {
		for(j = 0; j < drw_temp1_name.length; j++){
			if(drw_temp1_name[i] == drw_temp2_name[j]){
				if(drw_temp1_value[i] == drw_temp2_value[j]) {
					continue;
				}
				else{
					//寫入有修改之參數值
					var ret = document.pwl.pwlParameterValueSet(
					layoutModelNameExt, ItemType, featureID,
					drw_temp1_name[i], document.pwl.eval("PWL_VALUE_STRING"), IntValue,
					FloatValue, drw_temp1_value[i], BoolValue);	
				
				}
			}
			else{
				continue;
			}
		}
	}					
					
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