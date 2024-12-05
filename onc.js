function goToHomepage() {
    window.location.href = 'index.html'; 
}

function updateOrderDetails() {
    const updatedOrder = {
        orderNumber: "987654",
        customerName: "Alice Smith",
        paymentMethod: "Online Payment",
        orderTotal: "Rs:200.00",
        deliveryDate: "24th November 2024"
    };
    document.getElementById('order-number').textContent = updatedOrder.orderNumber;
    document.getElementById('customer-name').textContent = updatedOrder.customerName;
    document.getElementById('payment-method').textContent = updatedOrder.paymentMethod;
    document.getElementById('order-total').textContent = updatedOrder.orderTotal;
    document.getElementById('delivery-date').textContent = updatedOrder.deliveryDate;
}