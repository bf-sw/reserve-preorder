'use strict';
(self.webpackChunkgloboFormbuilder =
    self.webpackChunkgloboFormbuilder || []).push([
    [50],
    {
        119: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    default: () => n,
                });
            const n = {
                init: function (e, t) {
                    e.querySelectorAll('.gfb__dropzone').forEach(e => {
                        e.addEventListener('dragover', this.dragOverHandle),
                            e.addEventListener(
                                'dragleave',
                                this.dragLeaveHandle
                            ),
                            e.addEventListener('drop', this.dropHandle);
                        e.querySelector('input[type="file"]').addEventListener(
                            'change',
                            this.dropHandle
                        );
                        e.querySelector(
                            'button[type="button"]'
                        ).addEventListener('click', this.onBrowse);
                    });
                },
                onBrowse: function (e) {
                    e.target
                        .closest('.globo-form-control')
                        .querySelector('label[for]')
                        .click();
                },
                dragOverHandle: function (e) {
                    e.preventDefault(),
                        e.currentTarget.setAttribute('data-area-active', !0);
                },
                dragLeaveHandle: function (e) {
                    e.preventDefault(),
                        e.currentTarget.removeAttribute('data-area-active');
                },
                dropHandle: function (e) {
                    let t, r;
                    e.preventDefault(),
                        'drop' === e.type
                            ? ((t = e.currentTarget),
                              (r = e.dataTransfer.files))
                            : 'change' === e.type &&
                              ((t = e.target.closest('.gfb__dropzone')),
                              (r = e.target.files));
                    const n = t.querySelector('input[type="file"][name]');
                    t.removeAttribute('data-area-active');
                    const a = Array.from(n.files);
                    if (n.hasAttribute('multiple')) {
                        const e = a.slice();
                        let t = n.getAttribute('data-file-limit');
                        t = !isNaN(t) && parseInt(t);
                        for (let n = 0; n < r.length; n++) {
                            a.some(e => e.name === r[n].name) ||
                                (t && !(t > e.length)) ||
                                e.push(r[n]);
                        }
                        n.files = Globo.FormBuilder.createFileList(e);
                    } else {
                        const e = new DataTransfer();
                        e.items.add(r[0]), (n.files = e.files);
                    }
                    n.dispatchEvent(new Event('change')),
                        Globo.FormBuilder.showFiles(n.files, t);
                },
                createFileList: function (e) {
                    const t = new DataTransfer();
                    return e.forEach(e => t.items.add(e)), t.files;
                },
                showFiles: function (e, t) {
                    const n = t.querySelector('.gfb__dropzone--preview--area');
                    Promise.all([r.e(736), r.e(209)])
                        .then(r.bind(r, 7480))
                        .then(r => {
                            t.setAttribute(
                                'data-area-previewing',
                                e.length > 0
                            );
                            const { default: a } = r;
                            let o = a.templates.filesList;
                            document.querySelector(
                                '#globo-formbuilder-filesList'
                            ) &&
                                (o = document.querySelector(
                                    '#globo-formbuilder-filesList'
                                ).innerHTML);
                            const l = a.parseAndRenderSync(o, {
                                files: e,
                            });
                            if (
                                ((n.innerHTML = l),
                                this.handleEvents(t),
                                Globo.FormBuilder.wizardInstance)
                            ) {
                                const { wizardInstance: e } = Globo.FormBuilder;
                                e.panels.updatePanelsContainerHeight();
                            }
                        });
                },
                handleEvents: function (e) {
                    e.querySelectorAll('[data-file-remove]').forEach(e => {
                        e.addEventListener('click', this.removeFile);
                    });
                },
                removeFile: function (e) {
                    const t = e.target
                            .closest('.gfb__dropzone')
                            .querySelector('input[type="file"][name]'),
                        r = e.target
                            .closest('.gfb__dropzone')
                            .querySelector('input[type="file"]'),
                        n = parseInt(e.target.getAttribute('data-file-index')),
                        { files: a } = t,
                        o = new DataTransfer();
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e];
                        n !== e && o.items.add(t);
                    }
                    (t.files = o.files),
                        (r.files = o.files),
                        t.dispatchEvent(new Event('change'));
                    const l = e.target.closest('.gfb__dropzone');
                    Globo.FormBuilder.showFiles(t.files, l);
                },
            };
        },
    },
]);
