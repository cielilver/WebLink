	var ret;
	var FunctionName;
	var FeatureID;
	var value = "Undefined";	
	 
	//Parameter Type: PWL_MODEL, PWL_FEATURE
	var ItemType = document.pwl.eval("PWL_MODEL");
	if (parseInt(ItemType) === parseInt(document.pwlc.PWL_MODEL)) {
		FeatureID = -1;
		ret = document.pwl.pwlMdlParametersGet(layoutModelNameExt);
		FunctionName = "pwlMdlParametersGet";
	}

function export2xls() { 
	
	var ret;
	var FunctionName;
	var FeatureID;
	var value = "Undefined";	
	I1.document.body.innerHTML = ""; 
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

	I1.document.writeln('HV側法蘭\n');
	Gap('HV_FC_1');
	Gap('HV_F_1_S');
	Gap('HV_FLANGE_1_XP');
	Gap('HV_FLANGE_1_DIS');
	Gap('HV_FLANGE_1_X');
	Gap('HV_FLANGE_1_Y');
	Gap('HV_FLANGE_1_H');
	I1.document.writeln(''); 
	I1.document.writeln('HV側法蘭套管箱\n'); 
	Gap('HV_CAS_SW');
	Gap('HV_CAS_H');
	Gap('HV_CAS_B');
	Gap('HV_CAS_BH');
	Gap('HV_CAS_BD');
	I1.document.writeln(document.getElementById("BCT_D").value); 
/*
	 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'HV_CAS_SW'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.writeln('套管箱開關'+'\t'+value);
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'HV_CAS_H'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.writeln('套管箱高度'+'\t'+value);
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'HV_CAS_B'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.writeln('BCT型式'+'\t'+value);
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'HV_CAS_BH'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.writeln('BCT高度'+'\t'+value);
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'HV_CAS_BD'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.writeln('BCT深度'+'\t'+value);	
*/	
/*	
	I1.document.writeln('上蓋'+'\t\t\t'+'上蓋心體擋鐵1'); 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'COVER_T'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.write('厚度'+'\t'+value+'\t'+''+'\t');
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'COVER_T'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.write('開關'+'\t'+value+'\t'+''+'\t');
*/






	
/*
	I1.document.writeln('上蓋'); 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'COVER_T'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('厚度'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'COVER_L'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('長度'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'COVER_W'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('寬度'+'\t'+value); 
	I1.document.writeln('');

	I1.document.writeln('上蓋心體擋鐵1'); 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_S1'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('開關'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_XP1'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('位置'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_X1'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('與TR中心水平距離'+'\t'+value); 	

	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_H1'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('高度'+'\t'+value); 	
	I1.document.writeln('');

	I1.document.writeln('上蓋心體擋鐵2'); 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_S2'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('開關'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_XP2'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('位置'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_X2'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('與TR中心水平距離'+'\t'+value); 	

	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_H2'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('高度'+'\t'+value); 	
	I1.document.writeln('');	

	I1.document.writeln('上蓋心體擋鐵3'); 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_S3'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('開關'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_XP3'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('位置'+'\t'+value); 
	
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_X3'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('與TR中心水平距離'+'\t'+value); 	

	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),
			FeatureID, 'CORE_STOPPER_H3'); //切換objParameterName 可擷取其他頁面參數值
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 
	I1.document.writeln('高度'+'\t'+value); 	
	I1.document.writeln('');	
*/	
	I1.document.execCommand('SaveAs',true, '*.xls');



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
					 
	I1.document.body.innerHTML = "";			 
				 
	var val_ret = document.pwl.pwlParameterValueGet(layoutModelNameExt, parseInt(ItemType),FeatureID, pname);
	if (val_ret.ParamType == parseInt(document.pwlc.PWL_VALUE_DOUBLE)) {value = val_ret.ParamDoubleVal;} 	
	I1.document.writeln(parameter[pname]+'\t'+value);				
	
}