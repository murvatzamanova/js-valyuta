        function convertCurrency() {
            var amount = document.getElementById('amount').value;
            var fromCurrency = document.getElementById('fromCurrency').value;
            var toCurrency = document.getElementById('toCurrency').value;

            var usdToTry = 8.50;
            var eurToTry = 10.20;
            var usdToEur = 0.85;
            
            var result;
            if (fromCurrency === "USD" && toCurrency === "TRY") {
                result = amount * usdToTry;
            } else if (fromCurrency === "EUR" && toCurrency === "TRY") {
                result = amount * eurToTry;
            } else if (fromCurrency === "USD" && toCurrency === "EUR") {
                result = amount * usdToEur;
            } else {
                result = "Geçersiz dönüşüm!";
            }
            
            document.getElementById('result').innerText = amount + ' ' + fromCurrency + ' = ' + result + ' ' + toCurrency;
        }
