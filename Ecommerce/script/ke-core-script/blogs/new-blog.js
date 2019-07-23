// let toolbarOptions = [
//
//     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//     ['blockquote', 'code-block'],
//
//     [{'header': 1}, {'header': 2}],               // custom button values
//     [{'list': 'ordered'}, {'list': 'bullet'}],
//     [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
//     [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
//     [{'direction': 'rtl'}],                         // text direction
//
//     [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
//     [{'header': [1, 2, 3, 4, 5, 6, false]}],
//
//     [{'color': []}, {'background': []}],          // dropdown with defaults from theme
//     [{'font': []}],
//     [{'align': []}],
//     ['link', 'image'],
//     ['clean']                                         // remove formatting button
// ];
// Add fonts to whitelist

let Font = Quill.import('formats/font');
const loader = '<div class="mdl-spinner mdl-js-spinner is-active"></div>';
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'roboto'];
Quill.register(Font, true);

const editor = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Start To write Blog',
    modules: {
        imageResize: {
            displaySize: true
        },
        toolbar: {
            container: '#toolbar-container'
        },
        history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true
        }
    }
});
$categoryDropDown = $('#category-dropdown');
$subcategoryDropDown = $('#subcategory-dropdown');
$jsBlogCoverImage = $('.js-blog-cover-image');
$jsBlogNdbKey = $('.js-blog-ndb-key');

function selectLocalImage() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = () => {
        const file = input.files[0];
        // file type is only image.
        if (/^image\//.test(file.type)) {

            if ($jsBlogNdbKey.val() === '') {
                saveBlogDraft({isFinalized: false});
                saveToServer(file);
            } else {
                saveToServer(file);
            }
        } else {
            console.warn('You could only upload images.');
        }
    };
}

function saveToServer(file) {
    url = get_url();
    let formData = new FormData($("form")[0]);
    formData.append('image_type', 'blogs');
    formData.append('blog_key', $('.js-blog-ndb-key').val());
    formData.append("file", file);
    applyLoaderTOContainer({containerClass: 'js-save-loader-icon'})
    $.ajax({
        beforeSend: function () {
        },
        type: 'POST',
        url: url,
        processData: false,
        contentType: false,
        async: false,
        data: formData,
        success: function (data) {
            insertToEditor(data);
            deleteLoaderFromContainer({containerClass: 'js-save-loader-icon'})
        },
    });

}

function insertToEditor(url) {
    const range = editor.getSelection();
    editor.insertEmbed(range.index, 'image', url);
}

// quill editor add image handler
editor.getModule('toolbar').addHandler('image', (ev) => {
    selectLocalImage();
});

editor.on('text-change', update);

function update(delta, oldContents, source) {
    let currrentContents = editor.getContents();
    // console.log(currrentContents.diff(oldContents));
    // console.log(oldContents.diff(currrentContents));
    // a=oldContents.diff(currrentContents)
    // console.log(delta);
}

function get_url() {
    $(".divLoading").show();
    url = "";
    applyLoaderTOContainer({containerClass: 'js-save-loader-icon'});
    $.ajax({
        type: 'GET',
        url: '/get_upload_url',
        data: {'key': ''},
        async: false,
        success: function (data) {
            url = data
            deleteLoaderFromContainer({containerClass: 'js-save-loader-icon'})
        },
    });
    return url
}


$(document).ready(function () {
    $(document).on('change', '#category-dropdown', function (ev) {
        if ($categoryDropDown.val() !== "") {
            applyLoaderTOContainer({containerClass: 'js-save-loader-icon'})
            $.ajax({
                type: 'GET',
                url: '/blogs/get-lov-by-parentid',
                data: {'parent_id': $categoryDropDown.val()},
                success: function (data) {
                    $('.js-sub-cat-container').html(data);
                    $subcategoryDropDown = $('#subcategory-dropdown');
                    componentHandler.upgradeDom();
                    deleteLoaderFromContainer({containerClass: 'js-save-loader-icon'})

                },
            });
        }
    });

    $(document).on('click', '.js-btn-blog-save', function () {
        saveBlogDraft({isFinalized: true});
    });
    $(document).on('click', '.js-btn-blog-save-draft', function () {
        saveBlogDraft({isFinalized: false});
    })
});

function saveCoverImage() {
    if ($jsBlogNdbKey.val() === '') {
        saveBlogDraft({isFinalized: false});
    }
    if ($jsBlogCoverImage[0].files.length > 0) {
        const file = $jsBlogCoverImage[0].files[0];
        url = get_url();
        let formData = new FormData($("form")[0]);
        formData.append('image_type', 'blogs');
        formData.append('cover_image', 'true');
        formData.append('blog_key', $('.js-blog-ndb-key').val());
        formData.append("file", file);
        applyLoaderTOContainer({containerClass: 'js-save-loader-icon'});
        $.ajax({
            type: 'POST',
            url: url,
            processData: false,
            contentType: false,
            async: false,
            data: formData,
            success: function (data) {
                console.log('cover image: ', data);
                $('#message-cover-image').html(data);
                toast('cover image is saved!', 'okay');
                deleteLoaderFromContainer({containerClass: 'js-save-loader-icon'})
            },
        });
    }
}

function saveBlogDraft({isFinalized = true}) {
    if (editor.getLength() > 10) {
        let myFormData = new FormData();
        myFormData.append('category_id', $categoryDropDown.val());
        myFormData.append('subcat_id', $('#subcategory-dropdown').val());
        myFormData.append('additional_note', $('#additional-note').val());
        myFormData.append('blog_title', $('#blog-title').val());
        myFormData.append('blog_key', $jsBlogNdbKey.val());
        myFormData.append('is_finalized', isFinalized);
        myFormData.append('contents', editor.container.innerHTML);
        myFormData.append('content_text', editor.getText());
        if($('#comments_selection').is(':checked')){
            myFormData.append('comments', $("#comments_selection").val());
        }
        applyLoaderTOContainer({containerClass: 'js-save-loader-icon'})
        $.ajax({
            type: 'POST',
            url: '/blogs/write-new-blog',
            data: myFormData,
            processData: false,
            async: false,
            contentType: false,
            success: function (data) {
                if (data['status'] === 1) {
                    if (isFinalized === true) {
                        window.location.href = '/';
                    } else {
                        $jsBlogNdbKey.val(data['blog-key']);
                        toast('Draft Saved', 'OKAY')
                    }
                } else {
                    toast('Error in saving the blog', 'OKAY')
                }
                deleteLoaderFromContainer({containerClass: 'js-save-loader-icon'})
            },
        });
    } else {
        toast('enter more then 10 letters to save', 'okay');
    }
}

function empty_value() {
    this.value = null;
}

function applyLoaderTOContainer({containerId = '', containerClass = ''}) {
    if (containerId !== '') {
        $('#' + containerId).html(loader);
    }
    if (containerClass !== '') {
        document.getElementsByClassName(containerClass)[0].innerHTML = loader
    }
    componentHandler.upgradeDom();
}

function deleteLoaderFromContainer({containerId = '', containerClass = ''}) {
    if (containerId !== '') {
        $('#' + containerId).html('');
    }
    if (containerClass !== '') {
        $('.' + containerClass).html('');
    }
    componentHandler.upgradeDom();
}