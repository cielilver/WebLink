var L;
function get()
{
	var Tank_2L;
	Tank_2L = parseFloat(document.getElementById("COVER_L").value);
	alert(Tank_2L);
}
/*-------------------上補強形式選擇----------------------*/
function type_L(i)    
{
    L = i;
    switch (i) {
        case 1:
            document.getElementById("BB").disabled = false;
            document.getElementById("T_L").disabled = false;
            document.getElementById("W_L").disabled = false;
            document.getElementById("T2_L").disabled = false;
            document.getElementById("B0_L").disabled = false;
            document.getElementById("H1_L").disabled = false;
            document.getElementById("T1_L").disabled = false;
            document.getElementById("XB_L").disabled = true;
            document.getElementById("H2_L").disabled = true;

            document.getElementById("T_S").disabled = false;
            document.getElementById("W_S").disabled = false;
            document.getElementById("T2_S").disabled = false;
            document.getElementById("B0_S").disabled = false;
            document.getElementById("H1_S").disabled = false;
            document.getElementById("T1_S").disabled = false;

            /*
            document.getElementById("T_Ls").disabled = false;
            document.getElementById("B0_Ls").disabled = false;
            document.getElementById("H1_Ls").disabled = false;
            document.getElementById("T1_Ls").disabled = false;
            document.getElementById("T_Ss").disabled = false;
            document.getElementById("B0_Ss").disabled = false;
            document.getElementById("H1_Ss").disabled = false;
            document.getElementById("T1_Ss").disabled = false;
             */
           

            document.images["up"].src = "../pic/up.jpg";
            break;
        case 2:
            document.getElementById("BB").disabled = false;
            document.getElementById("T_L").disabled = false;
            document.getElementById("W_L").disabled = true;
            document.getElementById("T2_L").disabled = true;
            document.getElementById("B0_L").disabled = false;
            document.getElementById("H1_L").disabled = false;
            document.getElementById("T1_L").disabled = false;
            document.getElementById("XB_L").disabled = false;
            document.getElementById("H2_L").disabled = false;

            document.getElementById("T_S").disabled = false;
            document.getElementById("W_S").disabled = false;
            document.getElementById("T2_S").disabled = false;
            document.getElementById("B0_S").disabled = false;
            document.getElementById("H1_S").disabled = false;
            document.getElementById("T1_S").disabled = false;

            /*
            document.getElementById("T_Ls").disabled = false;
            document.getElementById("B0_Ls").disabled = false;
            document.getElementById("H1_Ls").disabled = false;
            document.getElementById("T1_Ls").disabled = false;
            document.getElementById("T_Ss").disabled = false;
            document.getElementById("B0_Ss").disabled = false;
            document.getElementById("H1_Ss").disabled = false;
            document.getElementById("T1_Ss").disabled = false;
             */

            document.images["up"].src = "../pic/up2.jpg";
            break;
      
    }
}
function check()
{
    
        switch (L) {
        case 1:
            go1();
            break;
        case 2:
            go1();
            break;

    }
    
     

    go2();
}
function go1() {

    var Tank_2L, Tank_2W,BB, Be_L, Be_S, W, T2, B0, H1, T1, XB, H2, T_L, T_S;
    var SC_L = [];
    var SC_S = [];
    var temp = [];
    P0 = parseFloat(document.getElementById("P0").value);
    Tank_2L = parseFloat(document.getElementById("Tank_2L").value);
    Tank_2W = parseFloat(document.getElementById("Tank_2W").value);
    BB = parseFloat(document.getElementById("BB").value);

    switch (L) {
        case 1:
            /*--------------------上補強 NO.1--------------------*/
            /*--------------------長邊--------------------*/
            T_L = parseFloat(document.getElementById("T_L").value);
            W = parseFloat(document.getElementById("W_L").value);
            T2 = parseFloat(document.getElementById("T2_L").value);
            B0 = parseFloat(document.getElementById("B0_L").value);
            H1 = parseFloat(document.getElementById("H1_L").value);
            T1 = parseFloat(document.getElementById("T1_L").value);

            Be_L = Cal_Be(Tank_2L,BB,B0);
            SC_L = Cal_1(B0, T1, H1, T2, W, T_L, Be_L);

            document.getElementById("Be_L").value = Be_L.toFixed(2);
            document.getElementById("A_L").value = SC_L[0].toFixed(2);
            document.getElementById("ei_L").value = SC_L[1].toFixed(2);
            document.getElementById("eo_L").value = SC_L[2].toFixed(2);
            document.getElementById("I_L").value = SC_L[3].toExponential(3);
            document.getElementById("Zi_L").value = SC_L[4].toExponential(3);
            document.getElementById("Zo_L").value = SC_L[5].toExponential(3);
            /*--------------------短邊--------------------*/
            T_S = parseFloat(document.getElementById("T_S").value);
            W = parseFloat(document.getElementById("W_S").value);
            T2 = parseFloat(document.getElementById("T2_S").value);
            B0 = parseFloat(document.getElementById("B0_S").value);
            H1 = parseFloat(document.getElementById("H1_S").value);
            T1 = parseFloat(document.getElementById("T1_S").value);

            Be_S = Cal_Be(Tank_2W,BB, B0);
            SC_S = Cal_1(B0, T1, H1, T2, W, T_S, Be_S);

            document.getElementById("Be_S").value = Be_S.toFixed(2);
            document.getElementById("A_S").value = SC_S[0].toFixed(2);
            document.getElementById("ei_S").value = SC_S[1].toFixed(2);
            document.getElementById("eo_S").value = SC_S[2].toFixed(2);
            document.getElementById("I_S").value = SC_S[3].toExponential(3);
            document.getElementById("Zi_S").value = SC_S[4].toExponential(3);
            document.getElementById("Zo_S").value = SC_S[5].toExponential(3);
            temp = result(Tank_2L, Tank_2W,BB, T_L, T_S, SC_L[0], SC_L[1], SC_L[3], SC_L[4], SC_L[5], SC_S[0], SC_S[1], SC_S[3], SC_S[4], SC_S[5]);

            document.getElementById("MA").value = temp[0];  //MA
            document.getElementById("MB").value = temp[1];  //MB
            document.getElementById("MC").value = temp[2];  //MC
            document.getElementById("MD").value = temp[3];  //MD
            if (temp[4] > (-1 * Tank_2L * 3 / 1000)) {
                document.getElementById("DFB").value = temp[4];    //DFB
                document.getElementById("DFB").style.color = "black";
				document.getElementById("Bdf").innerHTML = "上:OK!! "+temp[4]+" > " +(-1 * Tank_2L * 3 / 1000);
                // "B:OK!!";
            }
            else if (temp[4] <= (-1 * Tank_2L * 3 / 1000)) {
                document.getElementById("DFB").value = temp[4];    //DFB
                document.getElementById("DFB").style.color = "red";
				document.getElementById("Bdf").innerHTML = "上:變形過大!! "+temp[4]+" <= " +(-1 * Tank_2L * 3 / 1000);
				document.getElementById("Bdf").style.color = "red";
                // "B:變形過大!!";
            }
            if (temp[5] <= (Tank_2W * 3 / 1000)) {
                document.getElementById("DFD").value = temp[5];    //DFD
                document.getElementById("DFD").style.color = "black";
				document.getElementById("Ddf").innerHTML = "上:OK!! " +temp[5]+" <= " +(Tank_2W * 3 / 1000);
                // "D:OK!!";
            }
            else if (temp[5] > (Tank_2W * 3 / 1000)) {
                document.getElementById("DFD").value = temp[5];    //DFD
                document.getElementById("DFD").style.color = "red";
				document.getElementById("Ddf").innerHTML = "上:變形過大!! "+temp[5]+" > " +(Tank_2W * 3 / 1000);
				document.getElementById("Ddf").style.color = "red";
                // "D:變形過大!!";
            }
            document.getElementById("SREO_A").value = temp[6];     //SREO_A
            document.getElementById("SREI_A").value = temp[7];     //SREI_A
            document.getElementById("SREO_B").value = temp[8];     //SREO_B
            document.getElementById("SREI_B").value = temp[9];     //SREI_B
            document.getElementById("SREO_C").value = temp[10];    //SREO_C
            document.getElementById("SREI_C").value = temp[11];    //SREI_C
            document.getElementById("SREO_D").value = temp[12];    //SREO_D
            document.getElementById("SREI_D").value = temp[13];    //SREI_D

            break;

  
        case 2:
            /*--------------------上補強 NO.2--------------------*/
            /*--------------------長邊--------------------*/
            T_L = parseFloat(document.getElementById("T_L").value);
            B0 = parseFloat(document.getElementById("B0_L").value);
            H1 = parseFloat(document.getElementById("H1_L").value);
            T1 = parseFloat(document.getElementById("T1_L").value);
            XB = parseFloat(document.getElementById("XB_L").value);
            H2 = parseFloat(document.getElementById("H2_L").value);

            Be_L = Cal_Be(Tank_2L,BB, B0);
            SC_L = Cal_3(B0, T1, H1, T_L, Be_L, XB, H2);

            document.getElementById("Be_L").value = Be_L.toFixed(2);
            document.getElementById("A_L").value = SC_L[0].toFixed(2);
            document.getElementById("ei_L").value = SC_L[1].toFixed(2);
            document.getElementById("eo_L").value = SC_L[2].toFixed(2);
            document.getElementById("I_L").value = SC_L[3].toExponential(3);
            document.getElementById("Zi_L").value = SC_L[4].toExponential(3);
            document.getElementById("Zo_L").value = SC_L[5].toExponential(3);
            /*--------------------短邊--------------------*/
            T_S = parseFloat(document.getElementById("T_S").value);
            W = parseFloat(document.getElementById("W_S").value);
            T2 = parseFloat(document.getElementById("T2_S").value);
            B0 = parseFloat(document.getElementById("B0_S").value);
            H1 = parseFloat(document.getElementById("H1_S").value);
            T1 = parseFloat(document.getElementById("T1_S").value);

            Be_S = Cal_Be(Tank_2W,BB, B0);
            SC_S = Cal_1(B0, T1, H1, T2, W, T_S, Be_S);

            document.getElementById("Be_S").value = Be_S.toFixed(2);
            document.getElementById("A_S").value = SC_S[0].toFixed(2);
            document.getElementById("ei_S").value = SC_S[1].toFixed(2);
            document.getElementById("eo_S").value = SC_S[2].toFixed(2);
            document.getElementById("I_S").value = SC_S[3].toExponential(3);
            document.getElementById("Zi_S").value = SC_S[4].toExponential(3);
            document.getElementById("Zo_S").value = SC_S[5].toExponential(3);
            temp = result(Tank_2L, Tank_2W,BB, T_L, T_S, SC_L[0], SC_L[1], SC_L[3], SC_L[4], SC_L[5], SC_S[0], SC_S[1], SC_S[3], SC_S[4], SC_S[5]);

            document.getElementById("MA").value = temp[0];  //MA
            document.getElementById("MB").value = temp[1];  //MB
            document.getElementById("MC").value = temp[2];  //MC
            document.getElementById("MD").value = temp[3];  //MD
            if (temp[4] > (-1 * Tank_2L * 3 / 1000)) {
                document.getElementById("DFB").value = temp[4];    //DFB
                document.getElementById("DFB").style.color = "black";
				document.getElementById("Bdf").innerHTML = "上:OK!! "+temp[4]+" > " +(-1 * Tank_2L * 3 / 1000);
                // "B:OK!!";
            }
            else if (temp[4] <= (-1 * Tank_2L * 3 / 1000)) {
                document.getElementById("DFB").value = temp[4];    //DFB
                document.getElementById("DFB").style.color = "red";
				document.getElementById("Bdf").innerHTML = "上:變形過大!! "+temp[4]+" <= " +(-1 * Tank_2L * 3 / 1000);
				document.getElementById("Bdf").style.color = "red";
                // "B:變形過大!!";
            }
            if (temp[5] <= (Tank_2W * 3 / 1000)) {
                document.getElementById("DFD").value = temp[5];    //DFD
                document.getElementById("DFD").style.color = "black";
				document.getElementById("Ddf").innerHTML = "上:OK!! " +temp[5]+" <= " +(Tank_2W * 3 / 1000);
                // "D:OK!!";
            }
            else if (temp[5] > (Tank_2W * 3 / 1000)) {
                document.getElementById("DFD").value = temp[5];    //DFD
                document.getElementById("DFD").style.color = "red";
				document.getElementById("Ddf").innerHTML = "上:變形過大!! "+temp[5]+" > " +(Tank_2W * 3 / 1000);
				document.getElementById("Ddf").style.color = "red";
                // "D:變形過大!!";
            }
            document.getElementById("SREO_A").value = temp[6];     //SREO_A
            document.getElementById("SREI_A").value = temp[7];     //SREI_A
            document.getElementById("SREO_B").value = temp[8];     //SREO_B
            document.getElementById("SREI_B").value = temp[9];     //SREI_B
            document.getElementById("SREO_C").value = temp[10];    //SREO_C
            document.getElementById("SREI_C").value = temp[11];    //SREI_C
            document.getElementById("SREO_D").value = temp[12];    //SREO_D
            document.getElementById("SREI_D").value = temp[13];    //SREI_D
            break;
     
    }

   


}
function go2() {

    var Tank_2L, Tank_2W,BB, Be_L, Be_S, T, W, T2, B0, H1, T1, T_Ls, T_Ss;
    var SC_L = [];
    var SC_S = [];
    var temp = [];
    P0 = parseFloat(document.getElementById("P0").value);
    Tank_2L = parseFloat(document.getElementById("Tank_2L").value);
    Tank_2W = parseFloat(document.getElementById("Tank_2W").value);
    BB = parseFloat(document.getElementById("BB_s").value);
    /*--------------------長邊------------------*/
    T_Ls = parseFloat(document.getElementById("T_Ls").value);
    B0 = parseFloat(document.getElementById("B0_Ls").value);
    H1 = parseFloat(document.getElementById("H1_Ls").value);
    T1 = parseFloat(document.getElementById("T1_Ls").value);

    Be_L = Cal_Be(Tank_2L,BB, B0);
    SC_L = Cal_2(B0, T1, H1, T_Ls, Be_L);

    document.getElementById("Be_Ls").value = Be_L.toFixed(2);
    document.getElementById("A_Ls").value = SC_L[0].toFixed(2);
    document.getElementById("ei_Ls").value = SC_L[1].toFixed(2);
    document.getElementById("eo_Ls").value = SC_L[2].toFixed(2);
    document.getElementById("I_Ls").value = SC_L[3].toExponential(3);
    document.getElementById("Zi_Ls").value = SC_L[4].toExponential(3);
    document.getElementById("Zo_Ls").value = SC_L[5].toExponential(3);
    /*--------------------短邊--------------------*/
    T_Ss = parseFloat(document.getElementById("T_Ss").value);
    B0 = parseFloat(document.getElementById("B0_Ss").value);
    H1 = parseFloat(document.getElementById("H1_Ss").value);
    T1 = parseFloat(document.getElementById("T1_Ss").value);

    Be_S = Cal_Be(Tank_2W,BB, B0);
    SC_S = Cal_2(B0, T1, H1, T_Ss, Be_S);

    document.getElementById("Be_Ss").value = Be_S.toFixed(2);
    document.getElementById("A_Ss").value = SC_S[0].toFixed(2);
    document.getElementById("ei_Ss").value = SC_S[1].toFixed(2);
    document.getElementById("eo_Ss").value = SC_S[2].toFixed(2);
    document.getElementById("I_Ss").value = SC_S[3].toExponential(3);
    document.getElementById("Zi_Ss").value = SC_S[4].toExponential(3);
    document.getElementById("Zo_Ss").value = SC_S[5].toExponential(3);
    temp = result(Tank_2L, Tank_2W,BB, T_Ls, T_Ss, SC_L[0], SC_L[1], SC_L[3], SC_L[4], SC_L[5], SC_S[0], SC_S[1], SC_S[3], SC_S[4], SC_S[5]);

    document.getElementById("MA_s").value = temp[0];  //MA
    document.getElementById("MB_s").value = temp[1];  //MB
    document.getElementById("MC_s").value = temp[2];  //MC
    document.getElementById("MD_s").value = temp[3];  //MD
    if (temp[4] > (-1 * Tank_2L * 3 / 1000))
    {
        document.getElementById("DFB_s").value = temp[4];    //DFB
        document.getElementById("DFB_s").style.color = "black";
		document.getElementById("Bdf1").innerHTML = "下:OK!! " +temp[4]+" > " +(-1 * Tank_2L * 3 / 1000);
        // "B:OK!!";
    }
    else if (temp[4] <= (-1 * Tank_2L * 3 / 1000))
    {
        document.getElementById("DFB_s").value = temp[4];    //DFB
        document.getElementById("DFB_s").style.color = "red";
		document.getElementById("Bdf1").innerHTML = "下:變形過大!! "+temp[4]+" <= " +(-1 * Tank_2L * 3 / 1000);
		document.getElementById("Bdf1").style.color = "red";
        // "B:變形過大!!";
    }
    if (temp[5] <= ( Tank_2W * 3 / 1000)) {
        document.getElementById("DFD_s").value = temp[5];    //DFD
        document.getElementById("DFD_s").style.color = "black";
		document.getElementById("Ddf1").innerHTML = "下:OK!! " +temp[5]+" <= " +(Tank_2W * 3 / 1000);
        // "D:OK!!";
    }
    else if (temp[5] > ( Tank_2W * 3 / 1000)) {
        document.getElementById("DFD_s").value = temp[5];    //DFD
        document.getElementById("DFD_s").style.color = "red";
		document.getElementById("Ddf1").innerHTML = "下:變形過大!! " +temp[5]+" > " +(Tank_2W * 3 / 1000);
		document.getElementById("Ddf1").style.color = "red";
        // "D:變形過大!!";
    }
    document.getElementById("SREO_As").value = temp[6];     //SREO_A
    document.getElementById("SREI_As").value = temp[7];     //SREI_A
    document.getElementById("SREO_Bs").value = temp[8];     //SREO_B
    document.getElementById("SREI_Bs").value = temp[9];     //SREI_B
    document.getElementById("SREO_Cs").value = temp[10];    //SREO_C
    document.getElementById("SREI_Cs").value = temp[11];    //SREI_C
    document.getElementById("SREO_Ds").value = temp[12];    //SREO_D
    document.getElementById("SREI_Ds").value = temp[13];    //SREI_D


}
/*---------------------計算結果-------------------------------*/
function result(Tank_2L,Tank_2W,BB,T_L,T_S,SC_L0,SC_L1,SC_L3,SC_L4,SC_L5,SC_S0,SC_S1,SC_S3,SC_S4,SC_S5)
{
var temp = [];

    /*---------------------力矩-------------------------------*/

PP = P0 * BB * .01;
LL = Tank_2L * 0.5 + SC_L1 - T_S;
HH = Tank_2W * 0.5 + SC_S1 - T_L;
C1 = LL * LL;
C2 = HH * HH;
C3 = 6 * (LL / SC_L3 + HH / SC_S3);
K1 = (LL * C1 / SC_L3 + HH * (3 * C1 - 2 * C2) / SC_S3) / C3;
K2 = (LL * (3 * C2 - 2 * C1) / SC_L3 + HH * C2 / SC_S3) / C3;
MA = (K1 - .5 * C1) * PP;
MB = K1 * PP;
MD = K2 * PP;
MC = MA;
temp[0] = MA.toExponential(3);
temp[1] = MB.toExponential(3);
temp[2] = MC.toExponential(3);
temp[3] = MD.toExponential(3);

    /*---------------------B、D位置變形-------------------------------*/
C3 = 21000 * SC_L3;
C4 = 21000 * SC_S3;
C5 = PP * LL;
C6 = PP * HH;
DFB = (K1 / 2 - C1 / 8) * C5 * LL / C3 + (K1 - C1 / 2 + C2 / 3) * C5 * HH / C4;
DFD = (K2 - C2 / 2 + C1 / 3) * C5 * HH / C3 + (K2 / 2 - C2 / 8) * C6 * HH / C4;
temp[4] = DFB.toFixed(2);
temp[5] = DFD.toFixed(2);
    /*---------------------應力-------------------------------*/
C1 = PP * HH / SC_L0;
C2 = PP * LL / SC_S0;
SREO_B = -MB / SC_L5 - C1;
SREO_A = -MA / SC_L5 - C1;
SREO_D = -MD / SC_S5 - C2;
SREO_C = -MA / SC_S5 - C2;

SREI_B = MB / SC_L4 - C1;
SREI_A = MA / SC_L4 - C1;
SREI_D = MD / SC_S4 - C2;
SREI_C = MA / SC_S4 - C2;

temp[6] = SREO_A.toFixed(2);
temp[7] = SREI_A.toFixed(2);
temp[8] = SREO_B.toFixed(2);
temp[9] = SREI_B.toFixed(2);
temp[10] = SREO_C.toFixed(2);
temp[11] = SREI_C.toFixed(2);
temp[12] = SREO_D.toFixed(2);
temp[13] = SREI_D.toFixed(2);


return temp;
}
/*---------------------Be查表-------------------------------*/
function CCCCC(a) {
    var Data = [0.997, 0.995, 0.991, 0.987, 0.982, 0.977, 0.967, 0.955, 0.945, 0.931,
                    0.915, 0.900, 0.883, 0.863, 0.850, 0.853, 0.812, 0.800, 0.781, 0.762,
                    0.747, 0.732, 0.717, 0.700, 0.686, 0.668, 0.652, 0.635, 0.620, 0.605,
                    0.589, 0.575, 0.560, 0.545, 0.532, 0.522, 0.509, 0.496, 0.485, 0.475,
                    0.462, 0.450, 0.440, 0.431, 0.423, 0.412, 0.405, 0.397, 0.390, 0.384,
                    0.375, 0.368, 0.362, 0.355, 0.350, 0.345, 0.339, 0.333, 0.328, 0.322,
                    0.317, 0.310, 0.305, 0.300, 0.295, 0.290, 0.285, 0.280, 0.276, 0.271,
                    0.265, 0.260, 0.256, 0.252, 0.249, 0.246, 0.242, 0.239, 0.235, 0.232,
                    0.230, 0.228, 0.225, 0.223, 0.220, 0.218, 0.216, 0.214, 0.212, 0.210,
                    0.209, 0.207, 0.205, 0.203, 0.201, 0.199, 0.197, 0.195, 0.192, 0.190,
                    0.188, 0.185, 0.182, 0.180, 0.178, 0.176, 0.174, 0.172, 0.171, 0.170,
                    0.169, 0.167, 0.165, 0.163, 0.161, 0.160, 0.159, 0.157, 0.155, 0.152];
    return Data[a];
}



function Cal_Be(Tank,BB, B0) {
    var BL, C01, C03, CCC, Be;
    var C02, C05;

    BL = BB - B0;
    C01 = 100 * BL / Tank;
    //C02 = Convert.ToInt32(C01);    //四捨五入
    C02 = Math.floor(C01);
    C03 = C01 - C02;
    C05 = C02 + 1;
    if (C02 == 0)             //CCCCC陣列引數 C02-1 <0時，不存在陣列值，等於0
    {
        CCC = 0 - (0 - CCCCC(C05 - 1)) * C03;
    }
    else {
        CCC = CCCCC(C02 - 1) - (CCCCC(C02 - 1) - CCCCC(C05 - 1)) * C03;
    }

    //CCC = CCCCC(C02) - (CCCCC(C02) - CCCCC(C05)) * C03;
    //Be = Convert.ToInt32(B0 + BL * CCC);
    Be = Math.floor(B0 + BL * CCC);          //Math.floor()'無條件捨去
    return Be;
}
/*----------------------------------------------BE無須查表法----------------------------------------------------*/
function Cal_Be1(Tank,BB,B0)
{
var BL,Be,v = 0.3,xb,Beb;
BL = BB - B0;
xb = 2 * Math.PI / Tank * BL;  
Beb = 4 / xb * (Math.sinh(xb) + xb) / ((3 + v) * Math.cosh(xb) + 0.5 * (1 + v) * Math.pow(xb, 2)+5 - v);
Be = Math.floor(B0 + BL*Beb);          //無條件捨去
return Be;
}
/*----------------------------------------------輸入1----------------------------------------------------*/
function Cal_1(B0, T1, H1, T2, W, T, Be) {
    /*---------------------截面積-------------------------------*/
    var A, S1, S2, S3, S4, S5, S6, S7, S8, S9, ei, eo, I, Zi, Zo;
    var temp = [];
    S1 = B0 * T1;
    S2 = H1 - T1;
    S3 = 2 * S2 * T1;
    S4 = T2 * W;
    S5 = T * Be;
    temp[0] = A = S1 + S3 + S4 + S5;
    /*---------------------重心位置-------------------------------*/
    temp[1] = ei = (S1 * (H1 + T - T1 / 2) + S3 * (S2 / 2 + T) + S4 * (W / 2 + T) + S5 * T / 2) / A;
    temp[2] = eo = H1 + T - ei;
    /*---------------------慣性矩-------------------------------*/
    S6 = S1 * Math.pow(T1, 2) / 12 + S1 * Math.pow((eo - T1 / 2), 2);
    S7 = S3 * Math.pow(S2, 2) / 12 + S3 * Math.pow((S2 / 2 + T - ei), 2);
    S8 = S4 * Math.pow(W, 2) / 12 + S4 * Math.pow((W / 2 + T - ei), 2);
    S9 = S5 * Math.pow(T, 2) / 12 + S5 * Math.pow((ei - T / 2), 2);
    temp[3] = I = S6 + S7 + S8 + S9;
    /*---------------------斷面係數-------------------------------*/
    temp[4] = Zi = I / ei;
    temp[5] = Zo = I / eo;

    return temp;
}

/*----------------------------------------------輸入2----------------------------------------------------*/
function Cal_2(B0, T1, H1, T, Be) {
    /*---------------------截面積-------------------------------*/
    var A, S1, S2, S3, S4, S5, S6, S7, ei, eo, I, Zi, Zo;
    var temp = [];
    S1 = B0 * T1;
    S2 = H1 - T1;
    S3 = 2 * T1 * S2;
    S4 = T * Be;
    temp[0] = A = S1 + S3 + S4;
    //temp[0] = A = S1 + S3 ;  //test4
    /*---------------------重心位置-------------------------------*/
    temp[1] = ei = (S1 * (H1 + T - T1 / 2) + S3 * (S2 / 2 + T) + S4 * T / 2) / A;
    temp[2] = eo = H1 + T - ei;
    /*---------------------慣性矩-------------------------------*/
    S5 = S1 * Math.pow(T1, 2) / 12 + S1 * Math.pow((H1 + T - ei - T1 / 2), 2);
    S6 = 2 * (T1 * Math.pow(S2, 3) / 12 + T1 * S2 * Math.pow((S2 / 2 + T - ei), 2));
    S7 = S4 * Math.pow(T, 2) / 12 + S4 * Math.pow((ei - T / 2), 2);
    temp[3] = I = S5 + S6 + S7;
    //temp[3] = I = S5 + S6;  //test4
    /*---------------------斷面係數-------------------------------*/
    temp[4] = Zi = I / ei;
    temp[5] = Zo = I / eo;

    return temp;
}
/*----------------------------------------------輸入3----------------------------------------------------*/
function Cal_3(B0, T1, H1, T, Be, XB, H2) {
    /*---------------------截面積-------------------------------*/
    var A, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, ei, eo, I, Zi, Zo;
    var temp = [];
    S1 = H1 - T1;
    S1 = H1 - T1;
    S2 = H2 - T1;
    S3 = B0 * T1;
    S4 = (Be - B0) / 2;
    S5 = H2 - H1 - T;
    S6 = B0 - XB;
    temp[0] = A = S1 * T1 + S2 * T1 + S3 + (S4 + XB) * T + S5 * T + (S4 + S6) * T;
    /*---------------------重心位置-------------------------------*/
    S7 = H2 + T;
    temp[1] = ei = (S1 * T1 * (S7 - T1 - S1 / 2) + S3 * (S7 - T1 / 2) + S2 * T1 * (S7 - T1 - S2 / 2) + (S4 + XB) * Math.pow(T, 2) / 2 + S5 * T * (S5 / 2 + T) + (S4 + S6) * T * (S5 + 3 * T / 2)) / A;
    temp[2] = eo = S7 - ei;
    /*---------------------慣性矩-------------------------------*/
    S8 = T1 * Math.pow(S1, 3) / 12 + S1 * T1 * Math.pow((S2 + T - S1 / 2 - ei), 2);
    S9 = S3 * Math.pow(T1, 2) / 12 + S3 * Math.pow((eo - T1 / 2), 2);
    S10 = T1 * Math.pow(S2, 3) / 12 + S2 * T1 * Math.pow((S2 + T - S2 / 2 - ei), 2);
    S11 = (S4 + XB) * Math.pow(T, 3) / 12 + (S4 + XB) * T * Math.pow((ei - T / 2), 2);
    S12 = T * Math.pow(S5, 3) / 12 + S5 * T * Math.pow((ei - (S5 + 3 * T / 2)), 2);
    S13 = (S4 + S6) * Math.pow(T, 3) / 12 + (S4 + S6) * T * Math.pow((H1 + T / 2 - eo), 2);
    temp[3] = I = S8 + S9 + S10 + S11 + S12 + S13;
    /*---------------------斷面係數-------------------------------*/
    temp[4] = Zi = I / ei;
    temp[5] = Zo = I / eo;

    return temp;
}
/*----------------------------------------------輸入4----------------------------------------------------*/
function Cal_4(B0, H1, T, Be, YY, SS, YI) {
    /*---------------------截面積-------------------------------*/
    var A, S0, S1, S2, ei, eo, I, Zi, Zo;
    var temp = [];
    S0 = SS * 100;  //補強截面積換算cm2 > mm2
    S2 = YI * 10000; //補強慣性矩換算cm4 > mm4
    S1 = T * Be;
    temp[0] = A = S1 + S0;
    /*---------------------重心位置-------------------------------*/
    temp[1] = ei = (S1 * T / 2 + S1 * (H1 + T - YY)) / A;
    temp[2] = eo = H1 + T - ei;
    /*---------------------慣性矩-------------------------------*/
    temp[3] = I = S1 * Math.pow(T, 2) / 12 + S1 * Math.pow((ei - T / 2), 2) + S2 + S0 * Math.pow((eo - YY), 2);
    /*---------------------斷面係數-------------------------------*/
    temp[4] = Zi = I / ei;
    temp[5] = Zo = I / eo;

    return temp;
}
