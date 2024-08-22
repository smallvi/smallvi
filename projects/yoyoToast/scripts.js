function hideExampleCode() {
    let example = document.getElementsByClassName('example');

    for (let i = 0; i < example.length; i++) {
        example[i].classList.add('hidden');
    }
}

document.getElementById('danger').addEventListener('click', function () {
    yoyoToast.fire({
        type: 'danger',
        title: 'Oh no!',
        message: 'Something went wrong!',
        subtext: 'The student name field is required.',
        position: 'top-right',
    });
});

document.getElementById('danger').onmouseover = function () {
    hideExampleCode();
    document.getElementById('danger_code').classList.remove('hidden');
}

document.getElementById('info').addEventListener('click', function () {
    yoyoToast.fire({
        type: 'info',
        title: 'Update Available',
        message: 'Update to 10.5.3',
        timeout: 10000,
        subtext: '~ Info Yoyo Toast ~',
        position: 'top-right',
        timeoutFunction: () => alert('Timeout Function called'),
        hasConfirmation: true,
        confirmLabel: 'Right!',
        confirmFunction: () => alert('Confirm Function Called'),
        hasCancellation: true,
        cancelLabel: 'Not Now',
        cancelFunction: () => alert('Cancel function Called'),
    });
});

document.getElementById('info').onmouseover = function () {
    hideExampleCode();
    document.getElementById('info_code').classList.remove('hidden');
}

document.getElementById('success').addEventListener('click', function () {
    yoyoToast.fire({
        type: 'success',
        title: 'Congratulation!',
        message: 'Updated Successfully',
        timeout: 3000,
        position: 'top-right'
    });
});

document.getElementById('success').onmouseover = function () {
    hideExampleCode();
    document.getElementById('success_code').classList.remove('hidden');
}



document.getElementById('warning').addEventListener('click', function () {
    yoyoToast.fire({
        type: 'warning',
        message: 'Warning!',
        timeout: 0,
        subtext: 'Windows will shut down in 10 seconds.',
        position: 'top-left'
    });
});

document.getElementById('warning').onmouseover = function () {
    hideExampleCode();
    document.getElementById('warning_code').classList.remove('hidden');
}

document.getElementById('question').addEventListener('click', function () {
    yoyoToast.fire({
        type: 'question',
        message: 'Do you need any further assistance?',
        timeout: 0,
        
        position: 'bottom-right'
    });
});

document.getElementById('question').onmouseover = function () {
    hideExampleCode();
    document.getElementById('question_code').classList.remove('hidden');
}


for (let i = 0; i < 2; i++) {
    setTimeout(() => {
        yoyoToast.fire({
            type: 'info',
            message: `This is message ${i + 1} `,
            timeout: 5000,
            position: 'top-left'
        });
    }, i * 500);
}

for (let i = 0; i < 2; i++) {
    setTimeout(() => {
        yoyoToast.fire({
            type: 'warning',
            message: `This is message ${i + 1} `,
            timeout: 5000,
            position: 'top-right'
        });
    }, i * 500);
}


for (let i = 0; i < 2; i++) {
    setTimeout(() => {
        yoyoToast.fire({
            type: 'success',
            message: `This is message ${i + 1} `,
            timeout: 5000,
            position: 'bottom-left'
        });
    }, i * 500);
}

for (let i = 0; i < 2; i++) {
    setTimeout(() => {
        yoyoToast.fire({
            type: 'danger',
            message: `This is message ${i + 1} `,
            timeout: 5000,
            position: 'bottom-right'
        });
    }, i * 500);
}

