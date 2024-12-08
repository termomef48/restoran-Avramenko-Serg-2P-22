document.getElementById('calculate-button').addEventListener('click', function () {
    const selectedDishes = Array.from(document.querySelectorAll('.dish-checkbox:checked'));
    const deliveryOption = document.querySelector('input[name="delivery"]:checked');

    let totalPrice = 0;
    let selectedItems = [];

    // Обчислення загальної вартості
    selectedDishes.forEach(dish => {
        const dishName = dish.value;
        const dishPrice = parseInt(dish.dataset.price, 10);
        totalPrice += dishPrice;
        selectedItems.push(`${dishName} - ${dishPrice} грн`);
    });

    // Додавання вартості доставки
    if (deliveryOption) {
        const deliveryPrice = parseInt(deliveryOption.dataset.price, 10);
        totalPrice += deliveryPrice;
        selectedItems.push(`Доставка - ${deliveryPrice} грн`);
    }

    // Виведення підсумку
    const summaryHTML = `
        <h2>Ваше замовлення:</h2>
        <ul>${selectedItems.map(item => `<li>${item}</li>`).join('')}</ul>
        <p><strong>Загальна сума:</strong> ${totalPrice} грн</p>
    `;
    document.getElementById('order-summary').innerHTML = summaryHTML;
});
