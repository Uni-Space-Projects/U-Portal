document.addEventListener('DOMContentLoaded', () => {
    
    // Simulación extendida para el historial
    const extendedTransactions = [
        { id: 1001, type: 'in', title: 'Depósito en Efectivo', date: '05 May 2026', amount: '+ Bs. 5,000.00', ref: 'DEP-847362' },
        { id: 1002, type: 'out', title: 'Pago Móvil - Juan Pérez', date: '04 May 2026', amount: '- Bs. 350.00', ref: 'PM-918273' },
        { id: 1003, type: 'out', title: 'Transferencia - Netflix', date: '01 May 2026', amount: '- Bs. 150.00', ref: 'TR-102938' },
        { id: 1004, type: 'in', title: 'Transferencia - Nómina', date: '30 Abr 2026', amount: '+ Bs. 8,000.00', ref: 'TR-564738' },
        { id: 1005, type: 'out', title: 'Compra - Supermercado', date: '28 Abr 2026', amount: '- Bs. 1,200.00', ref: 'POS-223344' },
        { id: 1006, type: 'in', title: 'Pago Móvil - María Gómez', date: '25 Abr 2026', amount: '+ Bs. 400.00', ref: 'PM-887766' },
        { id: 1007, type: 'out', title: 'Pago de Servicios - Luz', date: '20 Abr 2026', amount: '- Bs. 80.00', ref: 'SER-112233' },
    ];

    const historyList = document.getElementById('historyList');
    const filterAll = document.getElementById('histFilterAll');
    const filterIn = document.getElementById('histFilterIn');
    const filterOut = document.getElementById('histFilterOut');

    // Modal
    const transactionDetail = document.getElementById('transactionDetail');
    const closeDetail = document.getElementById('closeDetail');
    const detRef = document.getElementById('detRef');
    const detDate = document.getElementById('detDate');
    const detTitle = document.getElementById('detTitle');
    const detAmount = document.getElementById('detAmount');

    function renderHistory(filterType = 'all') {
        historyList.innerHTML = '';
        
        let filtered = extendedTransactions;
        if (filterType !== 'all') {
            filtered = extendedTransactions.filter(t => t.type === filterType);
        }

        if (filtered.length === 0) {
            historyList.innerHTML = '<li style="text-align:center; padding: 20px; color: var(--text-muted);">No hay transacciones</li>';
            return;
        }

        filtered.forEach(t => {
            const li = document.createElement('li');
            li.className = 'transaction-item';
            li.style.cursor = 'pointer'; // Para indicar que se puede clickear

            const iconClass = t.type === 'in' ? 'icon-in' : 'icon-out';
            const iconSymbol = t.type === 'in' ? '↓' : '↑';
            const amountClass = t.type === 'in' ? 'amount-in' : 'amount-out';

            li.innerHTML = `
                <div class="transaction-info">
                    <div class="transaction-icon ${iconClass}">
                        ${iconSymbol}
                    </div>
                    <div class="transaction-details">
                        <h4>${t.title}</h4>
                        <p>${t.date}</p>
                    </div>
                </div>
                <div class="transaction-amount ${amountClass}">
                    ${t.amount}
                </div>
            `;

            // Evento para mostrar el detalle
            li.addEventListener('click', () => {
                showDetail(t);
            });

            historyList.appendChild(li);
        });
    }

    function showDetail(t) {
        detRef.textContent = t.ref;
        detDate.textContent = t.date;
        detTitle.textContent = t.title;
        detAmount.textContent = t.amount;
        
        const amountClass = t.type === 'in' ? 'var(--success-color)' : 'var(--text-color)';
        detAmount.style.color = amountClass;

        // Quitar la clase hidden pero usar un truco para que display sea flex
        transactionDetail.classList.remove('hidden');
        transactionDetail.style.display = 'flex'; // Forzar flex
    }

    closeDetail.addEventListener('click', () => {
        transactionDetail.classList.add('hidden');
        transactionDetail.style.display = 'none';
    });

    // Filtros
    filterAll.addEventListener('click', () => renderHistory('all'));
    filterIn.addEventListener('click', () => renderHistory('in'));
    filterOut.addEventListener('click', () => renderHistory('out'));

    // Inicializar
    renderHistory('all');
});
