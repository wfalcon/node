/**
 * Created by Falcon on 28.04.2017.
 */
var my_news1 = [];
var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Всем привет, я компонент App! <br />
                    Я умею отображать новости!</h3>
                <News data = {my_news} />
                <Comments />
            </div>
        );
    }
});

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <p className="news__author">{item.author}:</p>
                        <p className="news__text">{item.text}</p>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return(
            <div className="news">
                {newsTemplate}
                <strong className={data.length > 0 ? '':'none'}> Всего новостей: {data.length} </strong>
            </div>
        );

    }
});

var Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                Нет новостей, нечего комментировать!
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
