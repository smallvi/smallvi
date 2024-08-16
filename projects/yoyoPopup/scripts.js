document.getElementById('successBtn').onclick = function () {
    showYoyoPopup({
        text: 'Created Successfully',
        type: 'success',
        timeOut: 5000,
    });


};

function hideExampleCode() {
    let example = document.getElementsByClassName('example');

    for (let i = 0; i < example.length; i++) {
        example[i].classList.add('hidden');
    }
}

document.getElementById('successBtn').onmouseover = function () {
    hideExampleCode();
    document.getElementById('success_code').classList.remove('hidden');
}

document.getElementById('dangerBtn').onclick = function () {
    showYoyoPopup({
        text: 'Are you sure you want to proceed?',
        subtext: 'This action cannot be undone.',
        type: 'danger',
        isStatic: true,
        hasConfirmation: true,
        hasCancellation: true,
        confirmLabel: 'Yes, proceed',
        cancelLabel: 'Cancel',
        closeLabel: 'Close',
        formId: '',
        confirmFunction: () => functionConfirm(),
        cancelFunction: () => functionCancel(),
        closeFunction: () => alert('You click Close'),
    });
};

document.getElementById('dangerBtn').onmouseover = function () {
    hideExampleCode();
    document.getElementById('danger_code').classList.remove('hidden');
}

document.getElementById('infoBtn').onclick = function () {
    showYoyoPopup({
        text: 'What is python?',
        subtext: 'Python is a type of large, non-venomous snake found in Africa, Asia, and Australia. Pythons are known for their ability to constrict and suffocate their prey before swallowing it whole. They are often found in rainforests, grasslands, and swamps.',
        type: 'info',
    });
};

document.getElementById('infoBtn').onmouseover = function () {
    hideExampleCode();
    document.getElementById('info_code').classList.remove('hidden');
}

document.getElementById('warningBtn').onclick = function () {
    showYoyoPopup({
        text: 'Warning: Changes you made may not be saved.',
        type: 'warning',
        isStatic: true,
        hasConfirmation: true,
        confirmLabel: 'Yes, Continue',
        closeLabel: 'Close',
        confirmFunction: () => alert('You click Confirm!'),
    });
};

document.getElementById('warningBtn').onmouseover = function () {
    hideExampleCode();
    document.getElementById('warning_code').classList.remove('hidden');
}

document.getElementById('questionBtn').onclick = function () {
    showYoyoPopup({
        text: 'Are you sure you want to log out?',
        type: 'question',
        isStatic: true,
        hasConfirmation: true,
        confirmLabel: 'Log Out',
        closeLabel: 'Cancel',
        confirmFunction: () => showYoyoPopup({
            text: 'You click log out',
            type: 'info',
        }),
    });
};

document.getElementById('questionBtn').onmouseover = function () {
    hideExampleCode();
    document.getElementById('question_code').classList.remove('hidden');
}


function functionConfirm() {
    alert('Function Confirm called');
}

function functionCancel() {
    alert('Function Cancel called');
}