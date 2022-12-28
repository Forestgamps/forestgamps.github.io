const imageElem = document.getElementById("images");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("counter");
const finalElem = document.getElementById("final");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(answers, img)
	{ 
		this.answers = answers; 
		this.img = img;
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вы совсем не разбираетесь в фильмах!", 0),
	new Result("Неплохой результат!", 4),
	new Result("Вы хорошо разбираетесь в фильмах!", 8),
	new Result("Вы отлично разбираетесь в фильмах!", 12)
];

//Массив с вопросами
const questions = 
[
	new Question( 
	[
		new Answer("Настоящий детектив (2014-н.в.)", 0),
		new Answer("Твоё имя (2016)", 0),
		new Answer("Интерстеллар (2014)", 1),
        new Answer("Престиж (2016)", 0),
		new Answer("Шестое чувство (2006)", 0)
	],"<img src=\"images-test1/1.png\">"),

	new Question(
	[
		new Answer("Престиж (2016)", 0),
		new Answer("Остров проклятых (2009)", 0),
		new Answer("Железный человек (2008)", 0),
        new Answer("Железный человек 2 (2010)", 0),
		new Answer("Начало (2010)", 1)
	], "<img src=\"images-test1/2.png\">"),

	new Question( 
	[
		new Answer("1917 (2019)", 1),
		new Answer("1+1 (2011)", 0),
		new Answer("Тёмный рыцарь (2008)", 0),
        new Answer("Железный человек 2 (2010)", 0),
		new Answer("Бойцовский клуб (1999)", 0)
	], "<img src=\"images-test1/3.png\">"),

	new Question(
	[
		new Answer("Престиж (2016)", 0),
		new Answer("Начало (2010)", 0),
		new Answer("Острые козырьки (2013-2022)", 1),
        new Answer("Железный человек 2 (2010)", 0),
		new Answer("Бесславные ублюдки (2009)", 0)
	], "<img src=\"images-test1/4.png\">"),

	new Question(
	[
		new Answer("Брат 2 (2000)", 0),
		new Answer("Бесславные ублюдки (2009)", 1),
		new Answer("Семь (1995)", 0),
        new Answer("Игра (1997)", 0),
		new Answer("Начало (2010)", 0)
	], "<img src=\"images-test1/5.png\">"),

	new Question( 
	[
		new Answer("Криминальное чтиво (1994)", 1),
		new Answer("Бесславные ублюдки (2009)", 0),
		new Answer("Славные парни (1999)", 0),
        new Answer("Такси (1998)", 0),
		new Answer("Парк Юрского периода (1993)", 0)
	], "<img src=\"images-test1/6.png\">"),

    new Question(
	[
		new Answer("Престиж (2016)", 0),
		new Answer("Зеленая книга (2018)", 0),
		new Answer("Зеленая Миля (1999)", 0),
        new Answer("Убить Билла 2 (2004)", 0),
		new Answer("Побег из Шоушенка (1994)", 1)
	], "<img src=\"images-test1/7.png\">"),

    new Question( 
	[
		new Answer("Чужой (1979)", 0),
		new Answer("Чужой 3 (1992)", 0),
		new Answer("Чужой против Хищника (2004)", 0),
        new Answer("Железный человек 2 (2010)", 0),
		new Answer("Чужие (1986)", 1)
	], "<img src=\"images-test1/8.png\">"),

    new Question(
	[
		new Answer("Исчезнувшая (2014)", 0),
		new Answer("Нечто (1982)", 0),
		new Answer("Логан (2017)", 0),
        new Answer("Начало (2010) (2010)", 0),
		new Answer("Довод (2020)", 1)
	], "<img src=\"images-test1/9.png\">"),

    new Question( 
	[
		new Answer("Хранители (2009)", 0),
		new Answer("Бойцовский клуб (1999)", 1),
		new Answer("Казино (1995)", 0),
        new Answer("Терминатор (1984)", 0),
		new Answer("Джокер (2019)", 0)
	], "<img src=\"images-test1/10.png\">"),

    new Question( 
	[
		new Answer("Матрица (1999)", 1),
		new Answer("Матрица: Революция (2003)", 0),
		new Answer("Матрица: Перезагрузка (2003)", 0),
        new Answer("Матрица: Воскрешение (2021)", 0),
		new Answer("Джокер (2019)", 0)
	], "<img src=\"images-test1/11.png\">"),

    new Question(
	[
		new Answer("Бэтмен: начало (2005)", 0),
		new Answer("Бэтмен (2022)", 1),
		new Answer("Бэтмен (1989)", 0),
        new Answer("Тёмный рыцарь (2008)", 0),
		new Answer("Тёмный рыцарь: Возрождение легенды (2012)", 0)
	], "<img src=\"images-test1/12.png\">"),
];

//Сам тест
const quiz = new Quiz(0, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{

		imageElem.innerHTML =  quiz.questions[quiz.current].img;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
        pagesElem.innerHTML = "Очки: " + quiz.score + " / " + quiz.questions.length;;

		buttonsElem.innerHTML = "";
		finalElem.innerHTML = quiz.results[quiz.result].text ;
		
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);
	
	//Ждём секунду и обновляем тест
	setTimeout(Update, 40);
}