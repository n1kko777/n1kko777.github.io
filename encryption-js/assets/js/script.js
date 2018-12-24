$(function () {

	let cryproText = '';

	var body = $('body'),
		stage = $('#stage'),
		back = $('a.back'),
		mainTtl = $('.first').text();

	let characters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я', ' '];

	let N = characters.length;


	/* Info */

	var info = $('#info'),
		openInfo = $('a[href="#info"]');

	openInfo.on('click', function (e) {
		e.preventDefault();

		info.fadeIn();
	});

	info.on('click', function (e) {
		if (e.target.className == 'info' || e.target.className == 'info-close') {
			info.fadeOut();
		}
	});

	/**
	 * Шифрование текста
	 */

	var textEnc = $('.text-enc'),
		textEncInput = textEnc.find('#textEnc');

	$('#step1 .encryptText').click(function () {
		encryptTtl($(this).text());
		body.attr('class', 'encrypt');
	});

	$('#step1 .decryptText').click(function () {
		encryptTtl($(this).text());
		body.attr('class', 'decrypt');
	});

	$('.cancel').on('click', function () {
		encryptTtl(mainTtl);
		textEncInput.val('');
		body.attr('class', '');
	});

	function encryptTtl(textTtl) {
		$('.first').text(textTtl);
		$('#step1 .button').not('.process').fadeToggle();
		textEnc.fadeToggle();
		textEncInput.focus();
	}

	$('#cryptText').on('click', function () {
		let inpText = textEncInput.val();

		if (inpText !== '') {
			step(3);
			textEncInput.blur();
			cryproText = inpText;
			textEncInput.val('');
		} else {
			alert('Введите текст!');
		}
	});


	/* Step 1 */

	$('#step1 .encrypt').click(function () {
		body.attr('class', 'encrypt');

		// Go to step 2
		step(2);
	});

	$('#step1 .decrypt').click(function () {
		body.attr('class', 'decrypt');
		step(2);
	});


	/* Step 2 */


	$('#step2 .button').click(function () {
		// Trigger the file browser dialog
		$(this).parent().find('input').click();
	});


	// Set up events for the file inputs

	var file = null;

	$('#step2').on('change', '#encrypt-input', function (e) {

		// Has a file been selected?

		if (e.target.files.length != 1) {
			alert('Пожалуйста выберите файл!');
			return false;
		}

		file = e.target.files[0];

		if (file.size > 1024 * 1024) {
			alert('Размер файла не должен превышать 1 Mb!');
			return;
		}

		step(3);
	});

	$('#step2').on('change', '#decrypt-input', function (e) {

		if (e.target.files.length != 1) {
			alert('Пожалуйста выберите файл!');
			return false;
		}

		file = e.target.files[0];
		step(3);
	});


	/* Step 3 */


	$('.step3Enc').click(function () {

		var input = $(this).parent().find('input[name=password]'),
			password = input.val();

		input.val('');

		if (password.length < 5) {
			alert('Длина пароля должна быть более 5ти символов!');
			return;
		}

		if (cryproText !== '') {

			let res = checkOnCrypt('text', password);

			textEncInput.val(res);
			textEncInput.select();
			document.execCommand('copy');
			$('.first').text("Текст скопирован в буфер обмена!");
			res = '';
			step(1);
		} else {

			// The HTML5 FileReader object will allow us to read the 
			// contents of the	selected file.

			checkOnCrypt('file', password);

		}

	});


	function checkOnCrypt(params, password) {

		if (body.hasClass('encrypt')) {

			// Encrypt!
			if (params === 'text') {
				let Vizhener = Encode(cryproText, password);
				let cryptedText = CryptoJS.AES.encrypt(Vizhener, password).toString();
				cryproText = '';
				return cryptedText;
			}

			if (params === 'file') {

				var reader = new FileReader(),
					a = $('#step4 a.download');

				reader.onload = function (e) {

					// Use the CryptoJS library and the AES cypher to encrypt the 
					// contents of the file, held in e.target.result, with the password

					var encrypted = CryptoJS.AES.encrypt(e.target.result, password);

					// The download attribute will cause the contents of the href
					// attribute to be downloaded when clicked. The download attribute
					// also holds the name of the file that is offered for download.

					a.attr('href', 'data:application/octet-stream,' + encrypted);
					a.attr('download', file.name);

					step(4);
				};

				// This will encode the contents of the file into a data-uri.
				// It will trigger the onload handler above, with the result

				reader.readAsDataURL(file);
				return false;
			}


		} else {

			// Decrypt it!

			if (params === 'text') {

				let deryptedText = CryptoJS.AES.decrypt(cryproText, password).toString(CryptoJS.enc.Utf8);

				if (deryptedText === "") {
					alert("Неверный пароль! Повторите попытку.");
					return cryproText;
				}
				cryproText = Decode(deryptedText, password);
				deryptedText = cryproText;
				cryproText = '';
				return deryptedText;
			}

			if (params === 'file') {

				var reader = new FileReader(),
					a = $('#step4 a.download');


				reader.onload = function (e) {

					var decrypted = CryptoJS.AES.decrypt(e.target.result, password)
						.toString(CryptoJS.enc.Latin1);

					if (!/^data:/.test(decrypted)) {
						alert("Неверный пароль! Повторите попытку.");
						return false;
					}

					a.attr('href', decrypted);
					a.attr('download', file.name);
					step(4);
				};

				reader.readAsText(file);
				return false;

			}


		}
	}

	//зашифровать
  function Encode(input, keyword) {
    let inputEnc = input.toUpperCase();
    let keywordEnc = keyword.toUpperCase();

    let result = "";

    let keyword_index = 0;

    for (var symbol in inputEnc) {
      
      let c = (characters.indexOf(inputEnc[symbol]) +
        characters.indexOf(keywordEnc[keyword_index])) % N;

      result += characters[c];

      keyword_index++;

      if ((keyword_index + 1) == keywordEnc.length)
        {
          keyword_index = 0;
        }
      
    }

    return result;
  }

  //расшифровать
  function Decode(input, keyword) {
    let inputDec = input.toUpperCase();
    let keywordDec = keyword.toUpperCase();

    let result = "";

    let keyword_index = 0;

    for (var symbol in inputDec) {
      let p = (characters.indexOf(inputDec[symbol]) -
        characters.indexOf(keywordDec[keyword_index])) % N;
        
      if (p < 0) {
        p += characters.length;
      }

      result += characters[p];

      keyword_index++;


      if ((keyword_index + 1) == keywordDec.length)
      {
        keyword_index = 0;
      }
    }

    return result.toLowerCase();
  }


	/* The back button */


	back.click(function () {

		// Reinitialize the hidden file inputs,
		// so that they don't hold the selection 
		// from last time

		$('#step2 input[type=file]').replaceWith(function () {
			return $(this).clone();
		});

		step(1);
	});


	// Helper function that moves the viewport to the correct step div

	function step(i) {

		if (i == 1) {
			back.fadeOut();
		} else {
			back.fadeIn();
		}
		
		// Move the #stage div. Changing the top property will trigger
		// a css transition on the element. i-1 because we want the
		// steps to start from 1:

		stage.css('top', (-(i - 1) * 100) + '%');
	}
});