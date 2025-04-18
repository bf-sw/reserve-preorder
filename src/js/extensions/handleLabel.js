document.addEventListener('DOMContentLoaded', function () {
    // 모든 material_outlined-input 클래스를 가진 입력 필드 찾기
    const inputs = document.querySelectorAll('.material_outlined-input');

    inputs.forEach(input => {
        // 초기 상태 설정 - 이미 값이 있으면 라벨 축소
        if (input.value !== '') {
            const label = input
                .closest('.globo-form-control')
                .querySelector('.globo-label');
            if (label) {
                label.classList.add('gfb__label__shink');
            }
        }

        // 포커스 이벤트 - 라벨 축소
        input.addEventListener('focus', function () {
            const label = this.closest('.globo-form-control').querySelector(
                '.globo-label'
            );
            if (label) {
                label.classList.add('gfb__label__shink');
            }
        });

        // 블러 이벤트 - 값이 없으면 라벨 원래대로
        input.addEventListener('blur', function () {
            if (this.value === '') {
                const label = this.closest('.globo-form-control').querySelector(
                    '.globo-label'
                );
                if (label) {
                    label.classList.remove('gfb__label__shink');
                }
            }
        });
    });

    // 파일 업로드 기능 설정
    setupFileUpload();

    // 폼 선택
    const form = document.querySelector('form'); // 실제 폼 선택자로 변경하세요

    // 폼이 존재하면 제출 이벤트 리스너 추가
    if (form) {
        form.addEventListener('submit', function(event) {
            // 모든 입력 필드 선택
            const inputs = form.querySelectorAll('.material_outlined-input');
            let hasError = false;

            // 각 입력 필드 검증
            inputs.forEach(input => {
                if (!validateField(input)) {
                    hasError = true;
                }
            });

            // 에러가 있으면 폼 제출 방지
            if (hasError) {
                event.preventDefault();
            }
        });
    }

    // 파일 업로드 설정 함수
    function setupFileUpload() {
        // 모든 파일 업로드 영역 찾기
        const dropzones = document.querySelectorAll('.gfb__dropzone');

        dropzones.forEach(dropzone => {
            const browseButton = dropzone.querySelector('.gfb__dropzone--placeholder--button');
            const hiddenFileInput = dropzone.querySelector('input[type="file"][data-type="file2"]');
            const previewArea = dropzone.querySelector('.gfb__dropzone--preview--area');
            const placeholderContent = dropzone.querySelector('.gfb__dropzone--placeholder');

            if (browseButton && hiddenFileInput) {
                // 버튼 클릭 시 파일 선택 대화상자 열기
                browseButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    hiddenFileInput.click();
                });

                // 파일 선택 시 처리
                hiddenFileInput.addEventListener('change', function() {
                    if (this.files.length) {
                        handleFiles(this.files, previewArea, placeholderContent, hiddenFileInput);
                    }
                });

                // 드래그 앤 드롭 이벤트 설정
                dropzone.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.add('dragover');
                });

                dropzone.addEventListener('dragleave', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.remove('dragover');
                });

                dropzone.addEventListener('drop', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.remove('dragover');

                    if (e.dataTransfer.files.length) {
                        hiddenFileInput.files = e.dataTransfer.files;
                        handleFiles(hiddenFileInput.files, previewArea, placeholderContent, hiddenFileInput);
                    }
                });
            }
        });
    }

    // 파일 처리 함수
    function handleFiles(files, previewArea, placeholderContent, fileInput) {
        // 미리보기 영역 초기화
        previewArea.innerHTML = '';

        // 파일 확장자 제한 확인
        const allowedExtensions = fileInput.getAttribute('data-allowed-extensions');
        const allowedExtensionsArray = allowedExtensions ? allowedExtensions.split(',') : [];

        // 파일 크기 제한 확인
        const fileSizeLimit = fileInput.getAttribute('data-file-size-limit');
        const maxFileSize = fileSizeLimit ? parseInt(fileSizeLimit) * 1024 * 1024 : 0; // MB를 바이트로 변환

        // 파일 개수 제한 확인
        const fileLimit = fileInput.getAttribute('data-file-limit');
        const maxFiles = fileLimit ? parseInt(fileLimit) : 0;

        // 유효한 파일만 필터링
        let validFiles = Array.from(files);

        // 확장자 검사
        if (allowedExtensionsArray.length > 0) {
            validFiles = validFiles.filter(file => {
                const extension = file.name.split('.').pop().toLowerCase();
                return allowedExtensionsArray.includes(extension);
            });
        }

        // 파일 크기 검사
        if (maxFileSize > 0) {
            validFiles = validFiles.filter(file => file.size <= maxFileSize);
        }

        // 파일 개수 제한
        if (maxFiles > 0 && validFiles.length > maxFiles) {
            validFiles = validFiles.slice(0, maxFiles);
        }

        // 유효한 파일이 있으면 미리보기 생성
        if (validFiles.length > 0) {
            // 플레이스홀더 숨기기
            placeholderContent.style.display = 'none';

            // 각 파일에 대한 미리보기 생성
            validFiles.forEach(file => {
                const filePreview = document.createElement('div');
                filePreview.className = 'gfb__dropzone--preview--item';

                // 이미지 파일인 경우 미리보기 이미지 생성
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.className = 'gfb__dropzone--preview--image';
                    img.file = file;
                    filePreview.appendChild(img);

                    const reader = new FileReader();
                    reader.onload = (function(aImg) {
                        return function(e) {
                            aImg.src = e.target.result;
                        };
                    })(img);
                    reader.readAsDataURL(file);
                } else {
                    // 이미지가 아닌 파일은 아이콘으로 표시
                    const fileIcon = document.createElement('div');
                    fileIcon.className = 'gfb__dropzone--preview--file-icon';
                    fileIcon.textContent = '📄';
                    filePreview.appendChild(fileIcon);
                }

                // 파일 이름 표시
                const fileName = document.createElement('div');
                fileName.className = 'gfb__dropzone--preview--filename';
                fileName.textContent = file.name;
                filePreview.appendChild(fileName);

                // 삭제 버튼
                const removeButton = document.createElement('button');
                removeButton.type = 'button';
                removeButton.className = 'gfb__dropzone--preview--remove';
                removeButton.textContent = '×';
                removeButton.addEventListener('click', function() {
                    filePreview.remove();

                    // 모든 미리보기가 제거되면 플레이스홀더 다시 표시
                    if (previewArea.children.length === 0) {
                        placeholderContent.style.display = 'block';

                        // 파일 입력 필드 초기화
                        fileInput.value = '';
                    }
                });
                filePreview.appendChild(removeButton);

                previewArea.appendChild(filePreview);
            });
        } else {
            // 유효한 파일이 없으면 플레이스홀더 표시
            placeholderContent.style.display = 'block';

            // 파일 입력 필드 초기화
            fileInput.value = '';
        }
    }

    // 필드 유효성 검사 함수
    function validateField(input) {
        const value = input.value.trim();
        const inputType = input.getAttribute('data-type') || input.type;
        const fieldName = input.placeholder ||
                        (input.closest('.globo-form-control')?.querySelector('.label-content')?.textContent.trim() || '');
        let errorMessage = '';

        // 파일 입력 필드인 경우 별도 처리
        if (inputType === 'file2') {
            // 파일이 필수이고 선택된 파일이 없는 경우
            if (input.hasAttribute('presence') && (!input.files || input.files.length === 0)) {
                errorMessage = `Please select a file`;
                showError(input, [errorMessage]);
                return false;
            }
            // 유효성 검사 통과
            const formControl = findParentFormControl(input);
            clearErrors(formControl);
            formControl.classList.add('has-success');
            return true;
        }

        // 빈 값 검사
        if (value === '' && input.hasAttribute('presence')) {
            errorMessage = `Please fill in ${fieldName}`;
            showError(input, [errorMessage]);
            return false;
        }

        // 값이 있는 경우 타입별 유효성 검사
        if (value !== '') {
            switch (inputType) {
                case 'email':
                    if (!isValidEmail(value)) {
                        errorMessage = `Please enter a valid email address`;
                        showError(input, [errorMessage]);
                        return false;
                    }
                    break;

                case 'tel':
                case 'phone':
                    if (!isValidPhone(value)) {
                        errorMessage = `Please enter a valid phone number`;
                        showError(input, [errorMessage]);
                        return false;
                    }
                    break;

                case 'text':
                    // 이름 필드 검사 (placeholder나 label에 'name'이 포함된 경우)
                    if (fieldName.toLowerCase().includes('name') && !isValidName(value)) {
                        errorMessage = `Please enter a valid name`;
                        showError(input, [errorMessage]);
                        return false;
                    }

                    // WeChat ID 또는 ID 필드 검사
                    if ((fieldName.toLowerCase().includes('id') || fieldName.toLowerCase().includes('wechat')) && !isValidId(value)) {
                        errorMessage = `Please enter a valid ID`;
                        showError(input, [errorMessage]);
                        return false;
                    }
                    break;
            }
        }

        // 유효성 검사 통과
        const formControl = findParentFormControl(input);
        clearErrors(formControl);
        formControl.classList.add('has-success');
        return true;
    }

    // 이메일 유효성 검사
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 전화번호 유효성 검사
    function isValidPhone(phone) {
        // 국제 전화번호 형식 (+ 기호로 시작하는 경우 포함)
        const phoneRegex = /^(\+\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        return phoneRegex.test(phone);
    }

    // 이름 유효성 검사
    function isValidName(name) {
        // 최소 2자 이상, 문자와 공백만 허용
        const nameRegex = /^[A-Za-z\u00C0-\u024F\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF\s]{2,}$/;
        return nameRegex.test(name);
    }

    // ID 유효성 검사
    function isValidId(id) {
        // 최소 4자 이상, 영문, 숫자, 일부 특수문자 허용
        const idRegex = /^[A-Za-z0-9_\-\.]{4,}$/;
        return idRegex.test(id);
    }

    // 에러 메시지 표시 함수
    function showError(inputElement, errorMessages) {
        const formControl = findParentFormControl(inputElement);
        const messagesContainer = formControl.querySelector('.messages');

        // 기존 메시지 모두 제거
        clearErrors(formControl);

        // 에러 클래스 추가 및 에러 메시지 표시
        if (errorMessages && errorMessages.length) {
            formControl.classList.add('has-error');

            // messages 컨테이너 내용 비우기
            if (messagesContainer) {
                messagesContainer.innerHTML = '';

                // 새 에러 메시지 추가
                const errorElement = document.createElement('p');
                errorElement.classList.add('help-block', 'error');
                errorElement.innerText = errorMessages[0];
                messagesContainer.appendChild(errorElement);
            }
        }
    }

    // 에러 메시지 제거 함수
    function clearErrors(formControl) {
        // 에러 및 성공 클래스 제거
        formControl.classList.remove('has-error');
        formControl.classList.remove('has-success');

        // messages 컨테이너 찾기
        const messagesContainer = formControl.querySelector('.messages');
        if (messagesContainer) {
            // messages 컨테이너 내의 모든 내용 제거
            messagesContainer.innerHTML = '';
        }
    }

    // 부모 폼 컨트롤 요소 찾기 함수
    function findParentFormControl(element) {
        return element.closest('.globo-form-control');
    }
});
