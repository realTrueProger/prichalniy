import React from 'react';
import {Grid} from "@mui/material";

function Home() {
    return (
        <Grid container spacing={4}>
            <Grid md={8} item>
                <h1>Инициативная группа Level Причальный</h1>
                <p>Мы – жители Level Причальный. Мы объединились, чтобы сделать жизнь в нашем комплексе более безопасной и
                    комфортной, а работу управляющей компании – честной и прозрачной. </p>

                <br/>
                <h2>ВНИМАНИЕ! ВАЖНАЯ ИНФОРМАЦИЯ ДЛЯ ВСЕХ ЖИЛЬЦОВ НАШЕГО ДОМА</h2>
                <p>Управляющая компания проводит первичное голосование на ОСС, но на этот раз мы должны быть более
                    бдительными!</p>
                <h3>Почему вы НЕ должны голосовать:</h3>
                <ul>
                    <li><strong>Некачественные услуги:</strong> Нас не устраивает качество обслуживания и отношение к
                        нашим жалобам.
                    </li>
                    <li><strong>Прозрачность финансов:</strong> Мы так и не получили ясного отчета о расходах и
                        использовании наших средств.
                    </li>
                    <li><strong>Игнорирование интересов:</strong> Наши предложения и замечания постоянно игнорируются.
                    </li>
                </ul>
                <p>Мы все заслуживаем честного и качественного управления нашим домом. Не дайте себя обмануть еще
                    раз!</p>
                <h3>НЕ ГОЛОСУЙТЕ на предстоящем ОСС!</h3>
                <p>Хотите узнать больше и обсудить план действий? Переходите по ссылке: <a href="https://t.me/prichalny/1/63592">Подробнее
                    здесь</a></p>
                <p>Давайте действовать вместе ради наших интересов!</p>
                <p><strong>С уважением, ваши соседи.</strong></p>
            </Grid>

            <Grid md={4} item className="image">
                <img src="https://images.cdn-cian.ru/images/level-prichalnyy-moskva-jk-2111509002-7.jpg" alt="Company"/>
            </Grid>
        </Grid>
    );
}

export default Home;
