import React from 'react'
import './index.scss'
import Breadcrumb from '../../components/Breadcrumb'

function AboutUs() {
	return (
		<div className="about-us">
			<div className="container">
				<div className="about-us__wrapper">
					<Breadcrumb />
					<div className="about-us__info">
						<div className="about-us__info-title">
							<span>Про нас</span>
						</div>
						<div className="about-us__info-subtitle">
							<span>
								Ласкаво просимо до Vroom Vibes - вашого найкращого вибору для
								незабутніх автомобільних пригод! Ми - команда професіоналів з
								багаторічним досвідом в області автомобільної індустрії, яка
								працює для вашого комфорту та задоволення.
							</span>
						</div>
						<div className="about-us__items">
							<div className="about-us__item">
								<div className="about-us__item-title">
									<span>Наші цінності</span>
								</div>
								<div className="about-us__item-decription">
									<span>
										У Vroom Vibes ми прагнемо забезпечити вас найвищою якістю
										обслуговування та надійними автомобілями для вашої безпеки
										та комфорту. Наша місія - зробити ваші подорожі незабутніми
										та захоплюючими, а наші цінності - це те, що визначає нашу
										роботу.
									</span>
								</div>
							</div>
							<div className="about-us__item">
								<div className="about-us__item-title">
									<span>Широкий вибір автомобілів</span>
								</div>
								<div className="about-us__item-decription">
									<span>
										Ми пропонуємо широкий вибір автомобілів різних марок і
										моделей, включаючи економічні, розкішні та спортивні
										варіанти. Ви обов'язково знайдете авто, що відповідає вашим
										потребам та бюджету.
									</span>
								</div>
							</div>
							<div className="about-us__item">
								<div className="about-us__item-title">
									<span>Простий та зручний інтерфейс</span>
								</div>
								<div className="about-us__item-decription">
									<span>
										Наш вебсайт має простий та зрозумілий інтерфейс, який
										дозволяє легко шукати та бронювати автомобілі всього за
										кілька кроків. Ми віримо, що планування подорожі повинно
										бути легким та приємним процесом.
									</span>
								</div>
							</div>
							<div className="about-us__item">
								<div className="about-us__item-title">
									<span>Вигідні тарифи та гнучкі умови</span>
								</div>
								<div className="about-us__item-decription">
									<span>
										Ми пропонуємо вигідні тарифи на оренду автомобілів разом із
										гнучкими умовами, щоб ви могли насолоджуватися вашими
										подорожами без зайвих переживань. У нас є різні пакети
										оренди, які враховують ваші потреби та бюджет.
									</span>
								</div>
							</div>
							<div className="about-us__item">
								<div className="about-us__item-title">
									<span>Висока якість обслуговування</span>
								</div>
								<div className="about-us__item-decription">
									<span>
										Наша команда професіоналів завжди готова надати вам найкраще
										обслуговування. Ми регулярно перевіряємо стан автомобілів та
										забезпечуємо їх належну технічну підтримку.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="about-us__terms">
						<div className="about-us__terms-title">
							<span>Умови аренди</span>
						</div>
						<div className="about-us__terms-list">
							<span>1. Мінімальний вік водія: 21 рік.</span>
							<span>2. Стаж водіння: не менше 10 місяців.</span>
							<span>3. Документи: водійські права, паспорт.</span>
							<span>
								4. Страхування: усі наші автомобілі забезпечені повним страховим
								покриттям.
							</span>
						</div>
						<div className="about-us__feedback">
							<div className="about-us__feedback-title">
								<span>Зв'яжіться з нами</span>
							</div>
							<div className="about-us__feedback-description">
								<span>
									Ми завжди раді вам допомогти з плануванням вашої наступної
									подорожі. Зв'яжіться з нами сьогодні, і ми з радістю
									допоможемо вам з усіма вашими потребами в оренді автомобіля!
									Приєднуйтесь до Vroom Vibes сьогодні та відкрийте для себе
									світ автомобільних пригод!
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
