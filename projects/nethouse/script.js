document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms.feedback,
    name = form.name,
    email = form.email,
    phone = form.phone,
    btnForm = form.submit;

  btnForm.disabled = true;
  name.style.textTransform = "capitalize";

  let isNameCorrect = false,
    isEmailCorrect = false,
    isPhoneCorrect = false;

  const onReset = () => {
    form.reset();
    isNameCorrect = false;
    isEmailCorrect = false;
    isPhoneCorrect = false;
    name.style.borderColor = "";
    email.style.borderColor = "";
    phone.style.borderColor = "";
  };

  const isValid = () => {
    btnForm.disabled = !(isNameCorrect && isEmailCorrect && isPhoneCorrect);
  };

  const correctFio = (e) => {
    e.target.value = e.target.value.replace(/[^А-Яа-яЁё ]/g, "");
    const wrongText = e.target.value.split(" ").find((el) => el.length < 2);

    if (wrongText !== undefined || e.target.value.split(" ").length !== 3) {
      e.target.style.borderColor = "red";
      isNameCorrect = false;
    } else {
      e.target.style.borderColor = "green";
      isNameCorrect = true;
    }

    isValid();
  };

  const correctEmail = (e) => {
    if (!/\S+@\S+/.test(e.target.value.toLowerCase())) {
      e.target.style.borderColor = "red";
      isEmailCorrect = false;
    } else {
      e.target.style.borderColor = "green";
      isEmailCorrect = true;
    }

    isValid();
  };

  const correctPhone = (e) => {
    e.target.value = e.target.value.replace(/[^+\d]/g, "");

    if (
      !/^((8|\+7|07)[\- ]?)(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
        e.target.value.toLowerCase()
      )
    ) {
      e.target.style.borderColor = "red";
      isPhoneCorrect = false;
    } else {
      e.target.style.borderColor = "green";
      isPhoneCorrect = true;
    }

    isValid();
  };

  name.onkeydown = name.onkeyup = name.onkeypress = correctFio;
  email.onkeydown = email.onkeyup = email.onkeypress = correctEmail;
  phone.onkeydown = phone.onkeyup = phone.onkeypress = correctPhone;

  const sendData = async () => {
    try {
      const formData = new FormData(form);

      const request = await fetch(window.location.host, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const response = await request.json();

      response.then((data) => {
        console.log("data :>> ", data);

        alert("Спасибо за заявку!");
        onReset();
      });
    } catch (error) {
      console.log(error);
      alert("Сервер временно недоступен, попробуйте позже");
      onReset();
    }
  };

  btnForm.addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
    };

    // Объект, в котором будут следующие свойства:
    console.log(data.name == "Иванов Иван Иванович");
    console.log(data.email == "mail@gmail.com");
    console.log(data.phone == "+79994445566");

    sendData();
  });
});
