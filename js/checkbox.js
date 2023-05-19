(function () {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        const label = checkbox.nextElementSibling;
        if (label && label.textContent.includes('przetwarzanie danych')) {
            checkbox.checked = false;
        }
    });
})();