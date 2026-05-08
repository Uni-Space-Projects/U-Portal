document.addEventListener('DOMContentLoaded', () => {
    // === Datos Simulados ===
    const realBalance = "Bs. 12,500.00";
    const hiddenBalance = "Bs. *****";
    
    // Transacciones simuladas
    const allTransactions = [
        { id: 1, type: 'in', title: 'Depósito en Efectivo', date: '05 May 2026', amount: '+ Bs. 5,000.00' },
        { id: 2, type: 'out', title: 'Pago Móvil - Juan Pérez', date: '04 May 2026', amount: '- Bs. 350.00' },
        { id: 3, type: 'out', title: 'Transferencia - Netflix', date: '01 May 2026', amount: '- Bs. 150.00' },
        { id: 4, type: 'in', title: 'Transferencia - Nómina', date: '30 Abr 2026', amount: '+ Bs. 8,000.00' }
    ];

    // === Lógica del Saldo ===
    const saldoAmount = document.getElementById('saldoAmount');
    const toggleSaldo = document.getElementById('toggleSaldo');
    let isSaldoVisible = false;

    toggleSaldo.addEventListener('click', () => {
        isSaldoVisible = !isSaldoVisible;
        if (isSaldoVisible) {
            saldoAmount.textContent = realBalance;
            toggleSaldo.textContent = '🙈';
        } else {
            saldoAmount.textContent = hiddenBalance;
            toggleSaldo.textContent = '👁️';
        }
    });

    // === Lógica de Transacciones ===
    const recentTransactionsList = document.getElementById('recentTransactions');
    const btnFilterAll = document.getElementById('btnFilterAll');
    const btnFilterIn = document.getElementById('btnFilterIn');
    const btnFilterOut = document.getElementById('btnFilterOut');

    function renderTransactions(filterType = 'all') {
        recentTransactionsList.innerHTML = ''; // Limpiar lista
        
        let filtered = allTransactions;
        if (filterType !== 'all') {
            filtered = allTransactions.filter(t => t.type === filterType);
        }

        // Mostrar solo las 3 más recientes
        const toShow = filtered.slice(0, 3);

        if (toShow.length === 0) {
            recentTransactionsList.innerHTML = '<li style="text-align:center; padding: 20px; color: var(--text-muted);">No hay transacciones</li>';
            return;
        }

        toShow.forEach(t => {
            const li = document.createElement('li');
            li.className = 'transaction-item';

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
            recentTransactionsList.appendChild(li);
        });
    }

    // Filtros
    btnFilterAll.addEventListener('click', () => renderTransactions('all'));
    btnFilterIn.addEventListener('click', () => renderTransactions('in'));
    btnFilterOut.addEventListener('click', () => renderTransactions('out'));

    // Inicializar lista
    renderTransactions('all');
});