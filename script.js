const questions = [
    
    {
        question: "1.Мүктердің кең таралған өкілі ?",
        options: ["Көкек мүгі ", "Бауыр мүк ", "Жапырақсыз мүк "],
        correct: 0,
        image: "https://itest.kz/upload/images/1350041227.23.jpeg.png"
    },
    {
        question: "2.Жапырағы мен бүршігі бар бұтақтанбаған жас сабақ қалай аталады ?",
        options: ["Бүршік ", "Өркен", "Сабақ"],
        correct: 1,
        image: "https://botana.biz/prepod/_bloks/pic/xyyiti2-005.png"
    },
    {
        question: "3.Су  астында реактивті  қозғалатын ұлу ?",
        options: ["Кальмар ", "Тоспа ұлу ", "Айқұлақ"],
        correct: 0,
        image: "https://i.pinimg.com/736x/df/6b/85/df6b85021505e3b27e4edb191426febc.jpg"
    },
    {
        question: "4.Алғашқы рет құрлыққа шыққан омыртқалы жануарлар ?",
        options: ["Қосмекенділер", "Құстар", "Жорғалаушылар"],
        correct: 2,
        image: "https://avatars.mds.yandex.net/i?id=bf740eaf607ac679ccc0417a38dfb939-3795566-images-thumbs&n=13"
    },
    {
        question: "5.Аталған өсімдіктердің ішінен қысқарған сабақты өсімідікті көрсетіңіз ?",
        options: ["Асбұршақ", "Бақбақ", "Асқабақ"],
        correct: 1,
        image: "https://avatars.mds.yandex.net/i?id=ff54a645183aca41630891fb0ab55f44_l-8497672-images-thumbs&n=13"
    },
    {
        question: "6.Буылтық құрттар типіне жататын құртты табыңыз ?",
        options: ["Жіпшеқұрт", "Ақ сұлама ", "Шұбалшаң"],
        correct: 2,
        image: "https://sunduk-ribaka.ru/wa-data/public/shop/products/14/72/47214/images/90837/90837.970.png"
    },
    {
        question: "7.Қоңыр балдырларға жатады ?",
        options: ["Ламинария", "Порфира", "Хондрус"],
        correct: 0,
        image: "https://farmf.ru/wp-content/uploads/2020/05/1-129.jpg"
    },
    {
        question: "8.Бүйректің функциялық бірлігі ?",
        options: ["Капсула", "Нейрон", "Нефрон"],
        correct: 2,
        image: "https://prorisuem.ru/foto/8514/kapsula_nefrona_risunok_42.webp"
    },
    {
        question: "9.Бетбақдала , Балқаш маңының солтүстігінен кездесетін кеміруші ?",
        options: ["Егеуқұйрық", "Жалман", "Тышқан"],
        correct: 1,
        image: "https://avatars.mds.yandex.net/i?id=055473baab7fc2aab7842250bc016697_l-4078450-images-thumbs&n=13"
    },
    {
        question: "10.Қимыл-қозғалысты, тепе-теңдікті үйлестіретін ми бөлімі ?",
        options: ["Сопақша ми ", "Аралық ми", "Мишық"],
        correct: 2,
        image: "https://anatomy_atlas.academic.ru/pictures/anatomy_atlas/af/260.jpg"
    },


];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const answerSection = document.getElementById('answer-section');
    const checkmark = document.getElementById('checkmark');
    const answerImage = document.getElementById('answer-image');
    const quizContainer = document.getElementById('quiz-container');

    // Егер сұрақтар бітіп қалса
    if (currentQuestionIndex >= questions.length) {
        quizContainer.innerHTML = `
            <h2>Сұрақтар аяқталды!</h2>
            <p>Сіз барлық сұрақтарды аяқтадыңыз. Қатысқаныңыз үшін рахмет!</p>
            <button id="restart-button">Қайта бастау</button>
        `;
        document.getElementById('restart-button').onclick = restartQuiz; // Қайта бастау түймесіне оқиға қосу
        return;
    }

    // Ағымдағы сұрақты алу
    const currentQuestion = questions[currentQuestionIndex];

    // Сұрақты және жауап нұсқаларын көрсету
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    answerSection.style.visibility = 'hidden'; // Сурет пен птичканы жасыру
    checkmark.style.visibility = 'hidden'; // Птичканы жасыру
    answerImage.classList.remove('show'); // Сурет анимациясын қалпына келтіру

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.onclick = () => checkAnswer(index, currentQuestion.correct, currentQuestion.image);
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex, correctIndex, imageUrl) {
    const options = document.querySelectorAll('.option');
    const answerSection = document.getElementById('answer-section');
    const checkmark = document.getElementById('checkmark');
    const answerImage = document.getElementById('answer-image');

    if (selectedIndex === correctIndex) {
        // Дұрыс жауап
        options[selectedIndex].classList.add('correct');
        checkmark.style.visibility = 'visible'; // Птичканы көрсету
        answerImage.src = imageUrl;
        answerSection.style.visibility = 'visible'; // Сурет пен птичканы көрсету
        answerImage.classList.add('show'); // Анимацияны қосу
    } else {
        // Қате жауап
        options[selectedIndex].classList.add('incorrect');
        setTimeout(() => loadQuestion(), 1000); // Қайта жүктеу
    }
}

function loadNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function loadPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Тестті қайта бастау функциясы
function restartQuiz() {
    currentQuestionIndex = 0;
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="question" id="question">Сұрақ жүктелуде...</div>
        <div id="options-container"></div>
        <div class="answer-section" id="answer-section">
            <div class="correct-checkmark" id="checkmark">✔</div>
            <img id="answer-image" class="answer-image" src="" alt="Answer illustration">
        </div>
        <div class="nav-buttons">
            <button onclick="loadPreviousQuestion()">Алдыңғы сұрақ</button>
            <button onclick="loadNextQuestion()">Келесі сұрақ</button>
        </div>
    `;
    loadQuestion();
}

// Алғашқы сұрақты жүктеу
loadQuestion();

