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
	}	