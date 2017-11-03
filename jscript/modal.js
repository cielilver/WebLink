
// When the user clicks on the button, open the modal  目前使用jQuery方式，此種停用
function modal_open() {                                           
	// Get the modal
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	//var html = Template.load('html/test.html');
	
}

// When the user clicks on <span> (x), close the modal
function modal_close() {
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function(){
	
//上蓋
$("#myBtn").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/上蓋.html');
	});
	
$("#myBtn1").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/上蓋心體擋鐵.html');
	});
	
$("#myBtn2").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/上蓋油管.html');
	});
	
$("#myBtn3").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/集氣管.html');
	});
//HV側上蓋法蘭
$("#myBtn4").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側釋壓裝置.html');
	});
	
$("#myBtn5").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側抽真空管.html');
	});
	
$("#myBtn6").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側法蘭套管箱.html');
	});
//LV側上蓋法蘭
$("#myBtn7").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側釋壓裝置.html');
	});
	
$("#myBtn8").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側抽真空管.html');
	});
	
$("#myBtn9").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側法蘭套管箱.html');
	});
//HV側手孔
$("#myBtn10").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側人手孔.html');
	});
	
$("#myBtn11").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側人手孔無頸.html');
	});
//LV側手孔
$("#myBtn12").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側人手孔.html');
	});
	
$("#myBtn13").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側人手孔無頸.html');
	});
//HV側BCT
$("#myBtn14").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側BCT端子箱.html');
	});
	
$("#myBtn15").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側鐵心接地箱.html');
	});

$("#myBtn16").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側切換器.html');
	});
//LV側BCT
$("#myBtn17").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側BCT端子箱.html');
	});
	
$("#myBtn18").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側鐵心接地箱.html');
	});

$("#myBtn19").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側切換器.html');
	});
//HV側衝擊記錄器座
$("#myBtn20").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側衝擊記錄器座.html');
	});

$("#myBtn21").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側防止墜落座.html');
	});
//LV側衝擊記錄器座
$("#myBtn22").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側衝擊記錄器座.html');
	});

$("#myBtn23").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/LV側防止墜落座.html');
	});
//外殼
$("#myBtn24").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/外殼側板.html');
	});
$("#myBtn25").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/橫補強.html');
	});
$("#myBtn26").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/切換器法蘭.html');
	});
//外殼
$("#myBtn27").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/心體擋鐵.html');
	});
$("#myBtn28").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/止振座.html');
	});
$("#myBtn29").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/下橫鐵絕緣物擋鐵.html');
	});
//外殼Front
$("#myBtn30").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front人手孔.html');
	});
$("#myBtn31").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front橢圓手孔.html');
	});
$("#myBtn32").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front衝擊油壓電驛法蘭.html');
	});
$("#myBtn33").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front油中氣體用閥座.html');
	});
$("#myBtn34").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front吊耳.html');
	});
$("#myBtn35").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front散熱器法蘭.html');
	});
$("#myBtn36").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front千斤頂.html');
	});
$("#myBtn37").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front接地端子.html');
	});
$("#myBtn38").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front支架座.html');
	});
$("#myBtn68").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Front避雷器支架.html');
	});
	
//外殼Back
$("#myBtn39").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back人手孔.html');
	});
$("#myBtn40").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back橢圓手孔.html');
	});
$("#myBtn41").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back衝擊油壓電驛法蘭.html');
	});
$("#myBtn42").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back油中氣體用閥座.html');
	});
$("#myBtn43").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back吊耳.html');
	});
$("#myBtn44").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back散熱器法蘭.html');
	});
$("#myBtn45").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back千斤頂.html');
	});
$("#myBtn46").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back接地端子.html');
	});
$("#myBtn47").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Back支架座.html');
	});
//外殼Right
$("#myBtn48").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right人手孔.html');
	});
$("#myBtn49").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right橢圓手孔.html');
	});
$("#myBtn50").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right濾油閥.html');
	});
$("#myBtn51").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right排油閥.html');
	});
$("#myBtn52").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right切換器用連接法蘭.html');
	});
$("#myBtn53").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right吊耳.html');
	});
$("#myBtn54").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right千斤頂.html');
	});
$("#myBtn55").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Right支架座.html');
	});
//外殼Left
$("#myBtn56").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left人手孔.html');
	});
$("#myBtn57").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left橢圓手孔.html');
	});
$("#myBtn58").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left濾油閥.html');
	});
$("#myBtn59").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left排油閥.html');
	});
$("#myBtn60").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left切換器用連接法蘭.html');
	});
$("#myBtn61").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left吊耳.html');
	});
$("#myBtn62").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left千斤頂.html');
	});
$("#myBtn63").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/Left支架座.html');
	});
$("#myBtn64").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/儲油槽.html');
	});
$("#myBtn65").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/底板.html');
	});
$("#myBtn66").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/TR中心偏移.html');
	});
$("#myBtn67").on("click",function(){
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	$("#modal-body").load('../failure/HV側法蘭套管箱.html');
	});
});

