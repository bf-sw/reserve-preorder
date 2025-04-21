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
        form.addEventListener('submit', function (event) {
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

    // 파일 입력 필드 상태 업데이트 함수
    function updateFileInputState(fileInput, previewList) {
        // 현재 표시된 파일 목록이 비어 있는지 확인
        const hasFiles =
            previewList.querySelectorAll('.gfb__dropzone--preview--item')
                .length > 0;

        // 파일 입력 필드의 부모 요소에 상태 클래스 추가/제거
        const dropzone = fileInput.closest('.gfb__dropzone');
        if (dropzone) {
            if (hasFiles) {
                dropzone.classList.add('has-files');
                dropzone.setAttribute('data-area-previewing', 'true'); // 파일이 있을 때 속성 추가
            } else {
                dropzone.classList.remove('has-files');
                dropzone.setAttribute('data-area-previewing', 'false'); // 파일이 없을 때 속성 값 변경
                // 파일 입력 필드 초기화 (새 파일 선택 가능하도록)
                fileInput.value = '';
            }
        }
    }

    // 파일 업로드 설정 함수
    function setupFileUpload() {
        // 모든 파일 업로드 영역 찾기
        const dropzones = document.querySelectorAll('.gfb__dropzone');

        dropzones.forEach(dropzone => {
            const browseButton = dropzone.querySelector(
                '.gfb__dropzone--placeholder--button'
            );
            const hiddenFileInput = dropzone.querySelector(
                'input[type="file"][data-type="file2"]'
            );
            const previewArea = dropzone.querySelector(
                '.gfb__dropzone--preview--area'
            );
            const placeholderContent = dropzone.querySelector(
                '.gfb__dropzone--placeholder'
            );

            // 초기 상태 설정 - 파일이 없으므로 false로 설정
            dropzone.setAttribute('data-area-previewing', 'false');

            // 미리보기 영역에 리스트 컨테이너가 없으면 생성
            let previewList = previewArea.querySelector(
                '.gfb__dropzone--preview--list'
            );

            if (!previewList) {
                previewList = document.createElement('div');
                previewList.className = 'gfb__dropzone--preview--list';
                previewArea.appendChild(previewList);
            }

            // 이미 파일이 있는지 확인하고 상태 업데이트
            if (previewList.children.length > 0) {
                dropzone.setAttribute('data-area-previewing', 'true');
            }

            if (browseButton && hiddenFileInput) {
                // 버튼 클릭 시 파일 선택 대화상자 열기
                browseButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    hiddenFileInput.click();
                });

                // 파일 선택 시 처리
                hiddenFileInput.addEventListener('change', function () {
                    if (this.files.length) {
                        handleFiles(
                            this.files,
                            previewList,
                            placeholderContent,
                            hiddenFileInput
                        );

                        // 파일이 추가되면 data-area-previewing 속성 업데이트
                        updateFileInputState(hiddenFileInput, previewList);
                    }
                });

                // 드래그 앤 드롭 이벤트 설정
                dropzone.addEventListener('dragover', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.add('dragover');
                });

                dropzone.addEventListener('dragleave', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.remove('dragover');
                });

                dropzone.addEventListener('drop', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.remove('dragover');

                    if (e.dataTransfer.files.length) {
                        handleFiles(
                            e.dataTransfer.files,
                            previewList,
                            placeholderContent,
                            hiddenFileInput
                        );

                        // 파일이 추가되면 data-area-previewing 속성 업데이트
                        updateFileInputState(hiddenFileInput, previewList);
                    }
                });

                // 이미 업로드된 파일 삭제 이벤트 위임
                previewArea.addEventListener('click', function (e) {
                    const removeButton = e.target.closest('[data-file-remove]');
                    if (removeButton) {
                        const fileItem = removeButton.closest(
                            '.gfb__dropzone--preview--item'
                        );
                        if (fileItem) {
                            fileItem.remove();

                            // 모든 미리보기가 제거되면 플레이스홀더 다시 표시
                            if (previewList.children.length === 0) {
                                // 파일 입력 필드 초기화
                                hiddenFileInput.value = '';

                                // 파일이 모두 삭제되면 data-area-previewing 속성 업데이트
                                updateFileInputState(
                                    hiddenFileInput,
                                    previewList
                                );
                            }
                        }
                    }
                });
            }
        });
    }

    // 파일 처리 함수
    function handleFiles(files, previewList, placeholderContent, fileInput) {
        // 파일 확장자 제한 확인
        const allowedExtensions = fileInput.getAttribute(
            'data-allowed-extensions'
        );
        const allowedExtensionsArray = allowedExtensions
            ? allowedExtensions.split(',')
            : [];

        // 파일 크기 제한 확인
        const fileSizeLimit = fileInput.getAttribute('data-file-size-limit');
        const maxFileSize = fileSizeLimit
            ? parseInt(fileSizeLimit) * 1024 * 1024
            : 0; // MB를 바이트로 변환

        // 파일 개수 제한 확인
        const fileLimit = fileInput.getAttribute('data-file-limit');
        const maxFiles = fileLimit ? parseInt(fileLimit) : 0;

        // 현재 표시된 파일 개수
        const currentFileCount = previewList.querySelectorAll(
            '.gfb__dropzone--preview--item'
        ).length;

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

        // 파일 개수 제한 (이미 있는 파일 + 새 파일이 최대 개수를 초과하지 않도록)
        if (maxFiles > 0 && currentFileCount + validFiles.length > maxFiles) {
            validFiles = validFiles.slice(0, maxFiles - currentFileCount);
        }

        // 유효한 파일이 있으면 미리보기 생성
        if (validFiles.length > 0) {
            // dropzone 요소 찾기 및 상태 업데이트
            const dropzone = fileInput.closest('.gfb__dropzone');
            if (dropzone) {
                dropzone.setAttribute('data-area-previewing', 'true');
            }

            // 각 파일에 대한 미리보기 생성
            validFiles.forEach((file, index) => {
                const fileIndex = currentFileCount + index;

                // 미리보기 아이템 생성 (요청하신 마크업 구조에 맞게 수정)
                const previewItem = document.createElement('div');
                previewItem.className = 'gfb__dropzone--preview--item';

                // 썸네일 컨테이너
                const thumbContainer = document.createElement('div');
                thumbContainer.className = 'gfb__dropzone--preview--item-thumb';

                // 이미지 파일인 경우 미리보기 이미지 생성
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.alt = file.name;
                    thumbContainer.appendChild(img);

                    const reader = new FileReader();
                    reader.onload = function (e) {
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                } else {
                    // 이미지가 아닌 파일은 기본 아이콘 표시
                    const fileIcon = document.createElement('div');
                    fileIcon.className = 'gfb__dropzone--preview--file-icon';
                    fileIcon.textContent = '📄';
                    thumbContainer.appendChild(fileIcon);
                }

                previewItem.appendChild(thumbContainer);

                // 파일 정보 컨테이너
                const titleContainer = document.createElement('div');
                titleContainer.className = 'gfb__dropzone--preview--item-title';

                // 파일 이름
                const fileName = document.createElement('div');
                fileName.className = 'gfb__dropzone--preview--item-filename';
                fileName.textContent = file.name;
                titleContainer.appendChild(fileName);

                // 삭제 버튼
                const removeButton = document.createElement('div');
                removeButton.className = 'gfb__dropzone--preview--item-remove';
                removeButton.setAttribute('data-file-remove', '');
                removeButton.setAttribute('data-file-index', fileIndex);
                removeButton.innerHTML =
                    '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z" fill="currentColor"></path></svg>';
                titleContainer.appendChild(removeButton);

                previewItem.appendChild(titleContainer);

                // 미리보기 리스트에 추가
                previewList.appendChild(previewItem);
            });
        }
    }

    // 필드 유효성 검사 함수
    function validateField(input) {
        const value = input.value.trim();
        const inputType = input.getAttribute('data-type') || input.type;
        const fieldName =
            input.placeholder ||
            input
                .closest('.globo-form-control')
                ?.querySelector('.label-content')
                ?.textContent.trim() ||
            '';
        let errorMessage = '';

        // 파일 입력 필드인 경우 별도 처리
        if (inputType === 'file2') {
            // 파일이 필수이고 선택된 파일이 없는 경우
            if (
                input.hasAttribute('presence') &&
                (!input.files || input.files.length === 0)
            ) {
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
                    if (
                        fieldName.toLowerCase().includes('name') &&
                        !isValidName(value)
                    ) {
                        errorMessage = `Please enter a valid name`;
                        showError(input, [errorMessage]);
                        return false;
                    }

                    // WeChat ID 또는 ID 필드 검사
                    if (
                        (fieldName.toLowerCase().includes('id') ||
                            fieldName.toLowerCase().includes('wechat')) &&
                        !isValidId(value)
                    ) {
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
        const phoneRegex =
            /^(\+\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        return phoneRegex.test(phone);
    }

    // 이름 유효성 검사
    function isValidName(name) {
        // 최소 2자 이상, 문자와 공백만 허용
        const nameRegex =
            /^[A-Za-z\u00C0-\u024F\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF\s]{2,}$/;
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
