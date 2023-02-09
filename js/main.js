// ===BAI 1
 document.getElementById('btnIncome').onclick = function(){
    // b1:input
    var soNgayLam = document.getElementById('inComes').value;
    console.log(soNgayLam);
    // b2:output
    var soLuong = 0;
    // b3:xu ly
    soLuong = Number(soNgayLam) *100000;
    var reIncomes = document.getElementById('resultIncome').innerHTML = "----->"+ soLuong.toLocaleString()+ "đ";
    var reIncomes = document.querySelector('#resultIncome');
    reIncomes.style.color = 'red'
    reIncomes.style.fontSize ='30px'
 }

//  ==Bai 2
document.getElementById('btnAve').onclick = function(){
   // b1 input
   var tagAve1 = document.getElementById('ave1').value;
      tagAve2 = document.getElementById('ave2').value;
      tagAve3 = document.getElementById('ave3').value;
      tagAve4 = document.getElementById('ave4').value;
      tagAve5 = document.getElementById('ave5').value;
   // b2 output
   var aveResult = 0;
   // b3 process
   aveResult =(Number(tagAve1) + Number(tagAve2) +Number(tagAve3) +Number(tagAve4) +Number(tagAve5) )/5;
   document.getElementById('averageResult').innerHTML = "->" + aveResult;
   var aveStyle = document.querySelector('#averageResult');
   aveStyle.style.color = "red";
   aveStyle.style.fontSize = "30px"
}

// ==Bai 3
document.getElementById('btnCurrency').onclick = function(){
   //b1: input
   var inputCurrencyVND = document.getElementById('inputCurrencyVnd').value
    var  currencyDolar = document.getElementById('inputCurrencyUsa').value
   //b2: output
   var giaTriQuyDoi = 0;
   //b3: process
   if(document.getElementById('inputCurrencyVnd').classList.contains("hidden")){
     giaTriQuyDoi = currencyDolar * 23500;
     document.getElementById('resulCurrency').innerHTML = giaTriQuyDoi.toLocaleString() + "VND"
   }else{
      giaTriQuyDoi = inputCurrencyVND / 23500;
      document.getElementById('resulCurrency').innerHTML = giaTriQuyDoi.toFixed(1) + "$"
   }
   var styleCss = document.querySelector('#resulCurrency');
   styleCss.style.color= "red"
   styleCss.style.fontSize= "30px"

}
document.getElementById("btnSwap").onclick = function(){
   document.getElementById('inputCurrencyVnd').classList.toggle('hidden');
   document.getElementById('inputCurrencyUsa').classList.toggle('hidden');
}

//Bai 4
document.getElementById('btnHcn').onclick = function(){
   //b1 input
   var chieuDai = Number(document.getElementById('dai').value);
   var chieuRong = Number(document.getElementById('rong').value);
   //b2 output
   var dienTich = 0;
   var chuVi = 0;
   //b3 process
   dienTich = chieuDai * chieuRong;
   chuVi = (chieuDai + chieuRong)*2;
   document.getElementById('HCNresult').innerHTML = "Diện tích: " +dienTich+ "<br> Chu vi: " +chuVi;
   var hcn = document.querySelector('#HCNresult');
   hcn.style.color = "red"
   hcn.style.fontSize = "30px"
}
 //Bai 5
 document.getElementById('btnKySo').onclick = function(){
   //b1 input
   var inputKyso = Number(document.getElementById('inputKySo').value);
   //b2 output
   var tong = 0;
   //b3 process
   if(inputKyso>0 && inputKyso<100){
      var hangDonVi = inputKyso % 10;
      var hangChuc = inputKyso /10;
      tong = hangDonVi + Math.floor(hangChuc);
      document.getElementById('kySoResult').innerHTML = tong;
      var cssKyso = document.querySelector('#kySoResult');
      cssKyso.style.color = "red"
      cssKyso.style.fontSize = "30px"
   }else{
      alert("Hãy nhập lại một con số có 2 chữ số (01-99)")
   }
 }


